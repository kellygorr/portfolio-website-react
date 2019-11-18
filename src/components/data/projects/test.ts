import { IProject } from '../IProject'
import { TagType } from '../IProject'

const thumbnail = 'https://www.kellygorr.com/assets/thumbnails/test.jpg'

// const img1 = 'https://www.kellygorr.com/assets/images/1.jpg'
const img2 = 'https://www.kellygorr.com/assets/images/2.jpg'
const img3 = 'https://www.kellygorr.com/assets/images/3.jpg'
const img4 = 'https://www.kellygorr.com/assets/images/4.jpg'
const img5 = 'https://www.kellygorr.com/assets/images/5.jpg'
const img6 = 'https://www.kellygorr.com/assets/images/6.jpg'

export const test: IProject = {
	title: 'Test',
	subtitle: 'subtitle',
	thumbnail: thumbnail,
	tags: [TagType.Xbox],
	content: [
		{
			slideshow: [
				{
					img: 'https://www.thewowstyle.com/wp-content/uploads/2015/03/Desktop-Wallpaper-HD2.jpg',
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
