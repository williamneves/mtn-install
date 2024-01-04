import { promises as fsPromises } from "fs"
import * as path from "path"

export async function checkProjectCompatibility() {
  const rootDir = process.cwd()
  const packageJsonPath = path.join(rootDir, "package.json")
  const nextConfigPattern = /^next\.config\..+$/

  if (
    !(await fsPromises
      .access(packageJsonPath)
      .then(() => true)
      .catch(() => false))
  ) {
    throw new Error(
      "package.json not found. Make sure you are in the root directory of your project."
    )
  }

  const packageJsonData = await fsPromises.readFile(packageJsonPath, "utf-8")
  const packageJson = JSON.parse(packageJsonData)
  const dependencies = {
    ...packageJson.dependencies,
    ...packageJson.devDependencies
  }

  const hasNext = "next" in dependencies
  const hasMantine = Object.keys(dependencies).some(dep =>
    dep.startsWith("@mantine/")
  )
  const files = await fsPromises.readdir(rootDir)
  const hasNextConfig = files.some(file => nextConfigPattern.test(file))

  if (!hasNext || !hasNextConfig) {
    throw new Error(
      "The project is incompatible. You should have Next.js installed."
    )
  }

  if (hasMantine) {
    throw new Error("Mantine is already installed.")
  }

  if (!hasNext || !hasNextConfig || hasMantine) {
    throw new Error("The project is incompatible. Exiting...")
  }

  return true
}
