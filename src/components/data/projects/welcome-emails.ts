import { IProject, ToolType, SkillType } from '../IProject'
import { LoadingColor } from '../../../GlobalStyles'

const thumbnail = 'https://www.kellygorr.com/assets/thumbnails/26.jpg'

const img1 = 'https://www.kellygorr.com/assets/images/welcome-emails/email1.jpg'
const img2 = 'https://www.kellygorr.com/assets/images/welcome-emails/email2.jpg'
const img3 = 'https://www.kellygorr.com/assets/images/welcome-emails/email3.jpg'

export const welcomeEmails: IProject = {
	details: {
		header: 'Welcome Emails',
		thumbnail: thumbnail,
	},
	content: [
		{
			slideshow: {
				activeColor: LoadingColor,
				slides: [
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
		},
		{
			header: 'Overview',
			body:
				'These are welcome emails that I built and designed for an email marketing drip program. They were compatible with multiple devices and email programs. The body copy in the images has been altered from the original version.',
		},
		{
			header: 'Details',
			highlight: [
				{
					header: 'Skills',
					tags: [SkillType.HTML, SkillType.CSS],
				},
				{
					header: 'Tools',
					tags: [ToolType.Photoshop],
				},
				{
					header: 'Images',
					body: 'istockphoto.com',
				},
			],
		},
	],
}
