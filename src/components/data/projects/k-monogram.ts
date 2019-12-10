import { IProject, ToolType } from '../IProject'

const thumbnail = 'https://www.kellygorr.com/assets/thumbnails/3.jpg'

const img1 = 'https://www.kellygorr.com/assets/images/k-monogram/large6.jpg'

export const kMonogram: IProject = {
	details: {
		header: 'K Monogram',
		thumbnail: thumbnail,
	},
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
			body: 'K monogram design.',
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
	],
}
