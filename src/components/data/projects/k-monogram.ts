import { IProject, ToolType } from '../IProject'

const thumbnail = process.env.REACT_APP_IMAGE_URL + 'assets/thumbnails/3.jpg'

const img1 = process.env.REACT_APP_IMAGE_URL + 'assets/images/k-monogram/large6.jpg'

export const kMonogram: IProject = {
	details: {
		header: 'K Monogram',
		thumbnail: thumbnail,
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
