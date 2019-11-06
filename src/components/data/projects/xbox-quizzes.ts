import { IProject, FileType } from '../IProject'
import { TagType } from '../IProject'
import thumbnail from '../../../assets/thumbnails/43.jpg'
import thumbnail2 from '../../../assets/thumbnails/46.jpg'
import thumbnail3 from '../../../assets/thumbnails/29.jpg'

import img1 from '../../../assets/images/xbox-quizzes/quiz7.png'
import img2 from '../../../assets/images/xbox-quizzes/quiz8.jpg'
import img3 from '../../../assets/images/xbox-quizzes/quiz4.jpg'
import img4 from '../../../assets/images/xbox-quizzes/quiz22.jpg'
import img5 from '../../../assets/images/xbox-quizzes/quiz11.jpg'
import img6 from '../../../assets/images/xbox-quizzes/quiz14.png'
import img7 from '../../../assets/images/xbox-quizzes/quiz13.png'
import img8 from '../../../assets/images/xbox-quizzes/quiz9.png'

import img9 from '../../../assets/images/xbox-quizzes/gotquiz1.jpg'
import img10 from '../../../assets/images/xbox-quizzes/gotquiz2.jpg'
import img11 from '../../../assets/images/xbox-quizzes/gotquiz3.jpg'

import video1 from '../../../assets/videos/fifaQuiz.mp4'
import video2 from '../../../assets/videos/gameofthronesquiz.mp4'

export const xboxQuizzes: IProject = {
	title: 'Xbox Quizzes',
	subtitle: 'subtitle',
	thumbnail: thumbnail,
	tags: [TagType.XboxOne],
	content: [
		{
			header: 'Xbox One Quizzes',
			slideshow: [
				{
					img: img1,
					caption: 'All quizzes have an intro and results page',
				},
				{
					img: img2,
					caption: 'Witcher 3: Four choice quiz',
				},
				{
					img: img3,
					caption: 'World Cup Quiz: Five choice quiz',
				},
				{
					img: img4,
					caption: 'South Park Quiz: Five choice quiz with multiple sounds for right/wrong answers',
				},
				{
					img: img5,
					caption: 'Witcher 3 Quiz: User got the question incorrect',
				},
				{
					img: img6,
					caption: 'Daredevil Quiz: User got the question correct',
				},
				{
					img: img7,
					caption: 'World Cup Quiz: Results page',
				},
				{
					img: img8,
					caption: 'Tomb Raider Quiz: Results page with community performance',
				},
			],
		},
		{
			header: 'Overview',
			body:
				'Quizzes on the Xbox One are very popular promotional tools, because they consistently have high user engagement.  Quizzes run as stand-alone promotions or in combination with larger projects (where they still preform very well).',
		},
		{
			header: 'Role',
			body:
				'I was tasked with building a quiz plugin that would be used to customize and run Xbox quizzes.  The intro page, question section, and results page were completely customizable, and options included video backgrounds, different result page layouts, and a vertical button layout.  The text fields for the body copy and buttons were flexible enough to accommodate varying text lengths so that a quiz could be translated into multiple languages without having to adjust the layout.',
		},
		{
			header: 'Details',
			body: 'Platform: Xbox One with Kinect (voice and gesture)<br/>Designers: Xbox Programing Team designers',
		},
		{
			header: 'Xbox One Video Capture',
			attachments: [
				{
					img: thumbnail2,
					caption: 'Fifa 16 quiz',
					type: FileType.Video,
					source: video1,
				},
			],
		},
		{
			header: 'Game of Thrones Quiz',
			slideshow: [
				{
					img: img9,
					caption: 'Intro page',
				},
				{
					img: img10,
					caption: 'Question section (The answer is Stallion)',
				},
				{
					img: img11,
					caption:
						"The results screen had 6 possible messages and sound clips from previous Game of Thrones seasons, based on the user's score.",
				},
			],
		},
		{
			header: 'Overview',
			body:
				'This was the first quiz released by Xbox on the Xbox One.  Between projects I had built a quiz prototype, and since my team focused on user engagement they recognized it would be a great promotional tool.  GOT was the perfect opportunity to use a quiz, and I was chosen to build it.  I coded the quiz and collaborated with the project’s designers on the functionality. The quiz was a big success with 90% of users finishing the quiz and over half of those people replaying it.',
		},
		{
			header: 'Details',
			body:
				'Platform: Xbox One with Kinect (voice and gesture)<br/>Placement: Featured on the Xbox One dashboard home page and games section<br/>Countries: United States, Canada<br/>Dates: May 2015 - June 2015<br/>jQuery/Javascript, JSON, HTML, CSS<br/> Design Lead: Todd Bohanna<br/> Designer: James Aparis',
		},
		{
			header: 'Xbox One Video Capture',
			attachments: [
				{
					img: thumbnail3,
					caption: 'Game of Thrones Quiz',
					type: FileType.Video,
					source: video2,
				},
			],
		},
	],
}
