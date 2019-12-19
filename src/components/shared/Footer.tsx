import * as React from 'react'
import styled from 'styled-components/macro'
import { AccentColor, PrimaryAccentColor } from '../../GlobalStyles'
import { SkillType } from '../data/IProject'
import { Tag } from '.'

const websiteTags = [SkillType.TypeScript, SkillType.React, SkillType.HTML, SkillType.CSS]

export const Footer: React.FC = () => (
	<Container>
		<Title>Contact/Resume</Title>
		<Contact>
			<a href="https://www.linkedin.com/in/kellygorr/">LinkedIn</a>
		</Contact>
		<Title>Website Info</Title>
		<Tags>
			[
			{websiteTags.map((tag, index) => (
				<Tag key={index} isLastTag={index === websiteTags.length - 1} tag={tag} />
			))}
			]
		</Tags>

		<Contact>
			<a href="https://github.com/kellygorr/portfolio-website-react">https://github.com/kellygorr/portfolio-website-react</a>
		</Contact>

		{/* <Title>Other Projects</Title>
					<Contact>Photography</Contact>
					<Contact>Digital Art</Contact> */}
	</Container>
)

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	width: 100%;
	height: 100%;
	background-color: ${AccentColor};
	color: ${PrimaryAccentColor};
	padding: 20px 5%;
	font-size: 0.9em;
`
const Title = styled.div`
	margin-top: 10px;
	&:first-child {
		margin: 0;
	}
	&::after {
		content: ': ';
	}
`
const Contact = styled.div`
	&:hover {
		text-decoration: underline;
	}
`

const Tags = styled.div`
	width: 100%;
`
