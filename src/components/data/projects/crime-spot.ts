import { IProject, FileType } from '../IProject'
import { TagType } from '../IProject'
import thumbnail from '../../../assets/thumbnails/22.jpg'
import thumbnail2 from '../../../assets/thumbnails/19.png'

import img1 from '../../../assets/images/crime-spot/crimespot_1.png'
import img2 from '../../../assets/images/crime-spot/crimespot_2.png'
import img3 from '../../../assets/images/crime-spot/crimespot_3.png'

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
			body: 'Tools: Illustrator, Photoshop, InDesign',
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
