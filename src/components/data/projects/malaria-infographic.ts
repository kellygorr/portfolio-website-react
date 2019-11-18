import { IProject, FileType, TagType, ToolType } from '../IProject'

const thumbnail = 'https://www.kellygorr.com/assets/thumbnails/4.jpg'
const thumbnail2 = 'https://www.kellygorr.com/assets/thumbnails/19.jpg'

const img1 = 'https://www.kellygorr.com/assets/images/malaria-infographic/large4a.jpg'
const pdf = 'https://www.kellygorr.com/assets/images/malaria-infographic/research_based_design.pdf'

export const malariaInfographic: IProject = {
	title: 'Malaria Infographic',
	subtitle: 'subtitle',
	thumbnail: thumbnail,
	tags: [TagType.Infographic],
	content: [
		{
			slideshow: [
				{
					img: img1,
				},
			],
		},
		{
			header: 'Overview',
			body: 'Malaria infographic design.',
		},
		{
			header: 'Details',
			highlight: [
				{
					header: 'Tools',
					tags: [ToolType.Illustrator],
				},
			],
		},
		{
			header: 'Project Statement',
			attachments: [
				{
					type: FileType.Pdf,
					img: thumbnail2,
					source: pdf,
				},
			],
		},
	],
}
