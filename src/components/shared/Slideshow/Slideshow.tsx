import * as React from 'react'
import styled from 'styled-components'
import { ISlide } from '../../data/IProject'
import { Slide } from '..'

interface IPageProps {
	data: ISlide[]
	activeColor?: string
	defaultWidth: number
	slideshowRef: React.RefObject<HTMLDivElement>
}

let slideshowRef: React.RefObject<HTMLDivElement>
let ScrollTimer: any

export const Slideshow: React.FC<IPageProps> = (props: IPageProps) => {
	slideshowRef = props.slideshowRef
	const [active, setActive] = React.useState(0)
	const [isScrolling, setIsScrolling] = React.useState(false)

	React.useEffect(() => {
		if (!isScrolling) {
			findActiveSlide(setActive)
		}
	}, [isScrolling])

	return (
		<>
			<Slides
				ref={slideshowRef}
				onScroll={() => {
					if (props.data.length > 1) {
						setIsScrolling(true)
						clearTimeout(ScrollTimer)

						ScrollTimer = setTimeout(() => {
							setIsScrolling(false)
						}, 150)
					}
				}}
			>
				{props.data.map((slide: ISlide, index) => (
					<Slide
						key={slide.img}
						index={index}
						isActive={index === active && props.data.length > 1}
						isScrolling={isScrolling}
						activeColor={props.activeColor}
						defaultWidth={props.defaultWidth}
						data={slide}
						setIsScrolling={props.data.length > 1 && setIsScrolling}
						slideshowRef={slideshowRef}
					/>
				))}
			</Slides>
			<Caption>
				{props.data[active].caption}
				<Key>{`${active + 1} of ${props.data.length}`}</Key>
			</Caption>
		</>
	)
}

const findActiveSlide = (setActive: (index: number) => void): void => {
	if (slideshowRef && slideshowRef.current) {
		var slideArray = [].slice.call(slideshowRef.current.querySelectorAll('div'))
		const activeSlideIndex = slideArray.findIndex((el) => isElementCentered(el))
		if (activeSlideIndex >= 0) {
			setActive(activeSlideIndex)
		}
	}
}

const isElementCentered = (el: HTMLDivElement) => {
	var rect = el.getBoundingClientRect()
	const center = document.documentElement.clientWidth / 2
	return rect.left < center && center < rect.right
}

const Slides = styled.div`
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
		content: ' ';
		height: 10px; /* % does not work */
		min-width: 10%;
		width: 10%;
		width: 100px;
	}
`

const Caption = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	width: 100%;
	padding: 0px 5%;
	opacity: 1;
	transition: opacity linear;
	min-height: 4em;
`

const Key = styled.div`
	font-size: 0.8em;
	width: 100%;
	padding: 5px 0;
`
