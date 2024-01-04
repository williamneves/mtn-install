import chalk from "chalk"
import { createSpinner } from "nanospinner"
import select, { Separator } from "@inquirer/select"
import confirm from "@inquirer/confirm"
import { log, sleep } from "./lib/utils.js"
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

  const action = await select({
    message: chalk.bold("👉 What do you want to do?"),
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

  console.log("\n")

  if (action === "add-mantine") {
    const mantineAction = await select({
      message: chalk.bold("👉 What type of instalation you want?"),
      choices: [
        {
          value: "full-setup",
          name: "Add Mantine Provider & CSS",
        },
        {
          value: "only-package",
          name: "Add Mantine to package.json only",
          disabled: "(Coming soon...)",
        },
      ],
    })

    if (mantineAction === "full-setup") {
      log(
        chalk.yellow({
          text: "Mantine UI with the latest stable version will be installed.\nYour Next.js files will be modified to add the Mantine Provider and CSS.",
          ms: 2000,
        })
      )

      const confirmInstall = await confirm({
        message: chalk.bold("👉 Are you sure you want to continue?"),
        default: true,
      })

      if (!confirmInstall) {
        log(
          chalk.yellow({ text: "Mantine UI installation aborted.", ms: 2000 })
        )
        process.exit(0)
      }

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
          text: "Mantine Provider and CSS has been successfully installed.",
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
          text: "Installing Mantine packages in package.json...",
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
        text: "Mantine Provider & CSS and all packages has been successfully installed, enjoy!",
      })

      process.exit(0)
    }
  }
}
