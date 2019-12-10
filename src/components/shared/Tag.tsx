import * as React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

interface ITagProps {
	isLastTag: boolean
	tag: string
}

export const Tag: React.FC<ITagProps> = (props: ITagProps) => {
	const { isLastTag, tag } = props
	return (
		<>
			<TagLink to={'/search/' + tag}>{tag}</TagLink>
			{!isLastTag && ', '}
		</>
	)
}

const TagLink = styled(Link)`
	width: 100%;
	padding-top: 3px;
	text-align: center;
	font-size: 0.9em;

	&:hover {
		text-decoration: underline;
	}
`
