import { IProject } from '../IProject'
import { TagType } from '../IProject'
import thumbnail from '../../../assets/thumbnail/17.jpg'

export const earthquakeMap: IProject = {
	title: 'Earthquake Map',
	subtitle: 'subtitle',
	thumbnail: thumbnail,
	tags: [TagType.XboxOne],
	content: [
		{
			header: 'Earthquake Map',
			slideshow: [
				{
					img: 'img/large17.jpg',
					caption: '',
				},
			],
		},
		{
			header: 'Overview',
			body:
				'A website that mapped worldwide seismic activity that occurred in the past hour, day, week, and month. It also included a rotating list of recent seismic activity, and a comment section for discussion.  The website recorded a lot of interesting information including the underground nuclear tests done in North Korea.',
		},
		{
			header: 'Role',
			body:
				'I built and designed the website.  It was connected to a worldwide earthquake feed (no longer available) and I converted the latitude/longitude data I received for each earthquake to the corresponding x/y coordinates for the map I designed.',
		},
		{
			header: 'Details',
			body: 'Website:PHP, JSON, JavaScript/jQuery, MySQL, Ajax, HTML, CSS/CSS3<br/>Design: Illustrator, Photoshop',
		},
		{
			header: 'Code Sample',
			label: '.pdf',
			desc: '',
			img: 'img/thumbnails/21.jpg',
			action: 'pdf',
			source: 'http://www.kellygorr.com/img/Kelly_Gorr_Code_Sample.pdf',
		},
	],
}
