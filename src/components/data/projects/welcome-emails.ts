import { IProject } from '../IProject'
import { TagType } from '../IProject'
import thumbnail from '../../../assets/thumbnails/26.jpg'

import img1 from '../../../assets/images/welcome-emails/email1.jpg'
import img2 from '../../../assets/images/welcome-emails/email2.jpg'
import img3 from '../../../assets/images/welcome-emails/email3.jpg'

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
					img: img1,
				},
				{
					img: img2,
				},
				{
					img: img3,
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
