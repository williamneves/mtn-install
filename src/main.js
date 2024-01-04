import chalk from "chalk"
import { createSpinner } from "nanospinner"
import select, { Separator } from "@inquirer/select"
import { sleep } from "./lib/utils.js"
import { checkProjectCompatibility } from "./check-compatibility.js"
import { welcome } from "./welcome.js"
import { ensurePostCSSConfig } from "./postcss-setup.js"
import { setupMantineInNextProject } from "./mantine-files-setup.js"
import { runMantinePackageInstallation } from "./package-install.js"

export async function main() {
  await welcome()

  await sleep(1000)

  const spinner = createSpinner("Checking the project compatibility...")
  spinner.start()
  await sleep(1000)

  // Check project compatibility
  try {
    await checkProjectCompatibility()
    spinner.update({
      text: "Project compatibility check passed.",
      color: "green",
    })
    spinner.success()
  } catch (error) {
    spinner.update({
      text: error.message,
      color: "red",
    })
    spinner.error()
    process.exit(1)
  }

  await sleep(1000)

  // Question with prompt select, what the user want to do
  // Options: Add Mantine, Add Mantine Modules (comming soon), Add Tailwind CSS (comming soon)

  console.log(chalk.bold("\nWhat do you want to do?"))

  const action = await select({
    message: "👉",
    choices: [
      {
        value: "add-mantine",
        name: "Add Mantine",
        // description: "Add Mantine to your project",
      },
      new Separator(),
      {
        value: "add-mantine-modules",
        name: "Add Mantine Modules",
        // description: "Add Mantine Modules to your project",
        disabled: "(Coming soon...)",
      },
      {
        value: "add-tailwindcss",
        name: "Add Tailwind CSS",
        // description: "Add Tailwind CSS to your project",
        disabled: "(Coming soon...)",
      },
    ],
  })

  // if action is add-mantine, question if the user want to add the the mantine provider, css on the project, or if wanna just add to the package.json

  if (action === "add-mantine") {
    console.log(chalk.bold("\nWhat type of instalation you want?"))
    const mantineAction = await select({
      message: "👉",
      choices: [
        {
          value: "full-setup",
          name: "Add Mantine Provider & CSS",
          // description: chalk.gray("Add Mantine Provider & CSS to your project"),
        },
        {
          value: "only-package",
          name: "Add Mantine to package.json only",
          // description: chalk.gray("Let me handle the rest"),
        },
      ],
    })

    if (mantineAction === "full-setup") {
      const installSpinner = createSpinner(
        "Installing Mantine with Provider & CSS..."
      )
      installSpinner.start()
      await sleep(1000)
      // Create or update postcss.config.cjs
      try {
        await ensurePostCSSConfig()
        installSpinner.update({
          text: "PostCSS configuration updated.",
          color: "green",
        })

        await sleep(1000)
      } catch (error) {
        installSpinner.update({
          text: error.message,
          color: "red",
        })
        installSpinner.error()
        process.exit(1)
      }

      // Install Mantine Provider
      try {
        await setupMantineInNextProject()
        installSpinner.update({
          text: "Mantine has been successfully installed.",
          color: "green",
        })
        await sleep(1000)
      } catch (error) {
        installSpinner.update({
          text: error.message,
          color: "red",
        })
        installSpinner.error()
        process.exit(1)
      }

      // Install Mantine in package.json
      try {
        installSpinner.update({
          text: "Installing Mantine in package.json...",
          color: "yellow",
        })
        await runMantinePackageInstallation()
        installSpinner.update({
          text: "Mantine Packages has been successfully installed.",
          color: "green",
        })
      } catch (error) {
        installSpinner.update({
          text: error.message,
          color: "red",
        })
        installSpinner.error()
        process.exit(1)
      }
      await sleep(1000)
      installSpinner.success({
        text: "Mantine Provider & CSS has been successfully installed.",
      })

      return
    }
  }
}
