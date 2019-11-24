import * as React from 'react'
import styled from 'styled-components/macro'
import { IProject, ISection } from './data/IProject'
import { Section } from './shared'

interface IPageProps {
	data: IProject | null
}

export const Page: React.FC<IPageProps> = (props: IPageProps) => {
	if (!props.data) {
		return null
	}

	return (
		<Container>
			<Header>{props.data.title}</Header>
			{props.data.content &&
				props.data.content.map((data: ISection) => {
					const items = Object.entries(data)
					return items.map((item, index) => <Section key={index} type={item[0]} data={item[1]} />)
				})}
		</Container>
	)
}

const Container = styled.div`
	height: 100%;
	width: 100%;
	padding-bottom: 5%;
`

export const Header = styled.h2`
	font-family: 'Museo_Slab_500_2';
	font-size: 1.5em;
	padding: 10px 5%;

	&:first-child {
		padding-top: 0;
	}
`
