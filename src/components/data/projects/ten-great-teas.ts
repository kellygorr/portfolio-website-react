import { IProject, TagType, ToolType } from '../IProject'
import { LoadingColor } from '../../../GlobalStyles'

const thumbnail = 'https://www.kellygorr.com/assets/thumbnails/2.jpg'

const img1 = 'https://www.kellygorr.com/assets/images/ten-great-teas/large2a.jpg'
const img2 = 'https://www.kellygorr.com/assets/images/ten-great-teas/large2b.jpg'
const img3 = 'https://www.kellygorr.com/assets/images/ten-great-teas/large2c.jpg'

export const tenGreatTeas: IProject = {
	details: {
		header: 'Ten Great Teas',
		thumbnail: thumbnail,
		tags: [TagType.Infographic],
	},
	content: [
		{
			slideshow: {
				activeColor: LoadingColor,
				slides: [
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
		},
		{
			header: 'Overview',
			body: 'Interface design for an interactive tea map for Tazo tea.',
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
