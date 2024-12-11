#!/usr/bin/env node

import { render, Text, Box, Newline } from 'ink'
import Divider from 'ink-divider'
import Link from 'ink-link'
// import QRCode from 'qrcode'

import socials from './socials'

// Constants
const BORDER_STYLE = 'round'
const PADDING = 1
const BORDER_COLOR = 'grey'

const macOSControls = (
	<Text>
		<Text color="red">●</Text> <Text color="yellow">●</Text>{' '}
		<Text color="green">●</Text>
	</Text>
)

const title = (
	<Text>
		Hi!👋 I'm <Text bold>Okinea Dev</Text>
	</Text>
)
const description = (
	<Box flexDirection="column" alignItems="center">
		<Text>Here you can view links to my profiles</Text>
		<Text>
			I also recommend visiting <Text underline>https://okinea.dev</Text>
		</Text>
	</Box>
)

const barcode = '║█║▌║█║▌│║▌█║▌║'
const name = 'YURII BOGDAN'

const paletteASCII = `\
⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⡠⣶⣶⣿⡟
⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣷⣿⣿⠟
⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⣀⣠⣤⣄⡀⢀⣴⡮⠉
⠄⠄⠄⠄⠄⠄⠄⣴⣿⣿⣿⣿⠿⢟⢱⣿⡟⣰⣦⣀
⠄⠄⠄⠄⠄⠄⠄⢿⣿⣿⣿⠁⣠⣾⣷⠍⣼⣿⣿⣿⣷⡄
⠄⠄⠄⠄⠄⠄⠄⠄⠙⢻⣿⣦⣉⣛⣃⣠⣿⣿⣿⣿⣿⣿⣆
⠄⣠⣶⣿⣷⣦⡀⠄⠄⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀
⢸⣿⣿⣿⣿⣿⣿⣷⣶⣿⣿⣿⣿⣿⣿⣿⡟⠁⠄⠄⠈⢻⣿⡇
⢸⣿⣿⡿⠛⠉⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣀⣀⣀⣼⣿⡇
⠘⣿⣿⡄⠄⠄⠄⢀⣿⣿⣿⣿⣿⣿⣿⡿⠿⢿⣿⣿⣿⣿⣿⠃
⠄⠹⣿⣿⣷⣶⣶⣿⣿⣿⣿⣿⣿⣿⡏⠄⠄⠄⠄⢻⣿⣿⡟
⠄⠄⠙⢿⣿⣿⣿⡟⠁⠄⠄⠈⠻⣿⣿⣦⣄⣀⣴⣿⣿⠏
⠄⠄⠄⠄⠙⢿⣿⣿⣤⣀⣀⣀⣴⣿⣿⣿⣿⣿⡿⠟⠁
⠄⠄⠄⠄⠄⠄⠈⠙⠛⠿⠿⠿⠿⠿⠿⠛⠛⠉`

const App = () => (
	<Box
		borderStyle={BORDER_STYLE}
		borderColor={BORDER_COLOR}
		paddingLeft={PADDING}
		paddingRight={PADDING}
		flexDirection="row"
		alignSelf="flex-start"
		gap={4}
	>
		<Box flexDirection="column">
			{macOSControls}

			<Box
				flexDirection="column"
				alignItems="center"
				paddingLeft={1}
				paddingRight={1}
			>
				<Text>
					{title}
					<Newline />
				</Text>
				{description}
			</Box>
			<Box flexDirection="column" marginTop={1}>
				{Object.entries(socials).map(([key, value]) => (
					<Text key={key}>
						<Text bold color="redBright">
							{key}
						</Text>
						{': '}
						<Link url={value.link} fallback={false}>
							@{value.username}
						</Link>
					</Text>
				))}
			</Box>
			<Divider />
			<Box>
				<Text>
					<Text color="whiteBright">{barcode}</Text>{' '}
					<Text dimColor>{name}</Text>
				</Text>
			</Box>
		</Box>
		<Box>
			<Text>{paletteASCII}</Text>
		</Box>
	</Box>
)

render(<App />)
