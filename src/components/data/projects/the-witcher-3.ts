import { IProject } from '../IProject'
import { TagType } from '../IProject'
import thumbnail from '../../../assets/thumbnail/60.jpg'

import img1 from '../../../assets/images/the-witcher-3/witcher2.jpg'
import img2 from '../../../assets/images/the-witcher-3/witcher3.jpg'
import img3 from '../../../assets/images/the-witcher-3/witcher5.jpg'
import img4 from '../../../assets/images/the-witcher-3/witcher6.jpg'
import img5 from '../../../assets/images/the-witcher-3/witcher7.jpg'
import img6 from '../../../assets/images/the-witcher-3/witcher9.jpg'
import img7 from '../../../assets/images/the-witcher-3/witcher10.jpg'
import img8 from '../../../assets/images/the-witcher-3/witcher11.jpg'
import img9 from '../../../assets/images/the-witcher-3/witcher12.jpg'
import img10 from '../../../assets/images/the-witcher-3/witchera.jpg'
import img11 from '../../../assets/images/the-witcher-3/witcher13.jpg'
import img12 from '../../../assets/images/the-witcher-3/witcher14.jpg'
import img13 from '../../../assets/images/the-witcher-3/witcher8.jpg'
import img14 from '../../../assets/images/the-witcher-3/witcher1.jpg'

import video1 from '../../../assets/videos/witcherPollOpt.mp4'

export const theWitcher3: IProject = {
	title: 'The Witcher 3 Xbox Promotion',
	subtitle: 'subtitle',
	thumbnail: thumbnail,
	tags: [TagType.XboxOne],
	content: [
		{
			slideshow: [
				{
					img: img1,
					caption: 'Main menu with animated background (Pre-launch)',
				},
				{
					img: img2,
					caption: 'Watch section shows subnav with trailers and gameplay',
				},
				{
					img: img3,
					caption: 'Character gallery with center carousel navigation.',
				},
				{
					img: img4,
					caption: 'Character details page',
				},
				{
					img: img5,
					caption: 'Image slideshow',
				},
				{
					img: img6,
					caption: 'Quiz with animated background',
				},
				{
					img: img7,
					caption: 'Quiz question',
				},
				{
					img: img8,
					caption: 'Quiz incorrect answer message',
				},
				{
					img: img9,
					caption: 'Quiz results page with animated background',
				},
				{
					img: img10,
					caption: 'Post-launch experience with new content',
				},
				{
					img: img11,
					caption: 'Post-launch poll',
				},
				{
					img: img12,
					caption: 'Post-launch monster bestiary',
				},
				{
					img: img13,
					caption: 'Quiz featured as a stand-alone experience on the Xbox One',
				},
				{
					img: img14,
					caption: 'Xbox One games section feature',
				},
			],
		},
		{
			header: 'Overview',
			body:
				'This large promotion provided games and content for fans to explore including: trailers and gameplay videos, character/weapon/monster galleries, quizzes, and a poll.  A pre-launch version ran before The Witcher 3 was released and a post-launch version ran that added new videos, content and games.',
		},
		{
			header: 'Role',
			body:
				'Skills: UI/UX, jQuery/JavaScript, Ajax, JSON, HTML, CSS<br/>  I was responsible for building the entire promotion, excluding the hunt section (built by a teammate).  This involved working through the UX of the main sections, galleries, and games with designers to ensure that the promotion would be easy to navigate on the Xbox, and to establish all the functionality I would need to code.  I built the promotion to be compatible with the Xbox controller and the Xbox Kinect (voice and gesture), and I also included custom user data tracking.  After coding the promotion I added all the assets (videos, images, sound), and text for each language.',
		},
		{
			header: 'Details',
			body:
				'Platform: Xbox One with Kinect (voice and gesture)<br/>Placement: Featured on the Xbox One dashboard home page and games section<br/>Countries: United States, Canada (EN-CA & FR-CA), United Kingdom, Mexico, Brazil, France, Spain, Germany<br/>Dates: May 2015 - June 2015<br/>Design Lead: Karlo Reyes<br/>Designers: Annie Marten & Eric Embry<br/>Interaction Design: Kelly Gorr & Jana Sheehan',
		},
		{
			header: 'Xbox One Video Capture',

			attachments: [
				{
					img: 'img/thumbnails/36.jpg',
					caption: 'Witcher 3 Poll',
					type: 'video',
					source: video1,
				},
			],
		},
	],
}
