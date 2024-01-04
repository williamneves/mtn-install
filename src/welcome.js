import figlet from "figlet"
import gradient from "gradient-string"
import chalk from "chalk"
import { log } from "./lib/utils.js"

export async function welcome() {
  console.log(
    gradient.rainbow(
      figlet.textSync("MTN - INSTALL", {
        font: "Standard",
        horizontalLayout: "universal smushing",
        verticalLayout: "full",
        width: 140,
        whitespaceBreak: true
      })
    )
  )

  const messages = [
    {
      text: "🚀 Welcome to MTN-INSTALL ✨",
      ms: 300,
      newLine: true
    },
    {
      text: "This is a simple CLI tool to help you get started with Mantine\nand your Next.js project.",
      ms: 400
    },
    // {
    // 	text: `And also help to add ${chalk.blueBright(
    // 		"Tailwind CSS"
    // 	)} to your project Mantine project`,
    // 	ms: 100,
    // 	newLine: true,
    // },
    {
      text: chalk.yellowBright(
        "🌟 Consider starring the project if you find it useful"
      )
    },
    {
      text: chalk.bold(
        "https://github.com/williamneves/mtn-install.git (ctrl + click)"
      ),
      newLine: true
    }
  ]

  for (const message of messages) {
    await log(message)
  }
}
