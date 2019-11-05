import { IProject } from '../IProject'
import { TagType } from '../IProject'
import thumbnail from '../../../assets/thumbnail/26.jpg'

export const welcomeEmails: IProject = {
	title: 'Welcome Emails',
	subtitle: 'subtitle',
	thumbnail: thumbnail,
	tags: [TagType.XboxOne],
	content: [
		{
			header: 'Welcome Emails',
			slideshow: [
				{
					img: 'img/email1.jpg',
					caption: '',
				},
				{
					img: 'img/email2.jpg',
					caption: '',
				},
				{
					img: 'img/email3.jpg',
					caption: '',
				},
			],
		},
		{
			header: 'Overview',
			body:
				'These are welcome emails that I built and designed for an email marketing drip program. They were compatible with multiple devices and email programs. The body copy in the images has been altered from the original version.',
		},
		{
			header: 'Details',
			body: 'Tools: Photoshop<br> Images: istockphoto.com',
		},
	],
}
