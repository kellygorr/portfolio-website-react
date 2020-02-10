import * as React from 'react'
import styled from 'styled-components'
import { FileType, ISlide } from '../../data/IProject'
import { LoadingColor, PrimaryColor } from '../../../GlobalStyles'

interface IPageProps {
	index: number
	isActive: boolean
	isScrolling: boolean
	activeColor?: string
	data: ISlide
	setIsScrolling: (isScrolling: boolean) => void
	slideshowRef: React.RefObject<HTMLDivElement>
}

export const Slide: React.FC<IPageProps> = (props: IPageProps) => {
	const { data, isActive, isScrolling, setIsScrolling, slideshowRef, index, activeColor } = props
	const [isLoaded, setIsLoaded] = React.useState(false)

	React.useEffect(() => window.scrollTo(0, 0), [])
	console.log('isLoaded', isLoaded)
	return (
		<Container
			onClick={() => {
				if (!isActive && slideshowRef && slideshowRef.current) {
					setIsScrolling(true)

					const nextScroll = slideshowRef.current.clientWidth * 0.75 * index
					const currentScroll = slideshowRef.current.scrollLeft

					slideshowRef.current.scrollBy({
						top: 0,
						left: nextScroll - currentScroll,
						behavior: 'smooth',
					})
				}
			}}
			style={{
				cursor: isActive ? 'default' : 'pointer',
			}}
		>
			{data.file && data.file.type === FileType.Video ? (
				<video
					controls
					poster={data.img}
					style={{
						borderColor: isActive ? (isScrolling ? 'transparent' : activeColor ? activeColor : PrimaryColor) : 'transparent',
						transitionDuration: isScrolling ? '0s' : '300ms',
						maxWidth: data.width ? data.width + 'px' : '1000px',
					}}
				>
					<source src={data.file.source} type="video/mp4" />
				</video>
			) : (
				<img
					src={data.img}
					alt={data.img}
					style={{
						borderColor: isActive ? (isScrolling ? 'transparent' : activeColor ? activeColor : PrimaryColor) : 'transparent',
						transitionDuration: isScrolling ? '0s' : '300ms',
						maxWidth: data.width ? data.width + 'px' : '1000px',
					}}
				/>
			)}
			<LoadingImage src={data.img} onLoad={() => setIsLoaded(true)} />
		</Container>
	)
}

interface IStyle {
	isActive?: boolean
	isScrolling?: boolean
}

const Container = styled.div<IStyle>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 75%;
	min-width: 75%;
	margin: 0 5px;

	/* snap align center  */
	scroll-snap-align: center;

	img,
	video {
		width: 100%;
		background-color: ${LoadingColor};

		border: 3px solid;
		background-clip: padding-box;

		transition: border-color linear;
	}
`

const LoadingImage = styled.img`
	display: none;
`
