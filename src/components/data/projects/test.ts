import { IProject } from '../IProject'
import { TagType } from '../IProject'
import thumbnail from '../../../assets/thumbnails/test.jpg'

import img1 from '../../../assets/images/1.jpg'
import img2 from '../../../assets/images/2.jpg'
import img3 from '../../../assets/images/3.jpg'
import img4 from '../../../assets/images/4.jpg'
import img5 from '../../../assets/images/5.jpg'
import img6 from '../../../assets/images/6.jpg'

export const test: IProject = {
	title: 'Test',
	subtitle: 'subtitle',
	thumbnail: thumbnail,
	tags: [TagType.XboxOne],
	content: [
		{
			slideshow: [
				{
					img: img1,
					caption: 'Text',
				},
				{
					img: img2,
					caption: 'Text 2',
				},
				{
					img: img3,
					caption: 'Text 3',
				},
				{
					img: img4,
					caption: 'Text 4',
				},
				{
					img: img5,
					caption: 'Text 5',
				},
				{
					img: img6,
					caption: 'Text 6',
				},
			],
		},
	],
}
