/**
 * Custom console.log with sleep
 * @param options - LogOptions object
 */
export async function log(options) {
	const { text, ms = 1000, newLine, type = "log" } = options
	await sleep(ms)
	console[type](text)
	if (newLine) console.log("")
}

export function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms))
}
