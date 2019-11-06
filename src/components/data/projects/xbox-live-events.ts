import { IProject, FileType } from '../IProject'
import { TagType } from '../IProject'
import thumbnail from '../../../assets/thumbnails/55.jpg'
import thumbnail2 from '../../../assets/thumbnails/51.jpg'
import thumbnail3 from '../../../assets/thumbnails/58.jpg'
import thumbnail4 from '../../../assets/thumbnails/61.jpg'
import thumbnail5 from '../../../assets/thumbnails/63.jpg'

import img1 from '../../../assets/images/xbox-live-events/xlei1.png'
import img2 from '../../../assets/images/xbox-live-events/E32.jpg'
import img3 from '../../../assets/images/xbox-live-events/TGA1.jpg'
import img4 from '../../../assets/images/xbox-live-events/TGA2.jpg'
import img5 from '../../../assets/images/xbox-live-events/TGA4.jpg'
import img6 from '../../../assets/images/xbox-live-events/TGA9.jpg'
import img7 from '../../../assets/images/xbox-live-events/TGA7.jpg'
import img8 from '../../../assets/images/xbox-live-events/TGA5.jpg'
import img9 from '../../../assets/images/xbox-live-events/TGA6.jpg'
import img10 from '../../../assets/images/xbox-live-events/TGA8.jpg'

import img11 from '../../../assets/images/xbox-live-events/Gamescom11.jpg'
import img12 from '../../../assets/images/xbox-live-events/Gamescom1.jpg'
import img13 from '../../../assets/images/xbox-live-events/Gamescom5.jpg'
import img14 from '../../../assets/images/xbox-live-events/Gamescom6.jpg'
import img15 from '../../../assets/images/xbox-live-events/Gamescom10.jpg'
import img16 from '../../../assets/images/xbox-live-events/Gamescom12.jpg'
import img17 from '../../../assets/images/xbox-live-events/Gamescom3.png'

import img18 from '../../../assets/images/xbox-live-events/E31.jpg'
import img19 from '../../../assets/images/xbox-live-events/E32.jpg'

import img20 from '../../../assets/images/xbox-live-events/CODLive4.png'
import img21 from '../../../assets/images/xbox-live-events/CODLive.jpg'
import img22 from '../../../assets/images/xbox-live-events/CODLive2.jpg'
import img23 from '../../../assets/images/xbox-live-events/CODLive5.png'

import video1 from '../../../assets/videos/TGAPromo.mp4'
import video2 from '../../../assets/videos/TGAscreencapture.mp4'
import video3 from '../../../assets/videos/GCPromo.mp4'
import video4 from '../../../assets/videos/GCTombraiderQuiz.mp4'

export const xboxLiveEvents: IProject = {
	title: 'Xbox Live Events',
	subtitle: 'subtitle',
	thumbnail: thumbnail,
	tags: [TagType.XboxOne],
	content: [
		{
			header: 'Xbox Live Events on XLEi',
			slideshow: [
				{
					img: img1,
				},
				{
					img: img2,
				},
			],
		},
		{
			header: 'Overview',
			body:
				'The XLEi app was built by the Xbox Broadcast Service Team and is available on the Xbox One to play live events and video on-demand.  The main feature of the app is the interactive overlays it inserts over the video that lets users make purchases and take polls and quizzes while watching an event.  The app can also be used to create a game that lets users play along with events (and possibly win prizes) by keeping track of the user’s points and showing a leaderboard of the highest scores.',
		},
		{
			header: 'Role',
			body:
				"My role was to build the interactive overlays that were used during the live events.  I was chosen to collaborate with the Broadcast Team because I had built an interactive video playlist (<a href='index.html#interactive_playlist?plugin=project'>featured here</a>) that had similar interactivity.  I built in the animations and functionality of the overlays and hooked up the polls, quizzes, and leaderboards to the Broadcast Team’s database.",
		},
		{
			header: 'Details',
			body:
				'Platform: Xbox One<br/>Placement: Live events are featured and promoted on the Xbox One<br/>Countries: Varies by event<br/>Dates: 2014-present<br/>XLEi App and database: Xbox Broadcast Service Team<br/>Designer: Jacqueline Montplaisir',
		},
		{
			header: 'The Game Awards 2015',
			slideshow: [
				{
					img: img3,
				},
				{
					img: img4,
				},
				{
					img: img5,
					caption: 'Lower thirds leaderboard',
				},
				{
					img: img6,
					caption: 'Full screen leaderboard',
				},
				{
					img: img7,
					caption: 'Fullscreen user stats',
				},
				{
					img: img8,
					caption: 'Taco bell promo',
				},
				{
					img: img9,
					caption: 'Larry Hryb Game plug',
				},
				{
					img: img10,
					caption: 'Windows Central Game plug',
				},
			],
		},
		{
			header: 'Overview',
			body:
				'The Game Awards celebrates the best video games of the year.  For the 2015 event it was available to watch live on Xbox One(XLEi), Twitch, Playstation Network, Steam, YouTube, Kotaku, and more.  The XLEi app featured an exclusive game that let viewers play along with the event and it was promoted on YouTube, Twitter, and other media outlets and it was discussed during the live show.',
		},
		{
			header: 'Role',
			body:
				'I was in charge of building the interactive game and overlays. During the event players guessed who would win at the beginning each category and they received points based on how fast they answered correctly (once the winner was announced).  Throughout the event an overlay was inserted that showed the top ten highest scoring players, and there was also an overlay that was customized for each player to show them their total points and how fast and accurate they were guessing the winners.  At the end of the event a fullscreen leaderboard was inserted into the live broadcast that allowed users streaming on other devices to see who was at the top of the Xbox leaderboard.',
		},
		{
			header: 'Details',
			body: 'Platform: Xbox One<br/>Dates: Dec. 3, 2015<br/>Designer: Jacqueline Montplaisir',
		},
		{
			header: 'The Game Awards 2015',
			attachments: [
				{
					img: thumbnail2,
					caption: 'Exclusive Xbox game promo',
					type: FileType.Video,
					source: video1,
				},
			],
		},
		{
			attachments: [
				{
					img: thumbnail3,
					caption: 'The Game Awards Video Capture',
					type: FileType.Video,
					source: video2,
				},
			],
		},
		{
			header: 'Gamescom 2015: Xbox Daily Show',
			slideshow: [
				{
					img: img11,
				},
				{
					img: img12,
					caption: 'Preshow poll',
				},
				{
					img: img13,
					caption: 'Preshow quiz pt.1',
				},
				{
					img: img14,
					caption: 'Preshow quiz pt.2',
				},
				{
					img: img15,
					caption: 'Poll',
				},
				{
					img: img16,
				},
				{
					img: img17,
					caption: 'Xbox Gamescom promotion',
				},
			],
		},
		{
			header: 'Role',
			body:
				'The Xbox Daily Show held two live shows during Gamescom 2015.  I was in charge of building the interactive poll and quiz overlays for the event.  I also built the overlays for the preshow.',
		},
		{
			header: 'Details',
			body: 'Platform: Xbox One<br/>Dates: June 17, 2015 - June 18, 2015<br/>Designer: Jacqueline Montplaisir',
		},
		{
			header: 'Gamescom 2015',
			attachments: [
				{
					img: thumbnail4,
					caption: 'Daily Show and Interactive Promo',
					type: FileType.Video,
					source: video3,
				},
			],
		},
		{
			attachments: [
				{
					img: thumbnail5,
					caption: 'Tomb Raider Quiz',
					type: FileType.Video,
					source: video4,
				},
			],
		},
		{
			header: 'E3 2015: Xbox Daily Show',
			slideshow: [
				{
					img: img18,
				},
				{
					img: img19,
				},
			],
		},
		{
			header: 'Role',
			body:
				'The Xbox Daily Show held three live shows during E3 2015.  I was in charge of building the interactive poll and quiz overlays for the event.',
		},
		{
			header: 'Details',
			body: 'Platform: Xbox One<br/>Dates: June 17, 2015 - June 18, 2015<br/>Designer: Jacqueline Montplaisir',
		},
		{
			header: 'Call of Duty Championship 2015',
			slideshow: [
				{
					img: img20,
				},
				{
					img: img21,
				},
				{
					img: img22,
				},
				{
					img: img23,
					caption: 'Xbox Promotion',
				},
			],
		},
		{
			header: 'Role',
			body: 'This was the debut of the interactive overlays on the XLEi.  I was in charge of building the preshow polls.',
		},
		{
			header: 'Details',
			body: 'Platform: Xbox One<br/>Dates: March 29, 2015<br/>Designer: Efus Richman',
		},
	],
}
