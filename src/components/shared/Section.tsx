import * as React from 'react'
import styled from 'styled-components/macro'
import { ISlideshow, IAttachment, SectionType } from '../data/IProject'
import { Slideshow } from './Slideshow'

interface ISectionProps {
	type: string
	data: string | ISlideshow[] | IAttachment
}

export const Section: React.FC<ISectionProps> = (props: ISectionProps) => {
	return (
		<>
			{props.type === SectionType.Header && <Header>{props.data as string}</Header>}
			{props.type === SectionType.Slideshow && <Slideshow data={props.data as ISlideshow[]} />}
			{props.type === SectionType.Body && <Paragraph>{props.data as string}</Paragraph>}
		</>
	)
}

const Header = styled.h1`
	font-family: 'Museo_Slab_500_2';
	font-size: 30px;
`

const Paragraph = styled.p`
	font-size: 16px;
`
