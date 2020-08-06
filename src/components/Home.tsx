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
				const unevenAmount = projects.length % rowLength
				const unevenDif = projects.length - unevenAmount
				// If we have an uneven amount in the last row, we need to center these items
				const isUnevenLastRow = index >= projects.length - unevenAmount
				const unevenPercent = (50 - unevenDif) / 2

				return (
					<Thumbnail
						key={project.details.header}
						data={project.details}
						style={{
							right: isUnevenLastRow ? `-${unevenPercent}vw` : rowLength <= 2 ? 'initial' : isRowEven ? '30px' : '-30px',
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
	grid-gap: 20px;
`
