import * as React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components/macro'
import { Home, Page, Search } from './components'
import { projects } from './components/data'
import { GlobalStyles, PrimaryColor } from './GlobalStyles'
import { Footer as FooterContent, Header as HeaderContent } from './components/shared'

const App: React.FC = () => (
	<Router>
		<AppContainer>
			<GlobalStyles />

			<Header>
				<HeaderContent />
			</Header>
			<Canvas>
				<Switch>
					<Route
						exact
						path="/"
						render={() => (
							<Wrapper>
								<Home />
							</Wrapper>
						)}
					/>
					<Route
						path="/page/:title?"
						render={({ match }) => {
							const project = projects.find(
								(project) =>
									match.params.title.replace(/[^\w\s]/gi, '').toLowerCase() ===
									project.details.header.toLowerCase().replace(/ /g, '')
							)
							return project && <Page data={project} />
						}}
					/>
					<Route
						path="/search/:query?"
						render={({ match }) => (
							<Wrapper>
								<Search query={match.params.query === 'UI-UX' ? 'UI-UX' : match.params.query.replace(/[^\w\s]/gi, '')} />
							</Wrapper>
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

export default App

const AppContainer = styled.div`
	position: relative;
	height: 100%;
	width: 100%;
	display: grid;
	grid-template-rows: [header] 150px [canvas] auto [footer] max-content;

	color: ${PrimaryColor};
	font-family: 'open_sansregular';
`
const Header = styled.header`
	grid-row: header;
`

const Canvas = styled.div`
	grid-row: canvas;
`
const Wrapper = styled.div`
	padding: 15%;
	padding-top: 0;

	@media (max-width: 1200px) {
		padding: 8%;
		padding-top: 0;
	}
`

const Footer = styled.footer`
	grid-row: footer;
	background-color: #0c0c0c;
`
