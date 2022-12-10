import { SchemaError } from '@sprucelabs/schema'
import { EventFeature } from '@sprucelabs/spruce-event-plugin'
import {
	SpruceEvent,
	SpruceEventResponse,
	eventResponseUtil,
} from '@sprucelabs/spruce-event-utils'
import { EnvService } from '@sprucelabs/spruce-skill-utils'

export default async (event: SpruceEvent): SpruceEventResponse => {
	const sandboxNumber = process.env.SANDBOX_DEMO_NUMBER

	if (sandboxNumber && process.env.SKILL_ID) {
		const log = event.log.buildLog('Sandbox')

		log.info('Demo sandbox number detected. Checking skill status.')

		const events = event.skill.getFeatureByCode('event') as EventFeature

		const env = new EnvService(event.skill.rootDir)

		process.env.SKILL_ID = (env.get('SKILL_ID') ??
			process.env.SKILL_ID) as string
		process.env.SKILL_API_KEY = (env.get('SKILL_API_KEY') ??
			process.env.SKILL_API_KEY) as string

		try {
			await events.connectToApi({ shouldWaitForWillBoot: false })
			return
			// eslint-disable-next-line no-empty
		} catch {}

		log.warn('It looks like sandbox was reset. Re-registering.')

		const name = process.env.SKILL_NAME as string
		const slug = process.env.SKILL_SLUG as string

		assertRequiredParams(name, slug)

		delete process.env.SKILL_ID
		delete process.env.SKILL_API_KEY

		const client = (await events.connectToApi({
			shouldWaitForWillBoot: false,
		})) as any

		const requestResults = await client.emit('request-pin::v2020_12_25', {
			payload: {
				phone: sandboxNumber,
			},
		})

		const { challenge } =
			eventResponseUtil.getFirstResponseOrThrow(requestResults)

		const confirmResults = await client.emit('confirm-pin::v2020_12_25', {
			payload: {
				challenge,
				pin: sandboxNumber.substr(-4),
			},
		})

		eventResponseUtil.getFirstResponseOrThrow(confirmResults)

		const results = await client.emit('register-skill::v2020_12_25', {
			payload: {
				name,
				description: 'Auto-generate for sandbox',
				slug,
			},
		})

		const { skill } = eventResponseUtil.getFirstResponseOrThrow(results)

		process.env.SKILL_ID = skill.id
		process.env.SKILL_API_KEY = skill.apiKey

		await client.emit(`logout::v2020_12_25`)

		await client.authenticate({
			skillId: skill.id,
			apiKey: skill.apiKey,
		})

		env.set('SKILL_ID', skill.id)
		env.set('SKILL_API_KEY', skill.apiKey)
	}

	return
}

function assertRequiredParams(
	name: string | undefined,
	slug: string | undefined
) {
	const missing: string[] = []

	if (!name) {
		missing.push('env.SKILL_NAME')
	}

	if (!slug) {
		missing.push('env.SKILL_SLUG')
	}

	if (missing.length > 0) {
		throw new SchemaError({ code: 'MISSING_PARAMETERS', parameters: missing })
	}
}
