import * as React from 'react'
import styled from 'styled-components/macro'
import { Thumbnail } from './shared/Thumbnail'
import { projects } from './data'

export const Home: React.FC = () => {
	return (
		<Gallery>
			{projects.map((project) => (
				<Thumbnail key={project.title} project={project} />
			))}
		</Gallery>
	)
}

const Gallery = styled.div`
	grid-row: canvas;
	position: relative;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
	grid-gap: 10px;
	padding: 20px;
`
