import { IProject } from '../IProject'
import { TagType } from '../IProject'
import thumbnail from '../../../assets/thumbnail/66.jpg'

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
					img: 'img/summer5.png',
					caption: 'Video clips, like this intro clip, are organized/ordered with the playlist',
				},
				{
					img: 'img/summer8.png',
					caption: 'Polls and quizzes are added dynamically over the video',
				},
				{
					img: 'img/summer1.png',
					caption: '',
				},
				{
					img: 'img/summer6.png',
					caption: 'Buttons can link to full length videos or purchasable content',
				},
				{
					img: 'img/summer3.png',
					caption: 'The dynamic content is customizable',
				},
				{
					img: 'img/summer4.png',
					caption: '',
				},
				{
					img: 'img/summer7.png',
					caption: 'Joke xbox achievement image',
				},
				{
					img: 'img/summer14.png',
					caption: 'A fallback quiz can be inserted if the polling database is unavailable',
				},
				{
					img: 'img/summer11.png',
					caption: '',
				},
				{
					img: 'img/summer15.png',
					caption: '',
				},
				{
					img: 'img/summer12.png',
					caption: '',
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
			label: 'Summer Playlist',
			desc: 'Interactive video playlist',
			img: 'img/thumbnails/v2/65.jpg',
			action: 'video',
			source: 'media/video/summerME.mp4',
		},
		{
			title: 'Interactive Slipknot Music Video',
			slideshow: [
				{
					img: 'img/itv1.jpg',
					caption: 'Quiz',
				},
				{
					img: 'img/itv3.jpg',
					caption: 'Fact/trivia',
				},
				{
					img: 'img/itv4.jpg',
					caption: 'Poll',
				},
				{
					img: 'img/itv5.jpg',
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
			label: 'Slipknot',
			desc: 'Interactive music video',
			img: 'img/thumbnails/v2/30.jpg',
			action: 'video',
			source: 'media/video/slipknotXboxI.mp4',
		},
	],
}
