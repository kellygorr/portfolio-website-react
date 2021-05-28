import * as React from 'react'
import { projects } from '../data'
import { Header } from './Page/Page'
import { IProject, relatedTags, TagType, SkillType } from '../data/IProject'
import { Gallery } from './Home/Home'
import styled from 'styled-components'
import { Tag, Thumbnail } from './Home'

interface ISearchProps {
	query: string
}

interface IProjectSearch extends IProject {
	query: string
}

const queryMatches = (query: string): IProjectSearch[] => {
	const tagMatches: IProject[] = projects.filter(
		(project: IProject) => project.details.tags && project.details.tags.find((tag) => tag.toLowerCase() === query.toLowerCase())
	)
	const skillMatches: IProject[] = projects.filter(
		(project: IProject) =>
			project.content &&
			project.content.find(
				(section) =>
					section.highlight &&
					section.highlight.find((item) => item.tags && item.tags.find((tag) => tag.toLowerCase() === query.toLowerCase()))
			)
	)
	const titleMatches: IProject[] = projects.filter(
		(project: IProject) => project.details.header.toLowerCase().indexOf(query.toLowerCase()) !== -1
	)

	const matches: IProject[] = removeDuplicates([...tagMatches, ...skillMatches, ...titleMatches])
	matches.forEach((match) => ((match as IProjectSearch).query = query))

	return matches as IProjectSearch[]
}

const removeDuplicates = (matches: IProject[]): IProject[] => matches.filter((match, index) => matches.indexOf(match) >= index)

const removeDuplicateTitles = (matches: IProjectSearch[]) =>
	matches.filter((item, pos, array) => array.map((mapItem) => mapItem.details['header']).indexOf(item.details['header']) === pos)

const relatedQueryTags = (query: string) => {
	let tags: any = relatedTags.filter((tags) => tags.find((tag) => tag.toLowerCase() === query.toLowerCase()))
	tags = removeDuplicates([].concat(...tags))
	return tags.filter((tag: TagType | SkillType) => tag !== query)
}

const relatedQueryMatches = (query: string): IProjectSearch[] => {
	const tags: (TagType | SkillType)[] = relatedQueryTags(query)
	return tags.map((tag) => queryMatches(tag)).flat(1) // Flatten IProjectSearch[][] to IProjectSearch[]
}

export const Search = (props: ISearchProps): JSX.Element => {
	const relatedMatches: IProjectSearch[] = relatedQueryMatches(props.query)
	let matches: IProjectSearch[] = queryMatches(props.query)
	matches = removeDuplicateTitles([...relatedMatches, ...matches])

	const searchResults: IProjectSearch[] = matches.filter((match) => match.query === props.query)
	const relatedResults: IProjectSearch[] = matches.filter((match) => match.query !== props.query)
	const relatedResultTags =
		relatedResults && relatedResults.map((project) => project.query).filter((value, index, self) => self.indexOf(value) === index)

	React.useEffect(() => {
		window.scrollTo(0, 0)
	}, [props.query])

	return (
		<>
			<Header style={{ paddingLeft: 0 }}>
				Results for {<Tag key={props.query} isLastTag={true} tag={props.query} isLinkDisabled={true} />}
				...
			</Header>
			{searchResults.length > 0 ? (
				<Gallery>
					{searchResults.map((project: IProjectSearch) => (
						<Thumbnail key={project.details.header} data={project.details} />
					))}
				</Gallery>
			) : (
				<Message>
					{props.query === SkillType.TypeScript || props.query === SkillType.React
						? `Sorry, no results. I have build many things using ${props.query} (including this website), but I haven't added any projects yet. `
						: 'Sorry, no results'}
				</Message>
			)}

			{relatedResults.length > 0 && (
				<>
					<Header style={{ paddingLeft: 0 }}>
						Related results [
						{relatedResultTags.map((tag, index) => (
							<Tag key={tag} isLastTag={tag ? index === relatedResultTags.length - 1 : false} tag={tag} />
						))}
						]...
					</Header>
					<Gallery>
						{relatedResults.map((project: IProjectSearch) => (
							<Thumbnail key={project.details.header} data={project.details} />
						))}
					</Gallery>
				</>
			)}
		</>
	)
}

const Message = styled.div`
	padding: 10px 5%;
`
