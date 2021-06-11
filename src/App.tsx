import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components/macro'
import { projects } from './data'
import { GlobalStyles } from './styles/GlobalStyles'
import { Header as HeaderContent } from './components/Header'
import { Footer as FooterContent } from './components/Footer'
import { Home } from './components/Home'
import { Page } from './components/Page'
import { Search } from './components/Search/Search'
import { AnimateIn } from './components/shared/Thumbnail/Thumbnail'
import { themeLight, themeDark } from './styles/theme'
import { useDarkMode } from './components/shared/hooks/useDarkMode'

const App = (): JSX.Element => {
	const [isDarkMode, toggleDarkMode] = useDarkMode()

	return (
		<ThemeProvider theme={isDarkMode ? themeDark : themeLight}>
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
										<Home isDarkMode={isDarkMode} />
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
										<Search
											query={match.params.query === 'UI-UX' ? 'UI-UX' : match.params.query.replace(/[^\w\s]/gi, '')}
										/>
									</Wrapper>
								)}
							/>
						</Switch>
					</Canvas>
					<Footer>
						<FooterContent isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
					</Footer>
				</AppContainer>
			</Router>
		</ThemeProvider>
	)
}

export default App

const AppContainer = styled.div`
	min-height: 100vh;
	width: 100%;
	min-width: 300px;
	display: grid;
	grid-template-rows: [header] 150px [canvas] 1fr [footer] auto;
`
const Header = styled.header`
	grid-row: header;
	background: ${({ theme }) => theme.background};
	transition: background 0.5s ease-in;
`

const Canvas = styled.div`
	grid-row: canvas;
	background: ${({ theme }) => theme.background};
	transition: background 0.5s ease-in;
`
const Wrapper = styled.div`
	width: 100%;
	padding: 0 0 8% 0;
	transition: padding 200ms ease-out;

	opacity: 0;
	animation: 1s ease-out 0.5s ${AnimateIn};
	animation-fill-mode: forwards;

	@media (min-width: 900px) {
		padding: 0 8% 8% 8%;
	}
`

const Footer = styled.footer`
	grid-row: footer;
`
