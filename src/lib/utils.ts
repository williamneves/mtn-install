export type LogOptions = {
	text: string
	ms?: number
	newLine?: boolean
	type?: "log" | "info" | "warn" | "error"
}

/**
 * Custom console.log with sleep
 * @param options - LogOptions object
 */
export async function log(options: LogOptions) {
	const { text, ms = 1000, newLine, type = "log" } = options
	await sleep(ms)
	console[type](text)
	if (newLine) console.log("")
}

export function sleep(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms))
}
