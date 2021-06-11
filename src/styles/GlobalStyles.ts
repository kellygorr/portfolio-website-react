import { createGlobalStyle } from 'styled-components'
import './fonts.css'
import { Theme } from './theme'

export const GRID_WIDTH = 350
export const GRID_GAP = 20

export const GlobalStyles = createGlobalStyle<{ theme: Theme }>`

	* {
        position: relative;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		border-spacing: 0px;
		font-weight: normal;
	}

	*:before,
	*:after {
		box-sizing: inherit;
	}

	html,
	body, #root {
		min-height: 100vh;
		width: 100%;
		margin: 0;
		padding: 0;
		font-family: 'open_sansregular';
		color: ${({ theme }) => theme.text};
	}

	*:focus {
		outline: 0;
		border-color: ${({ theme }) => theme.accent};

		&:not(:focus-visible) {
			border-color: transparent !important;
		}
	}

	button {
		border-radius: 0;
		border-width: 0;
		background: transparent;
		color: inherit;
	}

	a {
		color: inherit;
		text-decoration: inherit;
	}

	ul {
		list-style-type:none;
	}
`
