import { promises as fs } from "fs"
import * as path from "path"

import { exec } from "child_process"
import { promisify } from "util"

const execAsync = promisify(exec)

const projectRoot = process.cwd() // Use the current working directory as the

const PackageManager = {
  Npm: "npm",
  Pnpm: "pnpm",
  Yarn: "yarn",
  Bun: "bun",
}

export async function detectPackageManager(projectRoot) {
  const lockFiles = {
    "package-lock.json": PackageManager.Npm,
    "pnpm-lock.yaml": PackageManager.Pnpm,
    "yarn.lock": PackageManager.Yarn,
    "bun.lockb": PackageManager.Bun,
  }

  for (const [lockFile, packageManager] of Object.entries(lockFiles)) {
    if (
      await fs
        .access(path.join(projectRoot, lockFile))
        .then(() => true)
        .catch(() => false)
    ) {
      return packageManager
    }
  }

  throw new Error("Could not detect the package manager. No lock file found.")
}

export async function installMantineCorePackages(packageManager, version) {
  const corePackages = ["@mantine/core", "@mantine/hooks"].map(
    pkg => `${pkg}${version ? `@${version}` : ""}`
  )
  const devPackages = [
    "postcss",
    "postcss-preset-mantine",
    "postcss-simple-vars",
  ].map(pkg => `${pkg}`)

  let installCommand = ""

  switch (packageManager) {
    case PackageManager.Npm:
      installCommand = `npm install ${corePackages.join(
        " "
      )} && npm install --save-dev ${devPackages.join(" ")}`
      break
    case PackageManager.Pnpm:
      installCommand = `pnpm add ${corePackages.join(
        " "
      )} && pnpm add --save-dev ${devPackages.join(" ")}`
      break
    case PackageManager.Yarn:
      installCommand = `yarn add ${corePackages.join(
        " "
      )} && yarn add --dev ${devPackages.join(" ")}`
      break
    case PackageManager.Bun:
      installCommand = `bun add ${corePackages.join(
        " "
      )} && bun add --dev ${devPackages.join(" ")}`
      break
  }

  try {
    await execAsync(installCommand, {
      cwd: projectRoot,
    })
  } catch (error) {
    throw new Error(`Failed to install Mantine packages. ${error.message}`)
  }
}

export async function runMantinePackageInstallation() {
  const packageManager = await detectPackageManager(projectRoot)
  await installMantineCorePackages(packageManager)
}
