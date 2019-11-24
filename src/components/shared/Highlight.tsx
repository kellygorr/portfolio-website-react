import * as React from 'react'
import styled from 'styled-components/macro'
import { IHighlight, SkillType, ToolType, TagType } from '../data/IProject'
import { Link } from 'react-router-dom'

interface IHighlightProps {
	data: IHighlight
}

export const Highlight: React.FC<IHighlightProps> = (props: IHighlightProps) => {
	return (
		<HighlightSection>
			<Header>{props.data.header}</Header>
			{props.data.tags && props.data.tags.length > 0 && (
				<List>
					[
					{props.data.tags &&
						(props.data.tags as (TagType | SkillType | ToolType)[]).map((item: TagType | SkillType | ToolType, index) => (
							<Tag to={'/search/' + item} key={index}>
								{item}
								{index !== (props.data.tags && props.data.tags.length - 1) && ', '}
							</Tag>
						))}
					]
				</List>
			)}
			{props.data.list && props.data.list.length > 0 && (
				<List>
					{(props.data.list as string[]).map((item: string, index) => (
						<span key={index}>
							{item}
							{index !== (props.data.list && props.data.list.length - 1) && ', '}
						</span>
					))}
				</List>
			)}
			{props.data.body && <Body>{props.data.body}</Body>}
		</HighlightSection>
	)
}

const HighlightSection = styled.div`
	display: flex;
	padding: 0 5%;
`

const Header = styled.h4`
	padding-right: 10px;
	white-space: nowrap;
	&::after {
		content: ': ';
	}
`

const Tag = styled(Link)`
	&:hover {
		text-decoration: underline;
	}
`

const List = styled.p``
const Body = styled.p``
