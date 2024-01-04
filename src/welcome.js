import figlet from "figlet"
import gradient from "gradient-string"
import chalk from "chalk"
import { log } from "./lib/utils.js"

export async function welcome() {
	console.log(
		gradient.rainbow(
			figlet.textSync( "MANTINE TW", {
				font: "Standard",
				horizontalLayout: "universal smushing",
				verticalLayout: "full",
				width: 140,
				whitespaceBreak: true,
			} )
		)
	)

	const messages = [
		{
			text: "🚀 Welcome to Mantine TW ✨",
			ms: 300,
			newLine: true,
		},
		{
			text: "This is a simple CLI tool to help you get started with Mantine",
			ms: 400,
		},
		{
			text: `And also help to add ${chalk.blueBright(
				"Tailwind CSS"
			)} to your project Mantine project`,
			ms: 100,
			newLine: true,
		},
		{
			text: gradient.rainbow(
				"Consider starring the project if you find it useful 🌟 \nhttps://example.com"
			),
			newLine: true,
		},
	]

	for ( const message of messages ) {
		await log( message )
	}
}
