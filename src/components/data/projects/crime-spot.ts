import { IProject, FileType, TagType, ToolType } from '../IProject'

const thumbnail = 'https://www.kellygorr.com/assets/thumbnails/22.jpg'
const thumbnail2 = 'https://www.kellygorr.com/assets/thumbnails/19.png'

const img1 = 'https://www.kellygorr.com/assets/images/crime-spot/crimespot_1.png'
const img2 = 'https://www.kellygorr.com/assets/images/crime-spot/crimespot_2.png'
const img3 = 'https://www.kellygorr.com/assets/images/crime-spot/crimespot_3.png'

export const crimeSpot: IProject = {
	title: 'Crime Spot',
	subtitle: 'subtitle',
	thumbnail: thumbnail,
	tags: [TagType.Website, TagType.Mobile],
	content: [
		{
			slideshow: [
				{
					img: img1,
					caption: 'Mobile and web',
				},
				{
					img: img2,
					caption: 'Start, settings, and map screens',
				},
				{
					img: img3,
					caption: "Map filtered by 'assualt' and 'homicide', map with selection, and news details",
				},
			],
		},
		{
			header: 'Overview',
			body:
				'Mobile/web design for an entertainment app that allows people to track real life homicides and other violent crime in their city.',
		},
		{
			header: 'Details',
			highlight: [
				{
					header: 'Tools',
					tags: [ToolType.Illustrator, ToolType.Photoshop, ToolType.InDesign],
				},
			],
		},
		{
			header: 'Project Statement',
			attachments: [
				{
					type: FileType.Pdf,
					img: thumbnail2,
					source: 'http://www.kellygorr.com/img/kelly_gorr_web_integration.pdf',
				},
			],
		},
	],
}
