import * as React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { IProject } from '../data/IProject'

interface IThumbnailProps {
	project: IProject
}

export const Thumbnail: React.FC<IThumbnailProps> = (props: IThumbnailProps) => {
	const { project } = props
	return (
		<ThumbnailContainer to={`page/${project.title.replace(' ', '').toLowerCase()}`}>
			<ThumbnailStyled style={{ backgroundImage: `url('${project.thumbnail}')` }}>{<Button> </Button>}</ThumbnailStyled>
			<Details>{project.title}</Details>
			{project.tags && <Tags>{project.tags[0]}</Tags>}
		</ThumbnailContainer>
	)
}
const ThumbnailContainer = styled(Link)`
	display: flex;
	flex-direction: column;
`

const ThumbnailStyled = styled.div`
	width: 100%;
	height: 150px;
	background-size: cover;
	background-position: center;
`

const Button = styled.div``
const Details = styled.div`
	width: 100%;
	text-align: center;
	padding-top: 10px;
	font-size: 16px;
	/* font-family: 'Museo_Slab_500_2'; */
	/* font-family: 'aleoregular';
	font-family: 'aleobold'; */
`
const Tags = styled.div`
	width: 100%;
	text-align: center;
	font-size: 14px;
`
