import { IProject, TagType, SkillType } from '../IProject'

const thumbnail = 'https://www.kellygorr.com/assets/thumbnails/53.jpg'

const img1 = 'https://www.kellygorr.com/assets/images/calculator-tool/itemcalc1.jpg'
const img2 = 'https://www.kellygorr.com/assets/images/calculator-tool/itemcalc2.jpg'
const img3 = 'https://www.kellygorr.com/assets/images/calculator-tool/itemcalc3.jpg'
const img4 = 'https://www.kellygorr.com/assets/images/calculator-tool/itemcalc4.jpg'
const img5 = 'https://www.kellygorr.com/assets/images/calculator-tool/itemcalc5.jpg'
const img6 = 'https://www.kellygorr.com/assets/images/calculator-tool/itemcalc7.jpg'

export const calculatorTool: IProject = {
	details: {
		header: 'Calculator Tool',
		thumbnail: thumbnail,
		tags: [TagType.Tooling, TagType.Website],
	},
	content: [
		{
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
				{
					img: img4,
					caption: 'Items successfully calculated',
				},
				{
					img: img5,
					caption: 'One of the error messages',
				},
				{
					img: img6,
					caption: 'Some messages from the fish',
				},
			],
		},
		{
			header: 'Overview',
			body:
				"This is an internal tool that I designed and built to help calculate/estimate the amount of pop-in items that can be added to the interactive video playlist (<a href='index.html#interactive_playlist?plugin=project'>featured here</a>, formerly called the dTosh plugin).  To help navigate the tool I included a ‘fishBot’ guide to give the user feedback, and to show the user an instruction page when clicked.  The tool also has error messaging so that the user includes all the required fields, and more prominent messaging when the user divides be zero or does other impossible calculations. As an unexpected twist for my teammates, I gave the fishBot a bad attitude to add some humor to the calculator.  If the user takes too long on the calculator page, the fish will die from boredom and have to be revived with a click.  Eventually the fishBot will not respond and will no longer help the user.",
		},

		{
			header: 'Details',
			highlight: [
				{
					header: 'Platform',
					tags: [TagType.Web],
				},
				{
					header: 'Skills',
					tags: [SkillType.UIUX, SkillType.JQuery, SkillType.HTML, SkillType.CSS],
				},
			],
		},
	],
}
