import * as React from 'react'
import styled from 'styled-components/macro'
import { ISlideshow, IAttachment, SectionType, IHighlight } from '../data/IProject'
import { Slideshow } from './Slideshow'
import { Highlight } from './Highlight'
import { Header } from '../Page'

interface ISectionProps {
	type: string
	data: string | ISlideshow[] | IAttachment[] | IHighlight[]
}

export const Section: React.FC<ISectionProps> = (props: ISectionProps) => {
	return (
		<>
			{props.type === SectionType.Header && <Header>{props.data as string}</Header>}
			{props.type === SectionType.Slideshow && <Slideshow data={props.data as ISlideshow[]} />}
			{props.type === SectionType.Body && <Paragraph>{props.data as string}</Paragraph>}
			{props.type === SectionType.Highlight &&
				(props.data as IHighlight[]).map((data, index) => <Highlight key={index} data={data as IHighlight} />)}
		</>
	)
}

const Paragraph = styled.p`
	font-size: 16px;
	padding: 0 5%;
`
