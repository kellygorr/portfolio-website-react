import styled from 'styled-components/macro'
import { motion } from 'framer-motion'
import { IHighlight, ILink, SkillType } from '../../data/IProject'
import { Tags } from '../shared/Tags/Tags'
import { CogIcon } from '../../assets/svg/CogIcon'
import { CogFilledIcon } from '../../assets/svg/CogFilledIcon'

const list: IHighlight[] = [
	{
		header: 'Contact/Resume',
		body: 'LinkedIn',
		link: {
			title: 'LinkedIn',
			link: 'https://www.linkedin.com/in/kellygorr/',
		},
	},
	{
		header: 'Portfolio',
		link: {
			title: 'kellygorr.com',
			link: 'https://kellygorr.com/',
		},
	},
	{
		header: 'Photography',
		link: {
			title: 'photography.kellygorr.com',
			link: 'https://photography.kellygorr.com/',
		},
	},
	{
		header: 'Website',
		tags: [SkillType.TypeScript, SkillType.React, SkillType.HTML, SkillType.CSS],
		link: {
			title: 'github.com/kellygorr/portfolio-website-react',
			link: 'https://github.com/kellygorr/portfolio-website-react',
		},
	},
]

interface IFooterProps {
	isDarkMode: boolean
	toggleDarkMode: () => void
}

const cog1 = {
	darkMode: { rotate: -150 },
	lightMode: { rotate: 0 },
}

const cog2 = {
	darkMode: { rotate: 0, x: -10, y: -10 },
	lightMode: { rotate: -270, x: -10, y: -10 },
}

export const Footer = (props: IFooterProps): JSX.Element => (
	<Container>
		<Left>
			<List>
				{list.map((item: IHighlight) => (
					<ListItem key={item.header}>
						<StyledLink href={(item.link as ILink).link} rel="noopener noreferrer" target="_blank">
							<Title>{item.header}</Title>
							{(item.link as ILink).title}
						</StyledLink>
						<TagWrapper>{item.tags && <Tags tags={item.tags} />}</TagWrapper>
					</ListItem>
				))}
			</List>
		</Left>
		<Right>
			<Settings>
				<SettingsButton onClick={props.toggleDarkMode}>
					<AnimateCog
						variants={cog1}
						initial={false}
						animate={props.isDarkMode ? 'darkMode' : 'lightMode'}
						transition={{ duration: 1 }}
						style={{ scale: 0.9 }}
					>
						<CogIcon />
					</AnimateCog>

					<AnimateCog
						variants={cog2}
						initial={false}
						animate={props.isDarkMode ? 'darkMode' : 'lightMode'}
						transition={{ duration: 1 }}
						style={{ scale: 0.5 }}
					>
						<CogFilledIcon />
					</AnimateCog>
				</SettingsButton>
			</Settings>
		</Right>
	</Container>
)

const Container = styled.div`
	display: flex;
	flex-wrap: wrap-reverse;
	width: 100%;
	padding: 40px 3%;
	color: ${({ theme }) => theme.footerText};
	font-size: 0.9em;
	background-color: ${({ theme }) => theme.footerBackground};
	transition: background 0.5s ease-in;

	/* Spikey border  */
	&:after {
		content: '';
		position: absolute;
		top: -14px;
		left: 0px;
		width: 100%;
		height: 14px;
		background: ${({ theme }) =>
			`linear-gradient(-45deg, ${theme.footerBackground} 7px, transparent 0), linear-gradient(45deg, ${theme.footerBackground} 7px, transparent 0)`};
		background-repeat: repeat-x;
		background-size: 14px 14px;
		transition: background 0.5s ease-in;
	}

	*:focus {
		border-color: ${({ theme }) => theme.footerText};
	}
`
const Left = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
`

const Right = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
`

const List = styled.ul`
	display: flex;
	flex-direction: column;
`

const ListItem = styled.li`
	display: flex;
	flex-direction: column;
`
const Title = styled.div`
	&:first-child {
		margin: 0;
	}
`
const StyledLink = styled.a`
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	padding: 8px;
	border: 2px solid transparent;
`

const TagWrapper = styled.div`
	padding: 5px 8px;
`
const Settings = styled.div`
	display: flex;
	justify-content: flex-end;
`

const SettingsButton = styled.button`
	cursor: pointer;
	width: 60px;
	height: 45px;
	padding: 5px;
	display: flex;
	align-items: center;
	border-radius: 8px;
	border: 2px solid transparent;
`
const AnimateCog = styled(motion.div)`
	width: 30px;
	height: 30px;
	svg {
		path {
			fill: ${({ theme }) => theme.footerText};
		}
	}
`
