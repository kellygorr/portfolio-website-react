import * as React from 'react'
import styled from 'styled-components/macro'
import { createRef } from 'react'
import { ISlideshow, SectionType, IHighlight, IProject } from '../data/IProject'
import { Slideshow, Highlight, Thumbnail } from './'
import { Header } from '../Page'
import { Gallery } from '../Home'

interface ISectionProps {
	type: string
	data: string | ISlideshow[] | IProject[] | IHighlight[]
}

export const Section: React.FC<ISectionProps> = (props: ISectionProps) => {
	return (
		<>
			{props.type === SectionType.Header && <Header>{props.data as string}</Header>}
			{props.type === SectionType.Slideshow && <Slideshow data={props.data as ISlideshow[]} slideRef={createRef<HTMLDivElement>()} />}
			{props.type === SectionType.Body && <Paragraph>{props.data as string}</Paragraph>}
			{props.type === SectionType.Highlight &&
				(props.data as IHighlight[]).map((data, index) => <Highlight key={index} data={data as IHighlight} />)}
			{props.type === SectionType.Attachments && (
				<Gallery>
					{(props.data as IProject[]).map((data, index) => (
						<Thumbnail key={index} project={data} />
					))}
				</Gallery>
			)}
		</>
	)
}

const Paragraph = styled.p`
	font-size: 16px;
	padding: 0 5%;
`
