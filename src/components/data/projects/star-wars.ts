import { IProject, FileType, SkillType } from '../IProject'
import { TagType } from '../IProject'

const thumbnail = 'https://www.kellygorr.com/assets/thumbnails/49.jpg'
const thumbnail2 = 'https://www.kellygorr.com/assets/thumbnails/65.jpg'

const video1 = 'https://www.kellygorr.com/assets/videos/starWars.mp4'

const img1 = 'https://www.kellygorr.com/assets/images/star-wars/starwars1.png'
const img2 = 'https://www.kellygorr.com/assets/images/star-wars/starwars2.png'
const img3 = 'https://www.kellygorr.com/assets/images/star-wars/starwars3.png'
const img4 = 'https://www.kellygorr.com/assets/images/star-wars/starwars4.jpg'
const img5 = 'https://www.kellygorr.com/assets/images/star-wars/starwars5.png'

export const starWars: IProject = {
	title: 'Star Wars Xbox Promotion',
	subtitle: 'subtitle',
	thumbnail: thumbnail,
	tags: [TagType.Xbox],
	content: [
		{
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
			highlight: [
				{
					header: 'Skills',
					tags: [SkillType.JQuery, SkillType.JSON, SkillType.HTML, SkillType.CSS],
				},
				{
					header: 'Platform and Accessories',
					tags: [TagType.Xbox, TagType.Kinect],
				},
				{
					header: 'Featured On',
					body: 'Xbox One dashboard home page, Movie & TV, and Gold Lounge',
				},
				{
					header: 'Countries',
					list: ['United States', 'Canada (EN-CA & FR-CA)', 'United Kingdom', 'Mexico', 'Brazil', 'France', 'Spain', 'Germany'],
				},
				{
					header: 'Dates',
					body: 'April 2016',
				},
				{
					header: 'Designer(s)',
					body: 'Eric Embry',
				},
				{
					header: 'Interaction Design',
					body: 'Kelly Gorr & Jana Sheehan',
				},
			],
		},
		{
			header: 'Xbox One Video Capture',
			attachments: [
				{
					title: 'Star Wars Promotion',
					subtitle: 'subtitle',
					thumbnail: thumbnail2,
					file: {
						type: FileType.Video,
						source: video1,
					},
				},
			],
		},
	],
}
