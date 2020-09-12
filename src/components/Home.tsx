import * as React from 'react'
import styled from 'styled-components/macro'
import { Thumbnail } from './shared'
import { projects } from './data'
import { ThumbnailImage, transparentBase64, H3, Tags } from './shared/Thumbnail'

export const Home: React.FC = () => {
	const ref = React.useRef<HTMLDivElement>()
	const [rowLength, setRowLength] = React.useState(0)
	// Calculate missing cards

	const unevenAmount = projects && projects.length % rowLength
	const missingAmount = rowLength - unevenAmount

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
							right: isRowEven ? '30px' : '-30px',
						}}
					/>
				)
			})}
			{missingAmount &&
				Array.from(Array(missingAmount).keys()).map((x: number, index: number) => {
					const isRowEven = Math.floor((index + projects.length) / rowLength) % 2 === 0
					const tagLength = Array.from(Array(Math.floor(Math.random() * 3) + 1).keys())
					return (
						<BlankCard
							key={x + index}
							style={{
								opacity: 0.5,
								right: isRowEven ? '30px' : '-30px',
							}}
						>
							<ThumbnailImage
								style={{
									backgroundImage: `url('data:image/png;base64,${transparentBase64}')`,
								}}
							/>
							<H3>{RandomStr()}</H3>
							<Tags>
								[{' '}
								{tagLength.map((x: number, index) => {
									return <Tag key={x + index}>{tagLength.length !== index + 1 ? RandomStr() + ', ' : RandomStr()}</Tag>
								})}{' '}
								]
							</Tags>
						</BlankCard>
					)
				})}
		</Gallery>
	)
}

const RandomStr = () => {
	const len = Math.floor(Math.random() * 10) + 3
	const randomString = '01'
	let ans = ''
	for (var i = len; i > 0; i--) {
		ans += randomString[Math.floor(Math.random() * randomString.length)]
	}
	return ans
}

export const Gallery = styled.div`
	position: relative;
	width: 100%;
	display: grid;
	grid-template-columns: [gallery] repeat(auto-fill, minmax(260px, 1fr));
	grid-gap: 20px;
`

const BlankCard = styled.div`
	display: flex;
	flex-direction: column;
`

const Tag = styled.span`
	width: 100%;
	padding-top: 3px;
	text-align: center;
	font-size: 0.9em;
`
