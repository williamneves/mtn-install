import { promises as fs } from "fs"
import * as path from "path"

// Comment to be added to the PostCSS configuration file indicating it was updated by the Mantine TW CLI
const mantineComment = "// This configuration was updated by Mantine TW CLI"

// Configuration settings for Mantine that will be added to the PostCSS configuration file
const mantineConfig = `
  'postcss-preset-mantine': {},
  'postcss-simple-vars': {
    variables: {
      'mantine-breakpoint-xs': '36em',
      'mantine-breakpoint-sm': '48em',
      'mantine-breakpoint-md': '62em',
      'mantine-breakpoint-lg': '75em',
      'mantine-breakpoint-xl': '88em',
    },
  },
`

// Checks for the existence of a PostCSS configuration file in the root directory
export async function checkPostCSSConfigExists() {
	const rootDir = process.cwd() // Use the current working directory as the root
	const configPatterns = [
		"postcss.config.cjs",
		"postcss.config.js",
		"postcss.config.mjs",
	]

	// Iterate through the possible configuration filenames to find an existing file
	for ( const pattern of configPatterns ) {
		const configFilePath = path.join( rootDir, pattern )
		// Check if the file exists and return its path if it does
		if (
			await fs
				.access( configFilePath )
				.then( () => true )
				.catch( () => false )
		) {
			return configFilePath
		}
	}
	// Return null if no configuration file is found
	return null
}

// Creates a new PostCSS configuration file with the Mantine settings
export async function createPostCSSConfig() {
	const rootDir = process.cwd()
	const configFileName = "postcss.config.cjs" // Default to .cjs for new files
	const configFilePath = path.join( rootDir, configFileName )
	const initialContent = `${mantineComment}\nmodule.exports = {\n  plugins: {\n    ${mantineConfig}\n  },\n};\n`

	// Write the initial content to the new PostCSS configuration file
	await fs.writeFile( configFilePath, initialContent )
}

// Updates an existing PostCSS configuration file with the Mantine settings
export async function updatePostCSSConfig( configFilePath ) {
	let configContent = await fs.readFile( configFilePath, "utf-8" )

	// Determine if the file is using CommonJS or ES Modules syntax based on the content
	const isCommonJS = configContent.includes( "module.exports" )

	// Ensure the Mantine comment is at the top of the file, if not, add it
	if ( !configContent.includes( mantineComment ) ) {
		configContent = `${mantineComment}\n${configContent}`
	}

	// Check if the specific Mantine plugins are already present in the file
	const hasPresetMantine = configContent.includes(
		"'postcss-preset-mantine': {},"
	)
	const hasSimpleVars = configContent.includes( "'postcss-simple-vars': {" )

	// Prepare the new plugin configuration if the plugins are not already present
	let newPluginConfig = ""
	if ( !hasPresetMantine ) {
		newPluginConfig += "\n    'postcss-preset-mantine': {},"
	}
	if ( !hasSimpleVars ) {
		newPluginConfig += mantineConfig
	}

	// Add the new plugin configuration to the 'plugins' object if it's not already present
	if ( newPluginConfig ) {
		const pluginsRegex = /plugins\s*:\s*{/
		const pluginsExist = pluginsRegex.test( configContent )

		if ( pluginsExist ) {
			// If 'plugins' key exists, add the missing Mantine config within it
			const insertionPoint =
				configContent.search( pluginsRegex ) + "plugins: {".length
			configContent =
				configContent.slice( 0, insertionPoint ) +
				newPluginConfig +
				configContent.slice( insertionPoint )
		} else if ( isCommonJS ) {
			// If 'plugins' key does not exist and the file is CommonJS, add the entire 'plugins' object
			const exportStatement = "module.exports = {"
			const insertionPoint =
				configContent.indexOf( exportStatement ) + exportStatement.length
			configContent =
				configContent.slice( 0, insertionPoint ) +
				`\n  plugins: {${newPluginConfig}\n  },` +
				configContent.slice( insertionPoint )
		} else {
			// If the file does not match the expected format, throw an error
			throw new Error(
				"⚠️ The postcss.config file is not in the expected format and cannot be automatically updated. Please check the postcss.config file and try again."
			)
		}
	}

	// Write the updated content back to the PostCSS configuration file
	await fs.writeFile( configFilePath, configContent )
}

// Main function to ensure the PostCSS configuration is set up correctly
export async function ensurePostCSSConfig() {
	try {
		// Check if a PostCSS config file exists and get its path
		const configFilePath = await checkPostCSSConfigExists()

		// If a config file exists, update it with Mantine settings
		if ( configFilePath ) {
			await updatePostCSSConfig( configFilePath )
		} else {
			// If no config file exists, create a new one with Mantine settings
			await createPostCSSConfig()
		}
	} catch ( error ) {
		// If an error occurs, log it and rethrow to be handled by the caller
		console.error( "Error ensuring PostCSS config:", error.message )
		throw error
	}
}
