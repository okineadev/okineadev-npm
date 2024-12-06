import { Box, type BoxProps } from 'ink'

/**
 * Props for the Divider component.
 */
export interface DividerProps extends BoxProps {
	/**
	 * Color of the divider's border. Matches the type of `borderColor` in the Ink `Box` component.
	 * Accepts standard Ink color names or hex codes.
	 * @default "blackBright"
	 */
	color?: BoxProps['borderColor']
}

/**
 * A horizontal divider component styled as a single border line.
 *
 * @param props - Properties to customize the divider.
 * @returns A styled Ink `Box` component representing a divider.
 */
const Divider: React.FC<DividerProps> = ({
	color = 'blackBright',
	...props
}) => (
	<Box
		borderColor={color}
		borderStyle="single"
		borderBottom={true}
		borderTop={false}
		borderLeft={false}
		borderRight={false}
		{...props}
	/>
)

export default Divider
