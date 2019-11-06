import { IProject, FileType } from '../IProject'
import { TagType } from '../IProject'
import thumbnail from '../../../assets/thumbnails/28.jpg'

import img1 from '../../../assets/images/xbox-billboards/billboard3.jpg'
import img2 from '../../../assets/images/xbox-billboards/billboard1.jpg'
import img3 from '../../../assets/images/xbox-billboards/billboard2.jpg'
import img4 from '../../../assets/images/xbox-billboards/ffSweepstakes.jpg'
import img5 from '../../../assets/images/xbox-billboards/X1-COMP-Billboard-GoldGameE3Promo-ES-MX-v2.jpg'
import img6 from '../../../assets/images/xbox-billboards/X1-FUT-Anniversary-billboard-MX-v2-COMP.jpg'

import video1 from '../../../assets/videos/iggyazalea.mp4'

export const xboxBillboards: IProject = {
	title: 'Xbox Promotional Billboards',
	subtitle: 'subtitle',
	thumbnail: thumbnail,
	tags: [TagType.XboxOne],
	content: [
		{
			header: 'Xbox One Billboards',
			slideshow: [
				{
					img: img1,
					caption: 'Two buttons with left aligned T&C button',
				},
				{
					img: img2,
					caption: 'Stacked buttons',
				},
				{
					img: img3,
					caption: 'One button template launches video',
				},
				{
					img: img4,
					caption: 'Sweepstakes billboard',
				},
				{
					img: img5,
					caption: 'Billboard with countdown clock',
				},
				{
					img: img6,
					caption: 'Fifa Points billboard',
				},
			],
		},
		{
			header: 'Overview',
			body:
				'Billboards are single page Xbox One promotions for games, TV, and more.  Hundreds of billboards have been published on the Xbox One since 2013.  They are completely customizable (buttons, text, background video/audio) and can integrate team plugins (preroll videos, slideshows, quizzes, etc.).  Billboard templates and the billboard generator were created to allow team designers to make billboards quickly on their own.',
		},
		{
			header: 'Billboard Templates',
			body:
				'The templates for the billboards were continuously evolving and being updated by myself and other members of my team.  I greatly expanded the available customization options adding:   Text customizations, stackable buttons, data tracking, and a scrollable terms and conditions overlay.',
		},
		{
			header: 'Details',
			body:
				'Platform: Xbox One with Kinect (voice and gesture)<br/>Template: jQuery/Javascript, JSON, HTML, CSS<br/>Billboard generator tool: PHP, Ajax, jQuery/Javascript, JSON, HTML, CSS<br/>Designed by: Xbox Programing Team designers<br/>Interaction Design: Kelly Gorr & Jana Sheehan',
		},
		{
			header: 'Xbox One Video Capture',
			attachments: [
				{
					img: 'img/thumbnails/v2/27.jpg',
					caption: 'Iggy Azalea Billboard',
					desc: 'Preroll video, billboard, terms and conditions popup',
					type: FileType.Video,
					source: video1,
				},
			],
		},
	],
}
