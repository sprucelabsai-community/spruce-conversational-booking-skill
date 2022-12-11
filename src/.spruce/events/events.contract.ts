import { coreEventContracts } from '@sprucelabs/mercury-core-events'

export default [...coreEventContracts]

declare module '@sprucelabs/mercury-types/build/types/mercury.types' {
	interface SkillEventSignatures {}
}
