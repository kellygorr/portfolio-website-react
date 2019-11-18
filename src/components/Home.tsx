import * as React from 'react'
import styled from 'styled-components/macro'
import { Thumbnail } from './shared'
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

export const Gallery = styled.div`
	position: relative;
	width: 100%;
	display: grid;
	grid-template-columns: [gallery] repeat(auto-fill, minmax(260px, 1fr));
	grid-gap: 10px;

	padding: 5%;
	padding-top: 0;
`
