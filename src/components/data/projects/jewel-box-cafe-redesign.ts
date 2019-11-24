import { IProject, FileType, TagType, SkillType, ToolType } from '../IProject'

const thumbnail = 'https://www.kellygorr.com/assets/thumbnails/5.jpg'

const img1 = 'https://www.kellygorr.com/assets/images/jewel-box-cafe-redesign/large5.jpg'

export const jewelBoxCafe: IProject = {
	title: 'Jewel Box Cafe Redesign',
	subtitle: 'subtitle',
	thumbnail: thumbnail,
	tags: [TagType.Website],
	content: [
		{
			slideshow: [
				{
					img: img1,
					source: 'sites/type_website/',
				},
			],
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
		{
			header: 'View Website',
			attachments: [
				{
					title: 'Demo',
					subtitle: '(Navigation only)',
					thumbnail: thumbnail,
					file: {
						type: FileType.Link,
						source: 'sites/type_website/',
					},
				},
			],
		},
	],
}
