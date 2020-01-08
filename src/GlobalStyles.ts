import { createGlobalStyle } from 'styled-components'
import './fonts.css'

export const AccentColor = '#eb2f1b'
export const PrimaryAccentColor = '#FFFFFF'
export const PrimaryHoverAccentColor = '#fbe2e0'
export const PrimaryColor = '#303030'
export const LoadingColorHover = '#757575'
export const LoadingColor = '#e2e2e2'

export const GlobalStyles = createGlobalStyle`
	* {
        position: relative;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		border-spacing: 0px;
	}

	*:before,
	*:after {
		box-sizing: inherit;
	}

	html,
	body, #root {
		height: 100%;
		margin: 0;
		padding: 0;
	}

	*:focus {
 		outline: 0;
	}

	button {
		border-radius: 0;
		border-width: 0;
	}

	a {
		color: inherit;
		text-decoration: inherit;
	}
`
