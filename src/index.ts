// AUTO-GENERATED. ALL CHANGES WILL BE OVERWRITTEN
import AbstractSpruceError from '@sprucelabs/error'
import {
	HEALTH_DIVIDER,
	ERROR_DIVIDER,
	pluginUtil,
} from '@sprucelabs/spruce-skill-utils'
// @ts-ignore
import skill from '#spruce/skill'

const isHealthCheck = !!process.argv.find((arg) => arg === '--health')

async function run() {
	await pluginUtil.import([skill], skill.hashSpruceDir)

	if (isHealthCheck) {
		const health = await skill.checkHealth()
		console.log(HEALTH_DIVIDER)
		console.log(JSON.stringify(health))
		console.log(HEALTH_DIVIDER)
	} else {
		await skill.execute()
	}
}

run()
	.then(() => {})
	.catch((err) => {
		if (err instanceof AbstractSpruceError && process.env.IS_CLI) {
			console.error(ERROR_DIVIDER + err.toJson() + ERROR_DIVIDER)
		} else {
			console.error(err.stack ?? err.message)
		}
		process.exit(1)
	})
