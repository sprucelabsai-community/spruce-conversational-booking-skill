import pathUtil from 'path'
import Skill from '@sprucelabs/spruce-skill-booter'


export default new Skill({
	rootDir: pathUtil.join(__dirname, '..', '..'),
	activeDir: pathUtil.join(__dirname, '..'),
	hashSpruceDir: pathUtil.join(__dirname, '..', '.spruce'),
})
