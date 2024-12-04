import widestLine from 'widest-line'
import stripAnsi from 'strip-ansi'
import repeat from 'repeat-string'
import stringWidth from 'string-width'

/**
 * Centers text within a given width by adding padding spaces on both sides
 *
 * @param text - The text string to center
 * @param maxWidth - The total width to center the text within
 * @returns The text centered with padding spaces on both sides
 *
 * @example
 * centerText("hello", 9)
 * // Returns "  hello  "
 *
 * @example
 * const title = "Welcome!"
 * const width = 20
 *
 * centerText(title, width)
 * // Returns "      Welcome!      "
 */
export function center(text: string, maxWidth: number): string {
	const cleanText = stripAnsi(text)
	const textLength = widestLine(cleanText)

	if (maxWidth <= textLength) return text

	const totalPadding = maxWidth - textLength
	const padding = repeat(' ', Math.floor(totalPadding / 2))

	return padding + text + padding
}

/**
 * Combines multiple texts into columns with a custom separator.
 * @param texts - Array of strings to combine.
 * @param separator - String to use as the separator between columns. Default is "  ".
 * @returns A single string with combined texts formatted as columns.
 */
export function unionTexts(texts: string[], separator = '    '): string {
	const splitTexts = texts.map((text) => text.split('\n'))
	const maxLines = Math.max(...splitTexts.map((lines) => lines.length)) - 1

	// Calculate the maximum display width for each text column
	const columnWidths = splitTexts.map((lines) =>
		Math.max(...lines.map((line) => stringWidth(stripAnsi(line)))),
	)

	const resultLines = []
	for (let i = 0; i < maxLines; i++) {
		const line = splitTexts
			.map((lines, colIndex) => {
				const currentLine = lines[i] || ''
				const padding =
					columnWidths[colIndex] - stringWidth(stripAnsi(currentLine))
				return currentLine + repeat(' ', Math.max(0, padding))
			})
			.join(separator)
		resultLines.push(line)
	}

	return resultLines.join('\n')
}
