import { IProject, FileType } from '../IProject'
import { TagType } from '../IProject'
import thumbnail from '../../../assets/thumbnails/23.jpg'

import img1 from '../../../assets/images/supersized-user-testing/large22e.jpg'
import img2 from '../../../assets/images/supersized-user-testing/large22a.jpg'
import img3 from '../../../assets/images/supersized-user-testing/large22b.jpg'
import img4 from '../../../assets/images/supersized-user-testing/large22c.jpg'
import img5 from '../../../assets/images/supersized-user-testing/large22d.jpg'

import pdf from '../../../assets/images/supersized-user-testing/kelly_gorr_user_testing_plan.pdf'

export const supersizedUserTesting: IProject = {
	title: 'Supersized! User Testing',
	subtitle: 'subtitle',
	thumbnail: thumbnail,
	tags: [TagType.XboxOne],
	content: [
		{
			header: 'Supersized! User Testing',
			slideshow: [
				{
					img: img1,
				},
				{
					img: img2,
					caption: 'Part 1 tested a paper prototype of the interface',
				},
				{
					img: img3,
					caption: 'I experimented with graph visualizations',
				},
				{
					img: img4,
				},
				{
					img: img5,
				},
			],
		},
		{
			header: 'Overview',
			body:
				'I designed a CMS for the Supersized! slideshow plugin and conducted small-scale user testing to test the interface. The full document with methods and conclusions is available below.  In part 1, volunteers experience the interface through a paper prototype, and the results are used to create an updated digital prototype that is used for testing in part 2.<br/>View the PDF below to see the full methods and conclusions.',
		},
		{
			header: 'Details',
			body: 'PDF created in InDesign',
		},
		{
			header: 'Methods and Results',
			attachments: [
				{
					type: FileType.Pdf,
					img: thumbnail,
					source: pdf,
				},
			],
		},
	],
}
