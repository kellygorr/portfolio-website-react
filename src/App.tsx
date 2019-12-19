import * as React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components/macro'
import { Home, Page, Search } from './components'
import { projects } from './components/data'
import { GlobalStyles, PrimaryColor } from './GlobalStyles'
import { Footer as FooterContent, Header as HeaderContent } from './components/shared'

const App: React.FC = () => {
	return (
		<Router>
			<AppContainer>
				<GlobalStyles />

				<Header>
					<HeaderContent />
				</Header>
				<Canvas>
					<Switch>
						<Route exact path="/" render={() => <Home />} />
						<Route
							path="/page/:title?"
							render={({ match }) => {
								const project = projects.find(
									(project) =>
										match.params.title.replace(/[^\w\s]/gi, '') ===
										project.details.header.replace(' ', '').toLowerCase()
								)
								return project && <Page data={project} />
							}}
						/>
						<Route
							path="/search/:query?"
							render={({ match }) => (
								<Search query={match.params.query === 'UI-UX' ? 'UI-UX' : match.params.query.replace(/[^\w\s]/gi, '')} />
							)}
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
	width: 100%;
	display: grid;
	grid-template-rows: [header] 150px [canvas] auto [footer] auto;

	color: ${PrimaryColor};
	font-family: 'open_sansregular';
`
const Header = styled.header`
	grid-row: header;
`

const Canvas = styled.div`
	grid-row: canvas;
`
const Footer = styled.footer`
	grid-row: footer;
`
