import { TopicDefinition } from '@sprucelabs/spruce-conversation-plugin'

const topicDefinition: TopicDefinition = {
	label: 'Book an appointment',
	utterances: [
		'book appointment',
		'Can i book my appointment?',
		'book now',
		'do you have any times available?',
		'what is the wait time?',
	],
	script: [
		'Sweet, lets book!',
		'Lemme find your appointment!',
		async (options) => {
			const confirm = await options.ui.confirm('Ok, you ready to do this?')
			if (!confirm) {
				await options.ui.renderLine('Ok, see you later!')
				return {
					transationConversationTopicTo: 'discovery',
				}
			}

			return
		},
	],
}

export default topicDefinition
