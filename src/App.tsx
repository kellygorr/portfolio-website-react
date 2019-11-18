import * as React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import { Home, Page, Search } from './components'
import { projects } from './components/data'
import { GlobalStyles, AccentColor, PrimaryColor } from './GlobalStyles'
import { Footer as FooterContent } from './components/shared/Footer'

const App: React.FC = () => {
	return (
		<Router>
			<AppContainer>
				<GlobalStyles />
				<Header>
					<Logo>
						<Link to='/'>Kelly Gorr</Link>
					</Logo>
					<H2>
						<Link to='/'>UI/UX</Link> | <Link to='/'>Developer</Link> | <Link to='/'>Designer</Link>
					</H2>
				</Header>
				<Canvas>
					<Switch>
						<Route exact path='/' render={() => <Home />} />
						<Route
							path='/page/:title?'
							render={({ match }) => {
								const project = projects.find(
									(project) =>
										match.params.title.replace(/[^\w\s]/gi, '') === project.title.replace(' ', '').toLowerCase()
								)
								return project && <Page data={project} />
							}}
						/>
						<Route
							path='/search/:query?'
							render={({ match }) => <Search query={match.params.query.replace(/[^\w\s]/gi, '')} />}
						/>
					</Switch>
				</Canvas>
				<Footer>
					<FooterContent />
				</Footer>
			</AppContainer>
		</Router>
	)
}

export default App

const AppContainer = styled.div`
	position: relative;
	height: 100%;
	width: 100vw;
	display: grid;
	grid-template-rows: [header] 150px [canvas] auto [footer] 200px;

	color: ${PrimaryColor};
	font-family: 'open_sansregular';
`
const Header = styled.header`
	grid-row: header;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

const Logo = styled.h1`
	font-size: 2em;
	font-family: 'montserrat';

	&:hover {
		color: ${AccentColor};
	}
`
const H2 = styled.h2`
	padding-top: 5px;
	font-size: 0.9em;
`

const Canvas = styled.div`
	grid-row: canvas;
`
const Footer = styled.footer`
	grid-row: footer;
`
