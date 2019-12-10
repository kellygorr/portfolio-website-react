import * as React from 'react'
import styled from 'styled-components'
import { ISlideshow, FileType } from '../../data/IProject'
import { LoadingColor, PrimaryColor } from '../../../GlobalStyles'

interface IPageProps {
	index: number
	isActive: boolean
	isScrolling: boolean
	data: ISlideshow
	setIsScrolling: (isScrolling: boolean) => void
	slideshowRef: React.RefObject<HTMLDivElement>
}

export const Slide: React.FC<IPageProps> = (props: IPageProps) => {
	const { data, isActive, isScrolling, setIsScrolling, slideshowRef, index } = props
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
				borderColor: isActive ? (isScrolling ? 'transparent' : PrimaryColor) : 'transparent',
				transitionDuration: isScrolling ? '0s' : '300ms',
			}}
		>
			{data.file && data.file.type === FileType.Video ? (
				<video controls poster={data.img}>
					<source src={data.file.source} type="video/mp4" />
				</video>
			) : (
				<img src={data.img} alt={data.img} />
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

	border: 3px solid;
	background-clip: padding-box;
	background-color: ${LoadingColor};

	transition: border-color linear;

	img,
	video {
		width: 100%;
	}
`

const LoadingImage = styled.img`
	display: none;
`
