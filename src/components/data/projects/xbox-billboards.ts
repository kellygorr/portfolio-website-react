import { IProject } from '../IProject'
import { TagType } from '../IProject'
import thumbnail from '../../../assets/thumbnail/28.jpg'

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
					img: 'img/billboard3.jpg',
					caption: 'Two buttons with left aligned T&C button',
				},
				{
					img: 'img/billboard1.jpg',
					caption: 'Stacked buttons',
				},
				{
					img: 'img/billboard2.jpg',
					caption: 'One button template launches video',
				},
				{
					img: 'img/ffSweepstakes.jpg',
					caption: 'Sweepstakes billboard',
				},
				{
					img: 'img/X1-COMP-Billboard-GoldGameE3Promo-ES-MX-v2.jpg',
					caption: 'Billboard with countdown clock',
				},
				{
					img: 'img/X1-FUT-Anniversary-billboard-MX-v2-COMP.jpg',
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
			label: 'Iggy Azalea Billboard',
			desc: 'Preroll video, billboard, terms and conditions popup',
			img: 'img/thumbnails/27.jpg',
			action: 'video',
			source: 'media/video/iggyazalea.mp4',
		},
	],
}
