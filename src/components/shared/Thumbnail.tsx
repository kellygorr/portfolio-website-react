import * as React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { IProject } from '../data/IProject'
import { AccentColor } from '../../GlobalStyles'

interface IThumbnailProps {
	project: IProject
}

export const Thumbnail: React.FC<IThumbnailProps> = (props: IThumbnailProps) => {
	const { project } = props

	return (
		<ThumbnailContainer>
			<ThumbnailStyled style={{ backgroundImage: `url('${project.thumbnail}')` }}>{<Button> </Button>}</ThumbnailStyled>
			<H3>{project.title}</H3>
			{/* We don't want to nest <a>'s*/}
			<ThumbnailLink to={`/page/${project.title.replace(' ', '').toLowerCase()}`} />

			{project.tags && (
				<Tags>
					{/* We want the thumbnail link behind the tag links */}
					<ThumbnailLink to={`/page/${project.title.replace(' ', '').toLowerCase()}`} />[
					{project.tags.map((tag, index) => (
						<Tag key={index} to={'/search/' + tag}>
							{project.tags && index === project.tags.length - 1 ? tag : tag + ', '}
						</Tag>
					))}
					]
				</Tags>
			)}
		</ThumbnailContainer>
	)
}

const ThumbnailLink = styled(Link)`
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	grid-column: gallery;
`

const ThumbnailStyled = styled.div`
	width: 100%;
	height: 175px;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	border: 3px solid transparent;
`

const Button = styled.div``
const H3 = styled.h3`
	width: 100%;
	text-align: center;
	padding-top: 8px;
	font-size: 1em;
	font-family: 'Museo_Slab_500_2';
`
const Tags = styled.div`
	width: 100%;
	padding-top: 3px;
	text-align: center;
	font-size: 0.9em;
`
const Tag = styled(Link)`
	width: 100%;
	padding-top: 3px;
	text-align: center;
	font-size: 0.9em;

	&:hover {
		font-weight: 700;
	}
`

const ThumbnailContainer = styled.div`
	display: flex;
	flex-direction: column;

	&:hover {
		${ThumbnailStyled} {
			border-color: ${AccentColor};
		}
		${H3} {
			color: ${AccentColor};
		}
	}
`
