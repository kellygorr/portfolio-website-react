import { IProject, FileType } from '../IProject'
import { TagType } from '../IProject'
import thumbnail from '../../../assets/thumbnails/4.jpg'
import thumbnail2 from '../../../assets/thumbnails/19.jpg'

import img1 from '../../../assets/images/malaria-infographic/large4a.jpg'
import pdf from '../../../assets/images/malaria-infographic/research_based_design.pdf'

export const malariaInfographic: IProject = {
	title: 'Malaria Infographic',
	subtitle: 'subtitle',
	thumbnail: thumbnail,
	tags: [TagType.XboxOne],
	content: [
		{
			header: 'Malaria Infographic',
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
			body: 'Tools: Illustrator',
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
