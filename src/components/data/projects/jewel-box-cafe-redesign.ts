import { IProject, FileType } from '../IProject'
import { TagType } from '../IProject'
import thumbnail from '../../../assets/thumbnails/5.jpg'

import img1 from '../../../assets/images/jewel-box-cafe-redesign/large5.jpg'

export const jewelBoxCafe: IProject = {
	title: 'Jewel Box Cafe Redesign',
	subtitle: 'subtitle',
	thumbnail: thumbnail,
	tags: [TagType.XboxOne],
	content: [
		{
			header: 'Jewelbox Cafe Redesign',
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
			body: 'HTML, CSS, jQuery<br />Illustrator',
		},
		{
			header: 'View Website',
			attachments: [
				{
					img: thumbnail,
					caption: 'Demo',
					desc: '(Navigation only)',
					type: FileType.Link,
					source: 'sites/type_website/',
				},
			],
		},
	],
}
