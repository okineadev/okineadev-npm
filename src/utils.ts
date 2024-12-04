import widestLine from 'widest-line'
import stripAnsi from 'strip-ansi'

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
export function centerText(text: string, maxWidth: number): string {
	const cleanText = stripAnsi(text)
	const textLength = widestLine(cleanText)

	if (maxWidth <= textLength) return text

	const totalPadding = maxWidth - textLength
	const padding = Math.floor(totalPadding / 2)

	const leftPadding = ' '.repeat(padding)
	const rightPadding = ' '.repeat(padding)

	return leftPadding + text + rightPadding
}
