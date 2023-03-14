import fs from "fs";
import globby from "@sprucelabs/globby";
import pathUtil from "path";
import { SchemaError } from '@sprucelabs/schema'
import {
	SchemaHealthCheckItem,
	SkillFeature,
	Skill,
	diskUtil,
	HASH_SPRUCE_DIR_NAME,
	BootCallback
} from "@sprucelabs/spruce-skill-utils";

class SchemaFeature implements SkillFeature {
	private skill: Skill;
	private _isBooted = false
	private bootHandler?: BootCallback;

	public constructor(skill: Skill) {
		this.skill = skill;
	}

	public onBoot(cb: BootCallback) {
		this.bootHandler = cb
	}

	public execute = async () => {
		if (process.env.SHOULD_VALIDATE_SCHEMAS_ON_BOOT !== 'false') {
			await this.loadSchemas();
		}
		this._isBooted = true
		this.bootHandler?.()
	};

	public checkHealth = async () => {
		const schemas = await this.loadSchemas()

		const health: SchemaHealthCheckItem = {
			status: "passed",
			schemas,
		};

		return health;
	};

	public async destroy() {
		this._isBooted = false
	}

	public isInstalled = async () => {
		const schemaPath = pathUtil.join(
			this.skill.rootDir,
			"node_modules",
			"@sprucelabs/schema"
		);

		const isSchemaInstalled = fs.existsSync(schemaPath);

		return isSchemaInstalled;
	};

	public isBooted() {
		return this._isBooted
	}

	private async loadSchemas() {
		const schemaFiles = await globby(
			diskUtil.resolvePath(
				this.skill.activeDir,
				HASH_SPRUCE_DIR_NAME,
				"schemas",
				"**/*.schema.[t|j]s"
			)
		);

		return schemaFiles
			.map(file => {
				try {

					const schema = require(file).default
					return {
						id: schema.id,
						name: schema.name,
						version: schema.version,
						namespace: schema.namespace ?? '***MISSING***',
						description: schema.description,
					}
				} catch (err:any) {
					throw new SchemaError({ 
						//@ts-ignore
						code: 'FAILED_LOADING_SCHEMA', 
						originalError: err, 
						friendlyMessage: `Error importing schema from: ${file}.` })
				}
			});
	}
}

export default (skill: Skill) => {
	const feature = new SchemaFeature(skill);
	skill.registerFeature("schema", feature);
};
