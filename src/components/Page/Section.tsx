import * as React from 'react'
import styled from 'styled-components/macro'
import { createRef } from 'react'
import { ISlideshow, SectionType, IHighlight, IThumbnail } from '../../data/IProject'
import { Header } from './Page'
import { ThumbnailGrid } from '../Home/Home'
import { Body, Paragraph } from './Body'
import { Highlight } from './Highlight'
import { Slideshow } from './Slideshow/Slideshow'
import { Thumbnail } from '../shared'

interface ISectionProps {
	type: string
	data: string | ISlideshow | IThumbnail[] | IHighlight[]
}

export const Section: React.FC<ISectionProps> = (props: ISectionProps) => {
	return (
		<>
			{props.type === SectionType.Header && <Header>{props.data as string}</Header>}
			{props.type === SectionType.Slideshow && (
				<Slideshow
					data={(props.data as ISlideshow).slides}
					neutralBorder={(props.data as ISlideshow).neutralBorder}
					defaultWidth={(props.data as ISlideshow).width}
					slideshowRef={createRef<HTMLDivElement>()}
				/>
			)}
			{props.type === SectionType.Body && <Body data={props.data as string} />}
			{props.type === SectionType.Highlight &&
				(props.data as IHighlight[]).map((data, index) => <Highlight key={index} data={data as IHighlight} />)}
			{props.type === SectionType.Attachments && (
				<GalleryWrapper>
					<Gallery>
						{(props.data as IThumbnail[]).map((data, index) => (
							<Thumbnail key={index} data={data} />
						))}
					</Gallery>
				</GalleryWrapper>
			)}
			{props.type === SectionType.Link && (
				<Paragraph>
					<Link>{props.data as string}</Link>
				</Paragraph>
			)}
		</>
	)
}

const GalleryWrapper = styled.div`
	padding: 0 15%;

	@media (max-width: 1200px) {
		padding: 0 8%;
	}
`

export const Link = styled.a`
	&:hover {
		cursor: pointer;
		text-decoration: underline;
	}
`

const Gallery = styled.div`
	${ThumbnailGrid}
`
