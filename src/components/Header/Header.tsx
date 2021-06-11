import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
export const Header = (): JSX.Element => {
	return (
		<Container>
			<Logo>
				<StyledLink to="/">Kelly Gorr</StyledLink>
			</Logo>
			<H2>UX Engineer + Designer</H2>
		</Container>
	)
}
const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
	padding: 0 3%;

	*:focus {
		border-color: ${({ theme }) => theme.accent};
	}
`

const Logo = styled.h1``
const StyledLink = styled(Link)`
	font-size: 1em;
	font-family: 'montserrat';
	padding: 5px;
	border: 3px solid transparent;
	transition: color 100ms ease-in;

	&:hover {
		color: ${({ theme }) => theme.accent};
	}
`
const H2 = styled.h2`
	padding-top: 8px;
	font-size: 0.9em;
`
