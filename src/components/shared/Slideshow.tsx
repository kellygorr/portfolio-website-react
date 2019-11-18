import * as React from 'react'
import { createRef } from 'react'
import styled, { keyframes } from 'styled-components'
import { ISlideshow } from '../data/IProject'
import { AccentColor } from '../../GlobalStyles'

interface IPageProps {
	data: ISlideshow[]
}

const slidesRef = createRef<HTMLDivElement>()
let ScrollTimer: number

export const Slideshow: React.FC<IPageProps> = (props: IPageProps) => {
	const [active, setActive] = React.useState(0)
	const [isScrolling, setIsScrolling] = React.useState(false)
	const isNextVisible = !isScrolling && active !== props.data.length - 1
	const isPrevVisible = !isScrolling && active !== 0

	React.useEffect(() => {
		if (!isScrolling) {
			findActiveSlide(setActive)
		}
	}, [isScrolling])

	return (
		<Container>
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
			{isPrevVisible && <Prev onClick={() => scrollToPrev(active, setActive, setIsScrolling)} />}
			{isNextVisible && <Next onClick={() => scrollToNext(active, props.data.length, setActive, setIsScrolling)} />}
		</Container>
	)
}

const scrollToNext = (active: number, total: number, setActive: any, setIsScrolling: any): void => {
	if (slidesRef && slidesRef.current && active < total - 1) {
		setIsScrolling(true)
		slidesRef.current.scrollBy({
			top: 0,
			left: slidesRef.current.clientWidth / 2,
			behavior: 'smooth',
		})
		setActive(active + 1)
	}
}
const scrollToPrev = (active: number, setActive: any, setIsScrolling: any): void => {
	if (slidesRef && slidesRef.current && active > 0) {
		setIsScrolling(true)
		slidesRef.current.scrollBy({
			top: 0,
			left: -slidesRef.current.clientWidth / 2,
			behavior: 'smooth',
		})
		setActive(active - 1)
	}
}

const findActiveSlide = (setActive: any): void => {
	if (slidesRef && slidesRef.current) {
		var slideArray = [].slice.call(slidesRef.current.querySelectorAll('div'))
		const activeSlideIndex = slideArray.findIndex((el) => isElementInViewport(el))
		if (activeSlideIndex >= 0) {
			setActive(activeSlideIndex)
		}
	}
}

const isElementInViewport = (el: any) => {
	var rect = el.getBoundingClientRect()
	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	)
}

interface IStyle {
	isActive?: boolean
	isScrolling?: boolean
}

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1;}
`

const Container = styled.div`
	position: relative;
	height: 60%;
`
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
	&:before,
	&:after {
		content: '';
		height: 100%;
		min-width: 10%;
		width: 10%;
	}
`

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

const NavButtons = styled.div`
	position: absolute;
	top: 45%;
	height: 50px;
	width: 15px;
	background-color: black;
	color: white;

	opacity: 0;
	animation-name: ${fadeIn};
	animation-duration: 0.8s;
	animation-fill-mode: forwards;
`

const Next = styled(NavButtons)`
	right: 0px;
`

const Prev = styled(NavButtons)`
	left: 0px;
`
