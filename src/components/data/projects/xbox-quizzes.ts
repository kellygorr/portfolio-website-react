import { IProject, FileType, SkillType } from '../IProject'
import { TagType } from '../IProject'

const thumbnail = 'https://www.kellygorr.com/assets/thumbnails/43.jpg'
const thumbnail2 = 'https://www.kellygorr.com/assets/thumbnails/46.jpg'
const thumbnail3 = 'https://www.kellygorr.com/assets/thumbnails/29.jpg'

const img1 = 'https://www.kellygorr.com/assets/images/xbox-quizzes/quiz7.png'
const img2 = 'https://www.kellygorr.com/assets/images/xbox-quizzes/quiz8.jpg'
const img3 = 'https://www.kellygorr.com/assets/images/xbox-quizzes/quiz4.jpg'
const img4 = 'https://www.kellygorr.com/assets/images/xbox-quizzes/quiz22.jpg'
const img5 = 'https://www.kellygorr.com/assets/images/xbox-quizzes/quiz11.jpg'
const img6 = 'https://www.kellygorr.com/assets/images/xbox-quizzes/quiz14.png'
const img7 = 'https://www.kellygorr.com/assets/images/xbox-quizzes/quiz13.png'
const img8 = 'https://www.kellygorr.com/assets/images/xbox-quizzes/quiz9.png'

const img9 = 'https://www.kellygorr.com/assets/images/xbox-quizzes/gotquiz1.jpg'
const img10 = 'https://www.kellygorr.com/assets/images/xbox-quizzes/gotquiz2.jpg'
const img11 = 'https://www.kellygorr.com/assets/images/xbox-quizzes/gotquiz3.jpg'

const video1 = 'https://www.kellygorr.com/assets/videos/fifaQuiz.mp4'
const video2 = 'https://www.kellygorr.com/assets/videos/gameofthronesquiz.mp4'

export const xboxQuizzes: IProject = {
	title: 'Xbox Quizzes',
	subtitle: 'subtitle',
	thumbnail: thumbnail,
	tags: [TagType.Xbox, TagType.Plugin, TagType.Quiz],
	content: [
		{
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
			highlight: [
				{
					header: 'Platform',
					tags: [TagType.Xbox],
				},
				{
					header: 'Dates',
					body: 'March 29, 2015',
				},
				{
					header: 'Skills',
					tags: [SkillType.JQuery, SkillType.HTML, SkillType.CSS],
				},
				{
					header: 'Designer(s)',
					body: 'Xbox Programing Team designers',
				},
				{
					header: 'Interaction Design',
					body: 'Kelly Gorr',
				},
			],
		},
		{
			header: 'Xbox One Video Capture',
			attachments: [
				{
					title: 'Fifa 16 quiz',
					subtitle: 'subtitle',
					thumbnail: thumbnail2,
					file: {
						type: FileType.Video,
						source: video1,
					},
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
			highlight: [
				{
					header: 'Platform and Accessories',
					tags: [TagType.Xbox, TagType.Kinect],
				},
				{
					header: 'Featured On',
					body: 'Xbox One dashboard home page and games section',
				},
				{
					header: 'Countries',
					list: ['United States', 'Canada (EN-CA)'],
				},
				{
					header: 'Dates',
					body: 'May 2015 - June 2015',
				},
				{
					header: 'Skills',
					tags: [SkillType.JQuery, SkillType.JSON, SkillType.HTML, SkillType.CSS],
				},
				{
					header: 'Design Lead',
					body: 'Todd Bohanna',
				},
				{
					header: 'Designer(s)',
					body: 'James Aparis',
				},
				{
					header: 'Interaction Design',
					body: 'Kelly Gorr',
				},
			],
		},
		{
			header: 'Xbox One Video Capture',
			attachments: [
				{
					title: 'Game of Thrones Quiz',
					subtitle: 'subtitle',
					thumbnail: thumbnail3,
					file: {
						type: FileType.Video,
						source: video2,
					},
				},
			],
		},
	],
}
