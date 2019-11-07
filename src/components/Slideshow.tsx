import * as React from 'react'
import { createRef } from 'react'
import styled, { keyframes } from 'styled-components'
import { ISlideshow } from './data/IProject'

interface IPageProps {
	data: ISlideshow[]
}

const slideRef = createRef<HTMLDivElement>()
let Timer: number

export const Slideshow: React.FC<IPageProps> = (props: IPageProps) => {
	const [active, setActive] = React.useState(0)
	const [isScrolling, setIsScrolling] = React.useState(false)
	const isNextVisible = active !== props.data.length - 1
	const isPrevVisible = active !== 0

	React.useEffect(() => {
		if (!isScrolling) {
			findActiveSlide(setActive)
		}
	}, [isScrolling])

	return (
		<Container>
			<Slides
				ref={slideRef}
				onScroll={() => {
					setIsScrolling(true)
					clearTimeout(Timer)

					Timer = setTimeout(function() {
						setIsScrolling(false)
					}, 150)
				}}
			>
				<Spacer />
				{props.data.map((slide: ISlideshow, index) => (
					<Slide
						key={slide.img}
						style={{
							backgroundImage: `url('${slide.img}')`,
							borderColor: index === active ? (isScrolling ? 'transparent' : 'blue') : 'transparent',
							transitionDuration: isScrolling ? '0s' : '300ms',
						}}
					/>
				))}
				<Spacer />
			</Slides>
			<Caption isScrolling={isScrolling}>{props.data[active].caption}</Caption>
			{isPrevVisible && <Prev onClick={() => scrollToPrev(active, setActive)}>Prev</Prev>}
			{isNextVisible && <Next onClick={() => scrollToNext(active, props.data.length, setActive)}>Next</Next>}
		</Container>
	)
}

const scrollToNext = (active: number, total: number, setActive: any): void => {
	if (slideRef && slideRef.current && active < total - 1) {
		slideRef.current.scrollBy({
			top: 0,
			left: slideRef.current.clientWidth / 2,
			behavior: 'smooth',
		})
		setActive(active + 1)
	}
}
const scrollToPrev = (active: number, setActive: any): void => {
	if (slideRef && slideRef.current && active > 0) {
		slideRef.current.scrollBy({
			top: 0,
			left: -slideRef.current.clientWidth / 2,
			behavior: 'smooth',
		})
		setActive(active - 1)
	}
}

const findActiveSlide = (setActive: any): void => {
	if (slideRef && slideRef.current) {
		slideRef.current.querySelectorAll('div').forEach((el, index) => {
			if (isElementInViewport(el)) {
				setActive(index)
			}
		})
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
const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0;}
`

const Container = styled.div`
	position: relative;
`
const Slides = styled.div`
	display: flex;
	align-items: center;
	height: 500px;

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
`

const Slide = styled.div<IStyle>`
	display: flex;
	justify-content: center;
	align-items: center;
	min-width: 75%;
	min-height: 95%;
	/* snap align center  */
	scroll-snap-align: center;
	margin: 0 10px;
	border: 3px solid;
	transition: border-color linear;

	background-color: bisque;
	background-repeat: no-repeat;
`
const NavButtons = styled.div`
	position: absolute;
	top: 50%;
	height: 30px;
	width: 30px;
	background-color: rgba(0, 0, 0, 0.5);

	opacity: 0;
	animation-name: ${fadeIn};
	animation-duration: 0.8s;
	animation-fill-mode: forwards;
`

const Next = styled(NavButtons)`
	right: 10px;
`

const Prev = styled(NavButtons)`
	left: 10px;
`
const Spacer = styled.span`
	display: block;
	height: 100%;
	min-width: 10%;
	width: 10%;
`

const Caption = styled.div<IStyle>`
	width: 100%;
	text-align: center;
	opacity: 0;
	animation-name: ${(props) => (props.isScrolling ? fadeOut : fadeIn)};
	animation-duration: ${(props) => (props.isScrolling ? '0' : ' 0.8s')};
	animation-fill-mode: forwards;
`
