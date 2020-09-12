import * as React from 'react'
import styled from 'styled-components/macro'

import { projects } from './data'
import { Thumbnail, BlankCards } from './shared'

export const Home: React.FC = () => {
	const ref = React.useRef<HTMLDivElement>()
	const [rowLength, setRowLength] = React.useState(0)

	const handleResize = () => {
		if (ref) {
			const width = ref.current && ref.current.clientWidth
			const childWidth = ref.current.children[0].clientWidth
			const rowLength = Math.floor(width / childWidth)
			setRowLength(rowLength)
		}
	}

	React.useEffect(() => {
		window.addEventListener('resize', handleResize)
		handleResize()
		// cleanup this component
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return (
		<Gallery ref={ref}>
			{projects.map((project, index) => {
				const isRowEven = Math.floor(index / rowLength) % 2 === 0

				return (
					<Thumbnail
						key={project.details.header}
						data={project.details}
						style={{
							right: rowLength <= 2 ? 'initial' : isRowEven ? '30px' : '-30px',
						}}
					/>
				)
			})}
			<BlankCards projectLength={projects.length} rowLength={rowLength} />
		</Gallery>
	)
}

export const Gallery = styled.div`
	position: relative;
	width: 100%;
	display: grid;
	grid-template-columns: [gallery] repeat(auto-fill, minmax(260px, 1fr));
	grid-gap: 20px;
`
