import * as React from 'react'
import styled from 'styled-components'
import { ISlideshow } from '../data/IProject'
import { AccentColor } from '../../GlobalStyles'

interface IPageProps {
	data: ISlideshow[]
	slideRef: React.RefObject<HTMLDivElement>
}

let slidesRef: React.RefObject<HTMLDivElement>
let ScrollTimer: number

export const Slideshow: React.FC<IPageProps> = (props: IPageProps) => {
	slidesRef = props.slideRef
	const [active, setActive] = React.useState(0)
	const [isScrolling, setIsScrolling] = React.useState(false)
	// const isNextVisible = !isScrolling && active !== props.data.length - 1
	// const isPrevVisible = !isScrolling && active !== 0

	React.useEffect(() => {
		if (!isScrolling) {
			findActiveSlide(setActive)
		}
	}, [isScrolling])

	console.log('active', props.data[0].img, active)

	return (
		<SlideshowContainer>
			<Slides
				ref={slidesRef}
				onScroll={() => {
					setIsScrolling(true)
					clearTimeout(ScrollTimer)

					ScrollTimer = setTimeout(function() {
						setIsScrolling(false)
					}, 150)
				}}
			>
				{props.data.map((slide: ISlideshow, index) => (
					<Slide
						key={slide.img}
						style={{
							borderColor: index === active ? (isScrolling ? 'transparent' : AccentColor) : 'transparent',
							transitionDuration: isScrolling ? '0s' : '500ms',
						}}
					>
						<img src={slide.img} alt={slide.img} />
					</Slide>
				))}
			</Slides>
			<Caption
				style={{
					opacity: isScrolling ? 0 : 1,
					transitionDuration: isScrolling ? '0s' : '500ms',
				}}
			>
				{props.data[active].caption}
			</Caption>
			{/* {isPrevVisible && <Prev onClick={() => scrollToPrev(active, setActive, setIsScrolling)}>&#8249;</Prev>}
			{isNextVisible && <Next onClick={() => scrollToNext(active, props.data.length, setActive, setIsScrolling)}>&#8250;</Next>} */}
		</SlideshowContainer>
	)
}

// const scrollToNext = (active: number, total: number, setActive: any, setIsScrolling: any): void => {
// 	if (slidesRef && slidesRef.current && active < total - 1) {
// 		setIsScrolling(true)
// 		slidesRef.current.scrollBy({
// 			top: 0,
// 			left: slidesRef.current.clientWidth / 2,
// 			behavior: 'smooth',
// 		})
// 		setActive(active + 1)
// 	}
// }
// const scrollToPrev = (active: number, setActive: any, setIsScrolling: any): void => {
// 	if (slidesRef && slidesRef.current && active > 0) {
// 		setIsScrolling(true)
// 		slidesRef.current.scrollBy({
// 			top: 0,
// 			left: -slidesRef.current.clientWidth / 2,
// 			behavior: 'smooth',
// 		})
// 		setActive(active - 1)
// 	}
// }

const findActiveSlide = (setActive: any): void => {
	if (slidesRef && slidesRef.current) {
		var slideArray = [].slice.call(slidesRef.current.querySelectorAll('div'))
		const activeSlideIndex = slideArray.findIndex((el) => isElementCentered(el))
		if (activeSlideIndex >= 0) {
			setActive(activeSlideIndex)
		}
	}
}

const isElementCentered = (el: any) => {
	var rect = el.getBoundingClientRect()
	const center = document.documentElement.clientWidth / 2
	return rect.left < center && center < rect.right
}

interface IStyle {
	isActive?: boolean
	isScrolling?: boolean
}

// const fadeIn = keyframes`
//   from { opacity: 0; }
//   to { opacity: 1;}
// `

const Slides = styled.div`
	height: 100%;
	display: flex;
	align-items: center;

	/* Hide scrollbars  */
	overflow: -moz-scrollbars-none;
	-ms-overflow-style: none;
	&::-webkit-scrollbar {
		width: 0 !important;
	}
	/* Horizontal scrolling only */
	overflow-x: auto;
	overflow-y: hidden;
	/* snap mandatory on horizontal axis  */
	scroll-snap-type: x mandatory;
	-webkit-overflow-scrolling: touch;

	/* Space before first slide and after last slide  */
	/* &:before,
	&:after {
		content: ' ';
		height: 100%;
		max-height: 100%;
		min-width: 10%;
		width: 10%;
		width: 100px;
		background-color: green;
	} */
`
const SlideshowContainer = styled.div``

const Slide = styled.div<IStyle>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 75%;
	min-width: 75%;

	/* snap align center  */
	scroll-snap-align: center;
	margin: 0 5px;
	border: 3px solid;
	transition: border-color linear;

	img {
		width: 100%;
	}
`

const Caption = styled.div<IStyle>`
	width: 100%;
	opacity: 1;
	transition: opacity linear;
	text-align: center;
`

// const NavButtons = styled.div`
// 	cursor: pointer;
// 	position: absolute;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	top: 45%;
// 	width: 60px;
// 	background-color: black;
// 	color: white;
// 	border: 1px solid white;

// 	opacity: 0;
// 	animation-name: ${fadeIn};
// 	animation-duration: 0.8s;
// 	animation-fill-mode: forwards;
// `

// const Next = styled(NavButtons)`
// 	right: 0px;
// `

// const Prev = styled(NavButtons)`
// 	left: 0px;
// `
