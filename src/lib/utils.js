export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * Custom console.log with sleep
 * @param options - { text: string, ms: number, newLine: boolean, type: string }
 */
export async function log(options) {
  const { text, ms = 1000, newLine, type = "log" } = options
  await sleep(ms)
  console[type](text)
  if (newLine) {
    console.log("")
  }
}
