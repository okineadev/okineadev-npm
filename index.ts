#!/usr/bin/env node

import boxen from 'boxen'
import terminalLink from 'terminal-link'
import colors from 'yoctocolors'

const socials = {
	GitHub: {
		username: 'okineadev',
		link: 'https://github.com/okineadev',
	},
	Unsplash: {
		username: 'okineadev',
		link: 'https://unsplash.com/@okineadev',
	},
	Telegram: {
		username: 'okineadev',
		link: 'https://t.me/okineadev',
	},
	Medium: {
		username: 'okineadev',
		link: 'https://okineadev.medium.com/',
	},
	Discord: {
		username: 'okineadev',
		link: 'https://discord.com/users/okineadev',
	},
	'Stack Overflow': {
		username: 'okinea-dev',
		link: 'https://stackoverflow.com/users/21165921/okinea-dev',
	},
}

let text = `
        Hi!👋  I'm ${colors.bold('Okinea Dev')}

Here you can view links to my profiles\n\n`

const socialLinks = Object.entries(socials)
	.map(([key, value]) => {
		return `${colors.bold(colors.redBright(key))}: ${terminalLink(`@${value.username}`, value.link)}`
	})
	.join('\n')

text += `${socialLinks}\n`

console.log(
	boxen(text, {
		borderStyle: 'round',
		padding: 0.8,
		borderColor: 'grey',
	}),
)
