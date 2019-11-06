import { IProject, FileType } from '../IProject'
import { TagType } from '../IProject'
import thumbnail from '../../../assets/thumbnails/49.jpg'
import thumbnail2 from '../../../assets/thumbnails/65.jpg'

import video1 from '../../../assets/videos/starWars.mp4'

import img1 from '../../../assets/images/star-wars/starwars1.png'
import img2 from '../../../assets/images/star-wars/starwars2.png'
import img3 from '../../../assets/images/star-wars/starwars3.png'
import img4 from '../../../assets/images/star-wars/starwars4.jpg'
import img5 from '../../../assets/images/star-wars/starwars5.png'

export const starWars: IProject = {
	title: 'Star Wars Xbox Promotion',
	subtitle: 'subtitle',
	thumbnail: thumbnail,
	tags: [TagType.XboxOne],
	content: [
		{
			header: 'Star Wars Xbox Promotion',
			slideshow: [
				{
					img: img1,
					caption: '',
				},
				{
					img: img2,
					caption: 'Slideshow',
				},
				{
					img: img3,
					caption: 'Billboard promotion',
				},
				{
					img: img4,
					caption: "Kotaku article (<a href='http://kotaku.com/the-force-awakens-on-game-consoles-1768991827#'>full</a>)",
				},
				{
					img: img5,
					caption: 'Placement on the Xbox Dashboard',
				},
			],
		},
		{
			header: 'Role',
			body:
				'A promotion for Star Wars Movies that was featured in a Kotaku article.  I build the homepage, and inner pages (excluding the product pages and video app), and added the content and localized text.',
		},
		{
			header: 'Details',
			body:
				'Platform: Xbox One with Kinect (voice and gesture)<br/>Placement: Featured on the Xbox One dashboard home page, Movie & TV, and Gold Lounge<br/>Countries: United States, Canada (EN-CA & FR-CA), United Kingdom, Mexico, Brazil, France, Spain, Germany<br/>Dates: April 2016<br/>jQuery/Javascript, JSON, HTML, CSS<br/> Designer: Eric Embry',
		},
		{
			header: 'Xbox One Video Capture',
			attachments: [
				{
					img: thumbnail2,
					caption: 'Star Wars Promotion',
					type: FileType.Video,
					source: video1,
				},
			],
		},
	],
}
