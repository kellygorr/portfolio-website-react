import { IProject } from '../IProject'
import { TagType } from '../IProject'
import thumbnail from '../../../assets/thumbnail/53.jpg'

export const calculatorTool: IProject = {
	title: 'Calculator Tool',
	subtitle: 'subtitle',
	thumbnail: thumbnail,
	tags: [TagType.XboxOne],
	content: [
		{
			header: 'Calculator',
			slideshow: [
				{
					img: 'img/calctool/itemcalc1.jpg',
					caption: '',
				},
				{
					img: 'img/calctool/itemcalc2.jpg',
					caption: '',
				},
				{
					img: 'img/calctool/itemcalc3.jpg',
					caption: '',
				},
				{
					img: 'img/calctool/itemcalc4.jpg',
					caption: 'Items successfully calculated',
				},
				{
					img: 'img/calctool/itemcalc5.jpg',
					caption: 'One of the error messages',
				},
				{
					img: 'img/calctool/itemcalc7.jpg',
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
			body: 'Platform: Web<br/>JavaScript/jQuery, html, css',
		},
	],
}
