import { IProject, FileType, SkillType } from '../IProject'
import { TagType } from '../IProject'

const thumbnail = 'https://www.kellygorr.com/assets/thumbnails/49.jpg'

const video1 = 'https://www.kellygorr.com/assets/videos/starWars.mp4'

const img1 = 'https://www.kellygorr.com/assets/images/star-wars/starwars1.png'
const img2 = 'https://www.kellygorr.com/assets/images/star-wars/starwars2.png'
const img3 = 'https://www.kellygorr.com/assets/images/star-wars/starwars3.png'
const img5 = 'https://www.kellygorr.com/assets/images/star-wars/starwars5.png'

export const starWars: IProject = {
	details: {
		header: 'Star Wars Xbox Promotion',
		thumbnail: thumbnail,
		tags: [TagType.Xbox],
	},
	content: [
		{
			slideshow: {
				slides: [
					{
						img: img1,
						file: {
							type: FileType.Video,
							source: video1,
						},
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
						img: img5,
						caption: 'Placement on the Xbox Dashboard',
					},
				],
			},
		},
		{
			header: 'Role',
			body:
				'I built a promotion for Star Wars that included a home page, slideshow, and promotional offer billboard. I also added all the assets and localized text.',
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
			header: 'Hype',
			attachments: [
				{
					header: 'Kotaku article',
					thumbnail: thumbnail,
					file: {
						type: FileType.Link,
						source: 'http://kotaku.com/the-force-awakens-on-game-consoles-1768991827#',
					},
				},
			],
		},
	],
}
