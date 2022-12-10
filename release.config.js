const spruceSemanticRelease = require('@sprucelabs/semantic-release')

const config = spruceSemanticRelease.default({
	npmPublish: false,
	branches: [{ name: 'main', channel: 'latest' }],
	releaseMessage: 'chore(release): ${nextRelease.version} [npm-publish]',
})

module.exports = config
