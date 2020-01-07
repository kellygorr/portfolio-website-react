import { IProject, FileType, TagType, ToolType } from '../IProject'

const thumbnail = process.env.REACT_APP_IMAGE_URL + 'assets/thumbnails/4.jpg'
const thumbnail2 = process.env.REACT_APP_IMAGE_URL + 'assets/thumbnails/19.jpg'

const img1 = process.env.REACT_APP_IMAGE_URL + 'assets/images/malaria-infographic/large4a.jpg'
const pdf = process.env.REACT_APP_IMAGE_URL + 'assets/images/malaria-infographic/research_based_design.pdf'

export const malariaInfographic: IProject = {
	details: {
		header: 'Malaria Infographic',
		thumbnail: thumbnail,
		tags: [TagType.Infographic],
	},
	content: [
		{
			slideshow: {
				slides: [
					{
						img: img1,
					},
				],
			},
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
					header: 'Research Based Design PDF',
					thumbnail: thumbnail2,
					file: {
						type: FileType.Pdf,
						source: pdf,
					},
				},
			],
		},
	],
}
