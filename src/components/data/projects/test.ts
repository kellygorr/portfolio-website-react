import { IProject } from '../IProject'
const thumbnail = process.env.REACT_APP_IMAGE_URL + 'assets/thumbnails/test.jpg'

// const img1 = process.env.REACT_APP_IMAGE_URL + 'assets/images/1.jpg'
const img2 = process.env.REACT_APP_IMAGE_URL + 'assets/images/2.jpg'
const img3 = process.env.REACT_APP_IMAGE_URL + 'assets/images/3.jpg'
const img4 = process.env.REACT_APP_IMAGE_URL + 'assets/images/4.jpg'
const img5 = process.env.REACT_APP_IMAGE_URL + 'assets/images/5.jpg'
const img6 = process.env.REACT_APP_IMAGE_URL + 'assets/images/6.jpg'

export const test: IProject = {
	details: {
		header: 'Test',
		thumbnail: thumbnail,
	},
	content: [
		{
			slideshow: {
				slides: [
					{
						img: 'https://www.thewowstyle.com/wp-content/uploads/2015/03/Desktop-Wallpaper-HD2.jpg',
						caption: 'Text',
						width: 800,
					},
					{
						img: img2,
						caption: 'Text 2',
					},
					{
						img: img3,
						caption: 'Text 3',
						width: 500,
					},
					{
						img: img4,
						caption: 'Text 4',
						width: 500,
					},
					{
						img: img5,
						caption: 'Text 5',
						width: 500,
					},
					{
						img: img6,
						caption: 'Text 6',
						width: 500,
					},
				],
			},
		},
	],
}
