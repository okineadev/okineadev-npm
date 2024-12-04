#!/usr/bin/env node

import terminalLink from 'terminal-link'
import colors from 'yoctocolors'
import boxen from 'boxen'
import socials from './socials'
import { centerText } from './utils'
import stripAnsi from 'strip-ansi'
import widestLine from 'widest-line'

// Constants
const BORDER_STYLE = 'round'
const PADDING = 0.4
const BORDER_COLOR = 'grey'

// Text
const title = `Hi!👋  I'm ${colors.bold('Okinea Dev')}`
const description = 'Here you can view links to my profiles'

const socialLinks = Object.entries(socials)
	.map(([key, value]) => {
		return `${colors.bold(colors.redBright(key))}: ${terminalLink(`@${value.username}`, value.link)}`
	})
	.join('\n')

// const longestLine = widestLine(stripAnsi(title + description + socialLinks))

const longestLine = Math.max(
	widestLine(stripAnsi(title)),
	widestLine(stripAnsi(description)),
	widestLine(stripAnsi(socialLinks)),
)

const centeredTitle = centerText(title, longestLine + 4)
const centeredDescription = centerText(description, longestLine + 4)

const text = `${centeredTitle}\n${centeredDescription}\n\n${socialLinks}`

// Output
console.log(
	boxen(text, {
		borderStyle: BORDER_STYLE,
		padding: PADDING,
		borderColor: BORDER_COLOR,
	}),
)
