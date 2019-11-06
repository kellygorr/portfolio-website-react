import { IProject } from '../IProject'
import { TagType } from '../IProject'
import thumbnail from '../../../assets/thumbnails/42.jpg'

import img1 from '../../../assets/images/xbox-billboard-generator/billGen0.jpg'
import img2 from '../../../assets/images/xbox-billboard-generator/billGen2.jpg'
import img3 from '../../../assets/images/xbox-billboard-generator/billGen3.jpg'
import img4 from '../../../assets/images/xbox-billboard-generator/billGen4.jpg'
import img5 from '../../../assets/images/xbox-billboard-generator/billGen5.jpg'

export const xboxBillboardGenerator: IProject = {
	title: 'Xbox Billboard Generator',
	subtitle: 'subtitle',
	thumbnail: thumbnail,
	tags: [TagType.XboxOne],
	content: [
		{
			header: 'Xbox One Billboards',
			slideshow: [
				{
					img: img1,
					caption: 'Billboard generator tool (options condensed)',
				},
				{
					img: img2,
				},
				{
					img: img3,
				},
				{
					img: img4,
				},
				{
					img: img5,
				},
			],
		},
		{
			header: 'Overview',
			body:
				'Billboards are single page Xbox One promotions for games, TV, and more.  Hundreds of billboards have been published on the Xbox One since 2013.  They are completely customizable (buttons, text, background video/audio) and can integrate team plugins (preroll videos, slideshows, quizzes, etc.).  Billboard templates and the billboard generator were created to allow team designers to make billboards quickly on their own.',
		},
		{
			header: 'Billboard Generator Tool',
			body:
				'To further simplify the process of creating billboards I built a billboard generator tool for the designers. The tool allowed designers to create billboards using a CMS where they could upload images, make customizations, preview the billboard, save/edit different versions, and generate the completed billboard files.',
		},
		{
			header: 'Details',
			body: 'Platform: Web<br/>PHP, Ajax, jQuery/Javascript, JSON, HTML, CSS',
		},
	],
}
