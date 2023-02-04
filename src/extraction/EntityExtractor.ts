//@ts-ignore
import { NlpManager } from 'node-nlp'

export default class EntityExtractor {
	private manager: NlpManager
	private services: Record<string, NlpService> = {}
	private teammates: Record<string, NlpTeammate> = {}

	private constructor() {
		this.manager = new NlpManager({
			languages: ['en'],
			forceNER: true,
			ner: { threshold: 0.7 },
		})
	}

	public static Extractor() {
		return new this()
	}

	public async extract(utterance: string): Promise<BookingEntities | null> {
		const { entities } = (await this.manager.process('en', utterance)) as {
			entities: NlpEntity[]
		}

		if (entities.length === 0) {
			return null
		}

		const results: BookingEntities = {}

		this.extractStartDateTimeMs(entities, results)
		this.extractServices(entities, results)
		this.extractProviders(entities, results)

		return results
	}

	private extractServices(entities: NlpEntity[], results: BookingEntities) {
		const services = entities.filter(
			(e) => e.entity === 'service'
		) as ServiceEntity[]

		if (services.length > 0) {
			results.services = services.map((s) => this.services[s.option].id)
		}
	}

	private extractProviders(entities: NlpEntity[], results: BookingEntities) {
		const provdiers = entities.filter(
			(e) => e.entity === 'teammate'
		) as ServiceEntity[]

		if (provdiers.length > 0) {
			results.providers = provdiers.map((s) => this.teammates[s.option].id)
		}
	}

	public addService(service: NlpService) {
		this.services[service.id] = service
		this.manager.addNamedEntityText(
			'service',
			service.id,
			['en'],
			[
				service.name,
				service.name.toLocaleLowerCase(),
				service.name.toLocaleUpperCase(),
			]
		)
	}

	private extractStartDateTimeMs(
		entities: NlpEntity[],
		results: BookingEntities
	) {
		const dateMatch = (
			entities.find((e) => e.entity === 'datetime') as DateTimeEntity
		)?.resolution?.values?.[0]?.value

		if (dateMatch) {
			const date = new Date(dateMatch)
			results.startDateTimeMs =
				date.getTime() - date.getTimezoneOffset() * 60 * 1000
		}
	}

	public addProvider(teammate: NlpTeammate) {
		this.teammates[teammate.id] = teammate
		this.manager.addNamedEntityText(
			'teammate',
			teammate.id,
			['en'],
			[teammate.casualName, ...teammate.casualName.split(' ')]
		)
	}
}

export interface BookingEntities {
	startDateTimeMs?: number
	services?: string[]
	providers?: string[]
}

interface DateTimeEntity {
	accuracy: number
	entity: 'datetime' | 'dimension'
	resolution: NlpResolution
}

type ServiceEntity = {
	entity: 'service'
	option: string
}

type TeammateEntity = {
	entity: 'teammate'
	option: string
}

type NlpEntity = DateTimeEntity | ServiceEntity | TeammateEntity

interface NlpResolution {
	values: NlpValue[]
}

interface NlpValue {
	value: string
}

export interface NlpService {
	id: string
	name: string
}

export interface NlpTeammate {
	id: string
	casualName: string
}
