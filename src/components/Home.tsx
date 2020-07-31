import * as React from 'react'
import styled from 'styled-components/macro'
import { Thumbnail } from './shared'
import { projects } from './data'

export const Home: React.FC = () => {
	const ref = React.useRef<HTMLDivElement>()
	const [rowLength, setRowLength] = React.useState(0)
	const handleResize = () => {
		if (ref) {
			const width = ref.current && ref.current.clientWidth

			const childWidth = ref.current.children[0].clientWidth

			const rowLength = Math.floor(width / childWidth)
			setRowLength(rowLength)
			console.log('rowLength', rowLength)
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
				console.log('isOddRow', index, index / rowLength)
				return (
					<Thumbnail
						key={project.details.header}
						data={project.details}
						style={{
							right: rowLength <= 2 ? 'initial' : isRowEven ? '20px' : '-20px',
						}}
					/>
				)
			})}
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
