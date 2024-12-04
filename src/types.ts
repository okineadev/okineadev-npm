/** Interface representing a social media profile
 *
 * @example
 * const githubProfile: SocialProfile = {
 *   username: 'johndoe',
 *   link: 'https://github.com/johndoe'
 * }
 * @example
 * const stackoverflowProfile: SocialProfile = {
 *   username: 'john-doe',
 *   link: 'https://stackoverflow.com/users/123456/john-doe'
 * }
 */
export interface SocialProfile {
	/** Username on the platform
	 *
	 * @example 'johndoe'
	 */
	username: string
	/** Full URL to the profile
	 *
	 * @example 'https://github.com/johndoe'
	 */
	link: string
}
