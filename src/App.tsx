import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components/macro'
import { projects } from './data'
import { FooterBg, GlobalStyles, PrimaryColor } from './GlobalStyles'
import { Header as HeaderContent } from './components/Header'
import { Footer as FooterContent } from './components/Footer'
import { Home } from './components/Home'
import { Page } from './components/Page'
import { Search } from './components/Search'

const App = (): JSX.Element => (
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
	width: 100%;
	min-width: 300px;
	display: grid;
	grid-template-rows: [header] 150px [canvas] 1fr [footer] auto;

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
	transition: padding 200ms ease-out;

	@media (max-width: 1200px) {
		padding: 8%;
		padding-top: 0;
	}
`

const Footer = styled.footer`
	grid-row: footer;
`
