import { promises as fs } from "fs"
import * as path from "path"

// Function to detect the router type and return the specific path
export async function detectNextRouterType(
	projectRoot
) {
	const appRouterPaths = [
		path.join( projectRoot, "app", "layout.tsx" ),
		path.join( projectRoot, "src", "app", "layout.tsx" ),
	]
	const pageRouterPaths = [
		path.join( projectRoot, "pages", "_app.tsx" ),
		path.join( projectRoot, "src", "pages", "_app.tsx" ),
	]

	// Check each path for the existence of the layout or _app file
	for ( const appPath of appRouterPaths ) {
		if (
			await fs
				.access( appPath )
				.then( () => true )
				.catch( () => false )
		) {
			return appPath.replace( "layout.tsx", "" ) // Return the directory path without the file
		}
	}

	for ( const pagePath of pageRouterPaths ) {
		if (
			await fs
				.access( pagePath )
				.then( () => true )
				.catch( () => false )
		) {
			return pagePath.replace( "_app.tsx", "" ) // Return the directory path without the file
		}
	}

	throw new Error(
		"Could not determine the router type of the project. Make sure you are in the root directory of a Next.js project."
	)
}

export async function installMantineProviderAppRouter( appDirectory ) {
	const layoutFilePath = path.join( appDirectory, "layout.tsx" )
	let layoutContent = await fs.readFile( layoutFilePath, "utf-8" )

	// Check for Mantine imports
	const mantineImports = `import '@mantine/core/styles.css';\n\nimport { ColorSchemeScript, MantineProvider } from '@mantine/core';\n`
	if ( !layoutContent.includes( mantineImports.split( "\n" )[ 0 ] ) ) {
		layoutContent = mantineImports + layoutContent
	}

	// Check for <head> tag and add <ColorSchemeScript />
	if ( !layoutContent.includes( "<head>" ) ) {
		layoutContent = layoutContent.replace(
			'<html lang="en">',
			`<html lang="en">\n      <head>\n        <ColorSchemeScript />\n      </head>`
		)
	} else if ( !layoutContent.includes( "<ColorSchemeScript />" ) ) {
		layoutContent = layoutContent.replace(
			"<head>",
			`<head>\n        <ColorSchemeScript />`
		)
	}

	// Wrap children with <MantineProvider>
	if ( !layoutContent.includes( "<MantineProvider>" ) ) {
		layoutContent = layoutContent.replace(
			"{children}",
			`\n        <MantineProvider>\n          {children}\n        </MantineProvider>\n			`
		)
	}

	// Write the updated content back to the layout.tsx file
	await fs.writeFile( layoutFilePath, layoutContent )
}

export async function setupMantineInNextProject() {
	const projectRoot = process.cwd() // Or adjust if your project is in a subdirectory like '/next'

	try {
		const routerPath = await detectNextRouterType( projectRoot )

		// Check if the detected router path is for an app router
		if ( routerPath.includes( "app" ) && !routerPath.includes( "pages" ) ) {
			// Call the function to install Mantine for the app router
			await installMantineProviderAppRouter( routerPath )
		} else {
			// Placeholder for page router setup or other router types
			console.log(
				"Detected a page router or an unknown router type. Mantine installation for this router type is not yet supported."
			)
		}
	} catch ( error ) {
		throw new Error(
			`Failed to setup Mantine in the Next.js project. ${error.message}`
		)
	}
}
