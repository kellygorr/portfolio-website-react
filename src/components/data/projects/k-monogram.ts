import { IProject } from '../IProject'
import { TagType } from '../IProject'
import thumbnail from '../../../assets/thumbnails/3.jpg'

import img1 from '../../../assets/images/k-monogram/large6.jpg'

export const kMonogram: IProject = {
	title: 'K Monogram',
	subtitle: 'subtitle',
	thumbnail: thumbnail,
	tags: [TagType.XboxOne],
	content: [
		{
			header: 'K Monogram',
			slideshow: [
				{
					img: img1,
				},
			],
		},
		{
			header: 'Overview',
			body: 'K monogram design.',
		},
		{
			header: 'Details',
			body: 'Tools: Illustrator',
		},
	],
}
