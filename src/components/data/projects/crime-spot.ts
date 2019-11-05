import { IProject } from '../IProject'
import { TagType } from '../IProject'
import thumbnail from '../../../assets/thumbnail/22.jpg'

export const crimeSpot: IProject = {
	title: 'Crime Spot',
	subtitle: 'subtitle',
	thumbnail: thumbnail,
	tags: [TagType.XboxOne],
	content: [
		{
			header: 'Crime Spot',
			slideshow: [
				{
					img: 'img/crimespot_1.png',
					caption: 'Mobile and web',
				},
				{
					img: 'img/crimespot_2.png',
					caption: 'Start, settings, and map screens',
				},
				{
					img: 'img/crimespot_3.png',
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
			body: 'Tools: Illustrator, Photoshop, InDesign',
		},
		{
			header: 'Project Statement',
			label: '.pdf',
			desc: '',
			img: 'img/thumbnails/19.png',
			action: 'pdf',
			source: 'http://www.kellygorr.com/img/kelly_gorr_web_integration.pdf',
		},
	],
}
