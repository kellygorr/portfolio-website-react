import * as React from 'react'
import styled from 'styled-components/macro'
import { IHighlight, SkillType, ToolType, TagType } from '../data/IProject'
import { Link } from 'react-router-dom'

interface IHighlightProps {
	data: IHighlight
}

export const Highlight: React.FC<IHighlightProps> = (props: IHighlightProps) => {
	return (
		<>
			<Header>{props.data.header}</Header>
			{props.data.tags && props.data.tags.length > 0 && (
				<List>
					{props.data.tags &&
						(props.data.tags as (TagType | SkillType | ToolType)[]).map((item: TagType | SkillType | ToolType, index) => (
							<Link to={'/search/' + item} key={index}>
								{item}
								{index !== (props.data.tags && props.data.tags.length - 1) && ', '}
							</Link>
						))}
				</List>
			)}
			{props.data.list && props.data.list.length > 0 && (
				<List>
					{(props.data.list as string[]).map((item: string, index) => (
						<>
							{item}
							{index !== (props.data.list && props.data.list.length - 1) && ', '}
						</>
					))}
				</List>
			)}
			{props.data.body && <Body>{props.data.body}</Body>}
		</>
	)
}

const Header = styled.h4`
	padding: 0 5%;
	&::after {
		content: ': ';
	}
`
const List = styled.p`
	padding: 0 5%;
`
const Body = styled.p`
	padding: 0 5%;
`
