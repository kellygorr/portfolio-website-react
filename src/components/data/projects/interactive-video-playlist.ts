import { IProject, FileType } from '../IProject'
import { TagType } from '../IProject'
import thumbnail from '../../../assets/thumbnails/66.jpg'
import thumbnail2 from '../../../assets/thumbnails/65.jpg'
import thumbnail3 from '../../../assets/thumbnails/30.jpg'

// import video1 from '../../../assets/videos/summerME.mp4'
import video2 from '../../../assets/videos/slipknotXboxI.mp4'

import img1 from '../../../assets/images/interactive-video-playlist/summer5.png'
import img2 from '../../../assets/images/interactive-video-playlist/summer8.png'
import img3 from '../../../assets/images/interactive-video-playlist/summer1.png'
import img4 from '../../../assets/images/interactive-video-playlist/summer6.png'
import img5 from '../../../assets/images/interactive-video-playlist/summer3.png'
import img6 from '../../../assets/images/interactive-video-playlist/summer4.png'
import img7 from '../../../assets/images/interactive-video-playlist/summer7.png'
import img8 from '../../../assets/images/interactive-video-playlist/summer14.png'
import img9 from '../../../assets/images/interactive-video-playlist/summer11.png'
import img10 from '../../../assets/images/interactive-video-playlist/summer15.png'
import img11 from '../../../assets/images/interactive-video-playlist/summer12.png'

import img12 from '../../../assets/images/interactive-video-playlist/itv1.jpg'
import img13 from '../../../assets/images/interactive-video-playlist/itv3.jpg'
import img14 from '../../../assets/images/interactive-video-playlist/itv4.jpg'
import img15 from '../../../assets/images/interactive-video-playlist/itv5.jpg'

export const interactiveVideoPlaylist: IProject = {
	title: 'Interactive Video Playlist',
	subtitle: 'subtitle',
	thumbnail: thumbnail,
	tags: [TagType.XboxOne],
	content: [
		{
			header: 'Interactive Video Playlist',
			slideshow: [
				{
					img: img1,
					caption: 'Video clips, like this intro clip, are organized/ordered with the playlist',
				},
				{
					img: img2,
					caption: 'Polls and quizzes are added dynamically over the video',
				},
				{
					img: img3,
				},
				{
					img: img4,
					caption: 'Buttons can link to full length videos or purchasable content',
				},
				{
					img: img5,
					caption: 'The dynamic content is customizable',
				},
				{
					img: img6,
				},
				{
					img: img7,
					caption: 'Joke xbox achievement image',
				},
				{
					img: img8,
					caption: 'A fallback quiz can be inserted if the polling database is unavailable',
				},
				{
					img: img9,
				},
				{
					img: img10,
				},
				{
					img: img11,
				},
			],
		},
		{
			header: 'Overview',
			body:
				'Xbox Interactive is a JavaScript app that creates an interactive video playlist. It plays through videos that are customized with interactive pop-in content that have timed appearances throughout the video. The content can be trivia, quizzes, polls, and more. One use for this plugin could be timing pop-in content over a single video, or it could be used to create a video playlist.',
		},
		{
			header: 'Role',
			body:
				'Before building the app I created prototypes that broke down some of the key functionality.  Afterwards I started making the app while working with team designers to put together a large-scale project that would show off all the capabilities of the new technology.  The idea was to have a monthly show on the Xbox where users could watch music videos and viral content that were popular during the month.  The users could purchase the videos, learn interesting facts about them, and play along with polls and quizzes.  For the first show we created a playlists of summer videos.  With the finished app I organized the videos, created the pop-in content (each with custom effects and styles), and added a timestamp to each piece of pop-in content to mark where each would appear over the videos (I built the app to also allow for the timing of the content to be automated).  The project was completed but never launched on the Xbox.',
		},
		{
			header: 'Details',
			body:
				'Platform: Xbox One with Kinect (voice and gesture)<br/>Countries: United States, Canada<br/>Dates: Aug. 2014<br/>Designers: Bruce Warren, Jacqueline Montplaisir',
		},
		{
			header: 'Xbox One Video Capture',
			attachments: [
				{
					img: thumbnail2,
					caption: 'Summer Playlist',
					desc: 'Interactive video playlist',
					type: FileType.Video,
					source: 'video1',
				},
			],
		},
		{
			header: 'Interactive Slipknot Music Video',
			slideshow: [
				{
					img: img12,
					caption: 'Quiz',
				},
				{
					img: img13,
					caption: 'Fact/trivia',
				},
				{
					img: img14,
					caption: 'Poll',
				},
				{
					img: img15,
					caption: 'Two button billboard with T&C button',
				},
			],
		},
		{
			header: 'Overview',
			body:
				"For the premiere of Slipknot's music video, for ‘The Devil In I’, Xbox wanted to give fans a unique experience.  Our team decided to use the interactive video playlist app that I built to add facts, quizzes, and polls, over the music video.  The team had five days to come up with questions, design the project, and decide how the content should be spaced over the video.  I used the app to organize the videos, and create and style the content (polls/quizzes/facts). (The project is below… watch if you dare).",
		},
		{
			header: 'Details',
			body:
				'Platform: Xbox One with Kinect (voice and gesture)<br/>Placement: Featured on the Xbox One dashboard home page and games section<br/>Countries: United States, Canada<br/>Dates: Sept. 2014<br/>Designer: James Aparis',
		},
		{
			header: 'Xbox One Video Capture',
			attachments: [
				{
					img: thumbnail3,
					caption: 'Slipknot',
					desc: 'Interactive music video',
					type: FileType.Video,
					source: video2,
				},
			],
		},
	],
}
