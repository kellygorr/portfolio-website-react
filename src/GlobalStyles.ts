import { createGlobalStyle } from 'styled-components'

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

	@font-face {
		font-family: 'open_sansregular';
		src: url('http://www.kellygorr.com/assets/fonts/opensans/OpenSans-Regular-webfont.eot');
		src: url('http://www.kellygorr.com/assets/fonts/opensans/OpenSans-Regular-webfont.eot?#iefix') format('embedded-opentype'),
		url('http://www.kellygorr.com/assets/fonts/opensans/OpenSans-Regular-webfont.woff') format('woff'),
		url('http://www.kellygorr.com/assets/fonts/opensans/OpenSans-Regular-webfont.ttf') format('truetype'),
		url('http://www.kellygorr.com/assets/fonts/opensans/OpenSans-Regular-webfont.svg#open_sansregular') format('svg');
		font-weight: normal;
		font-style: normal;
	  }
	  
	@font-face {
		font-family: 'montserrat';
		src: url('http://www.kellygorr.com/assets/fonts/montserrat/Montserrat-SemiBold.otf') format('opentype');
		font-weight: normal;
		font-style: normal;
	}

	@font-face {
		font-family: 'Museo_Slab_500_2';
		src: url('http://www.kellygorr.com/assets/fonts/museoslab/museoslab.woff2') format('woff2'), 
		url('http://www.kellygorr.com/assets/fonts/museoslab/museoslab.woff') format('woff');
		font-weight: normal;
		font-style: normal;
	}


`

/*!
 * Web Fonts from Fontspring.com
 *
 * All OpenType features and all extended glyphs have been removed.
 * Fully installable fonts can be purchased at http://www.fontspring.com
 *
 * The fonts included in this stylesheet are subject to the End User License you purchased
 * from Fontspring. The fonts are protected under domestic and international trademark and
 * copyright law. You are prohibited from modifying, reverse engineering, duplicating, or
 * distributing this font software.
 *
 * (c) 2010-2019 Fontspring
 *
 *
 *
 *
 * The fonts included are copyrighted by the vendor listed below.
 *
 * Vendor:      exljbris Font Foundry
 * License URL: https://www.fontspring.com/licenses/exljbris/webfont
 *
 *
 */
