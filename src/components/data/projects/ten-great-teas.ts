import { IProject } from '../IProject'
import { TagType } from '../IProject'
import thumbnail from '../../../assets/thumbnails/2.jpg'

import img1 from '../../../assets/images/ten-great-teas/large2a.jpg'
import img2 from '../../../assets/images/ten-great-teas/large2b.jpg'
import img3 from '../../../assets/images/ten-great-teas/large2c.jpg'

export const tenGreatTeas: IProject = {
	title: 'Ten Great Teas',
	subtitle: 'subtitle',
	thumbnail: thumbnail,
	tags: [TagType.XboxOne],
	content: [
		{
			header: 'Ten Great Teas',
			slideshow: [
				{
					img: img1,
					caption: 'Main screen',
				},
				{
					img: img2,
					caption: 'Main screen with selected state',
				},
				{
					img: img3,
					caption: 'Tea details screen',
				},
			],
		},
		{
			header: 'Overview',
			body: 'Interface design for an interactive tea map for Tazo tea.',
		},
		{
			header: 'Details',
			body: 'Illustrator',
		},
	],
}
