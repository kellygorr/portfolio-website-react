import * as React from 'react'
import styled from 'styled-components/macro'
import { AccentColor, PrimaryAccentColor } from '../../GlobalStyles'
import { SkillType } from '../data/IProject'
import { Link } from 'react-router-dom'

const websiteTags = [SkillType.TypeScript, SkillType.React, SkillType.HTML, SkillType.CSS]

export const Footer: React.FC = () => (
	<Container>
		<Title>Contact/Resume</Title>
		<Contact>
			<a href='https://www.linkedin.com/in/kellygorr/'>LinkedIn</a>
		</Contact>
		<Title>Website</Title>
		<Tags>
			[
			{websiteTags.map((tag, index) => (
				<Tag key={index} to={'/search/' + tag}>
					{index === websiteTags.length - 1 ? tag : tag + ', '}
				</Tag>
			))}
			]
		</Tags>
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
`
const Title = styled.div`
	font-size: 1em;
	margin-top: 10px;
	&:first-child {
		margin: 0;
	}
`
const Contact = styled.div`
	font-size: 0.9em;

	&:hover {
		font-weight: 700;
	}
`

const Tags = styled.div`
	width: 100%;
`
const Tag = styled(Link)`
	width: 100%;
	font-size: 0.9em;
	&:hover {
		font-weight: 700;
	}
`
