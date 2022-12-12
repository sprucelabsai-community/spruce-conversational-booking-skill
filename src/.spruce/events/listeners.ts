import { EventFeatureListener } from '@sprucelabs/spruce-event-utils'

const listeners: EventFeatureListener[] = [
    {
        eventName: 'will-boot',
        eventNamespace: 'skill',
        version: 'v2022_12_09',
        callback: require('../../listeners/skill/will-boot.v2022_12_09.listener').default,
        isGlobal: require('../../listeners/skill/will-boot.v2022_12_09.listener').isGlobal,
    },
]

export default listeners