import * as React from 'react'
import styled from 'styled-components/macro'
import { IProject, ISection } from '../../data/IProject'
import { Section } from './Section'
import { AnimateIn } from '../shared/Thumbnail/Thumbnail'
interface IPageProps {
	data: IProject | null
}

export const Page: React.FC<IPageProps> = (props: IPageProps) => {
	if (!props.data) {
		return null
	}

	return (
		<Container>
			<Header>{props.data.details.header}</Header>
			{props.data.content &&
				props.data.content.map((data: ISection) => {
					const items = Object.entries(data)
					return items.map((item, index) => <Section key={index} type={item[0]} data={item[1]} />)
				})}
		</Container>
	)
}

export const Header = styled.h2`
	font-family: 'Museo_Slab_500_2';
	font-size: 1.5em;
	padding: 20px 15%;

	@media (max-width: 1200px) {
		padding: 20px 8%;
	}

	&:first-child {
		padding-top: 0;
	}
`

const Container = styled.div`
	height: 100%;
	width: 100%;
	padding-bottom: 5%;

	opacity: 0;
	animation: 1s ease-out 0.5s ${AnimateIn};
	animation-fill-mode: forwards;

	/* The paragraph immediately after a header does not need to have padding-top (this is covered by the header) */
	${Header} + p {
		padding-top: 0;
	}
`
