import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import { AccentColor } from '../../GlobalStyles'

export const Header: React.FC = () => {
	return (
		<Container>
			<Logo>
				<Link to="/">Kelly Gorr</Link>
			</Logo>
			<H2>UX Engineer + Designer</H2>
		</Container>
	)
}
const Container = styled.div`
	display: flex;
	height: 100%;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

const Logo = styled.h1`
	font-size: 2em;
	font-family: 'montserrat';
	transition: color 100ms ease-in;

	&:hover {
		color: ${AccentColor};
	}
`
const H2 = styled.h2`
	padding-top: 5px;
	font-size: 0.9em;
`
