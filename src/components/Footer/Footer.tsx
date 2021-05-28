import styled from 'styled-components/macro'
import { FooterBg, PrimaryAccentColor } from '../../GlobalStyles'
import { SkillType } from '../../data/IProject'
import { Tag } from '../shared'

export interface IFooterList {
	title: string
	link: ILink
}

interface ILink {
	title: string
	URL: string
	tags?: string[]
}

const list: IFooterList[] = [
	{
		title: 'Contact/Resume',
		link: {
			title: 'LinkedIn',
			URL: 'https://www.linkedin.com/in/kellygorr/',
		},
	},
	{
		title: 'Portfolio',
		link: {
			title: 'kellygorr.com',
			URL: 'https://kellygorr.com/',
		},
	},
	{
		title: 'Photography',
		link: {
			title: 'photography.kellygorr.com',
			URL: 'https://photography.kellygorr.com/',
		},
	},
	{
		title: 'Website',
		link: {
			tags: [SkillType.TypeScript, SkillType.React, SkillType.HTML, SkillType.CSS],
			title: 'github.com/kellygorr/portfolio-website-react',
			URL: 'https://github.com/kellygorr/portfolio-website-react',
		},
	},
]

export const Footer = (): JSX.Element => (
	<Container>
		<List>
			{list.map((item: IFooterList) => (
				<ListItem key={item.title}>
					<StyledLink href={item.link.URL} rel="noopener noreferrer" target="_blank">
						<Title>{item.title}</Title>

						{item.link.title}
					</StyledLink>
					{item.link.tags && (
						<Tags>
							[
							{item.link.tags.map((tag, index) => (
								<Tag key={tag} isLastTag={index === item.link.tags.length - 1} tag={tag} />
							))}
							]
						</Tags>
					)}
				</ListItem>
			))}
		</List>
	</Container>
)

const Container = styled.div`
	display: flex;
	width: 100%;
	height: 270px;
	padding: 40px 3%;
	color: ${PrimaryAccentColor};
	font-size: 0.9em;
	background-color: ${FooterBg};

	@media only screen and (max-width: 768px) {
		height: auto;
	}
`
const List = styled.ul`
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	justify-content: flex-end;
	height: 100%;
	width: 100%;
`

const ListItem = styled.li`
	display: flex;
	flex-direction: column;
	margin-top: 10px;
	min-width: 50%;
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
	padding: 5px;
	border: 2px solid transparent;

	&:focus {
		border: 2px solid white;
	}

	&:focus:not(:focus-visible) {
		border: 2px solid transparent;
	}
`

const Tags = styled.div`
	white-space: nowrap;
	width: 100%;
	padding: 5px;
	border: 2px solid transparent;
`
