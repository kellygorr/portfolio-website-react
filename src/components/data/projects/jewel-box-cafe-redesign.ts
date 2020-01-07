import { IProject, FileType, TagType, SkillType, ToolType } from '../IProject'

const thumbnail = process.env.REACT_APP_IMAGE_URL + 'assets/thumbnails/5.jpg'

const img1 = process.env.REACT_APP_IMAGE_URL + 'assets/images/jewel-box-cafe-redesign/large5.jpg'

export const jewelBoxCafe: IProject = {
	details: {
		header: 'Jewel Box Cafe Redesign',
		thumbnail: thumbnail,
		tags: [TagType.Website],
	},
	content: [
		{
			slideshow: {
				slides: [
					{
						img: img1,
						file: {
							type: FileType.Link,
							source: 'sites/type_website/',
						},
					},
				],
			},
		},
		{
			header: 'Overview',
			body: 'Website redesign and navigation demo.',
		},
		{
			header: 'Details',
			highlight: [
				{
					header: 'Skills',
					tags: [SkillType.JQuery, SkillType.HTML, SkillType.CSS],
				},
				{
					header: 'Tools',
					tags: [ToolType.Illustrator],
				},
			],
		},
	],
}
