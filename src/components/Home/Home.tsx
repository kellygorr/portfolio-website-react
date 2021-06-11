import * as React from 'react'
import styled, { css } from 'styled-components/macro'
import { projects } from '../../data'
import { IProject } from '../../data/IProject'
import { GRID_GAP, GRID_WIDTH } from '../../styles/GlobalStyles'
import { Thumbnail } from '../shared'

interface IHomeProps {
	isDarkMode: boolean
}

export const Home = (props: IHomeProps): JSX.Element => {
	const ref = React.useRef<HTMLDivElement>()
	const [rowLength, setRowLength] = React.useState(0)
	const [overflowAmount, setOverflowAmount] = React.useState(0)
	const [blankThumbnails, setBlankThumbnails] = React.useState<IProject[]>([])
	// const [isLoaded, setIsLoaded] = React.useState(false)

	React.useEffect(() => {
		window.addEventListener('resize', handleResize)
		handleResize()
		// setTimeout(() => {
		// 	setIsLoaded(true)
		// }, 1000)

		// cleanup this component
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	/* 
		Generate array of blank thumbnails.  
		Don't generate a new array every time, only add onto it if we need more blank thumbnails 
	*/
	React.useEffect(() => {
		if (overflowAmount > blankThumbnails.length) {
			// Amount of blankThumbnails needed to equal the overflowAmount
			const diff = overflowAmount - blankThumbnails.length
			const newArray: IProject[] = Array.from(Array(diff), () => ({
				details: {
					header: RandomStr(),
					thumbnail: null,
					tags: Array.from(Array(Math.floor(Math.random() * 3) + 1), () => RandomStr()),
				},
			}))
			setBlankThumbnails([...blankThumbnails, ...newArray])
		}
	}, [rowLength, overflowAmount, blankThumbnails])

	const handleResize = () => {
		if (ref) {
			const width = ref?.current?.clientWidth
			// In order to calculate the correct amount of cells, the padding/margin must be apart of the cell
			const childWidth = ref?.current?.children[0]?.clientWidth
			const rowLength = Math.floor(width / childWidth)
			setRowLength(rowLength)
			setOverflowAmount(rowLength - (projects.length % rowLength))
		}
	}

	return (
		<Gallery ref={ref}>
			{projects.map((project, index) => {
				const row = Math.floor(index / rowLength)
				const translateX = rowLength > 2 ? GetTranslateX(row % 2 === 0) : 0
				return (
					<Thumbnail
						key={project.details.header}
						data={project.details}
						style={{
							transform: `translate3d(${translateX}, 0,0)`,
						}}
						hideTags={rowLength < 2}
					/>
				)
			})}

			{rowLength > 1 &&
				blankThumbnails.slice(0, overflowAmount).map((project, index) => {
					const row = Math.floor((index + projects.length) / rowLength)
					const translateX = rowLength > 2 ? GetTranslateX(row % 2 === 0) : 0
					return (
						<Thumbnail
							key={project.details.header}
							data={project.details}
							style={{
								opacity: props.isDarkMode ? 0.15 : 0.4,
								transform: `translate3d(${translateX}, 0,0)`,
							}}
							hideTags={rowLength < 2}
						/>
					)
				})}
		</Gallery>
	)
}

const GetTranslateX = (isRowEven: boolean): string => (isRowEven ? '-30px' : '30px')

const RandomStr = () => {
	const len = Math.floor(Math.random() * 10) + 3
	const randomString = '01'
	let ans = ''
	for (let i = len; i > 0; i--) {
		ans += randomString[Math.floor(Math.random() * randomString.length)]
	}
	return ans
}

export const ThumbnailGrid = css`
	width: 100%;
	display: grid;
	grid-template-columns: [gallery] repeat(auto-fit, ${GRID_WIDTH + GRID_GAP}px);
`

const Gallery = styled.div`
	${ThumbnailGrid}
	justify-content: center;
`
