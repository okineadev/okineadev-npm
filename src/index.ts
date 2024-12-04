#!/usr/bin/env node

import terminalLink from 'terminal-link'
import colors from 'yoctocolors'
import boxen from 'boxen'
import socials from './socials'
import { center, unionTexts } from './utils'
import stripAnsi from 'strip-ansi'
import stringWidth from 'string-width'
import widestLine from 'widest-line'
// import QRCode from 'qrcode'

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

const longestLine = Math.max(
	stringWidth(stripAnsi(title)),
	stringWidth(stripAnsi(description)),
	widestLine(stripAnsi(socialLinks)),
)

const text = `${center(title, longestLine + 2)}\n${center(description, longestLine + 2)}\n\n${socialLinks}`

// const text = unionTexts([
// 	`${center(title, longestLine + 2)}\n${center(description, longestLine + 2)}\n\n${socialLinks}`,
// 	await QRCode.toString('okinea.dev', {
// 		type: 'terminal',
// 		small: true,
// 		margin: 0,
// 	}),
// ]).trimEnd()

// Output
console.log(
	boxen(text, {
		borderStyle: BORDER_STYLE,
		padding: PADDING,
		borderColor: BORDER_COLOR,
	}),
)
