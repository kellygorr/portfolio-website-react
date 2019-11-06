import { IProject, FileType } from '../IProject'
import { TagType } from '../IProject'
import thumbnail from '../../../assets/thumbnails/47.jpg'
import thumbnail2 from '../../../assets/thumbnails/34.jpg'

import img1 from '../../../assets/images/preview-app-link-generator/previewApp1.jpg'
import img2 from '../../../assets/images/preview-app-link-generator/previewApp4.jpg'
import img3 from '../../../assets/images/preview-app-link-generator/previewApp6.jpg'
import img4 from '../../../assets/images/preview-app-link-generator/previewApp3.jpg'
import img5 from '../../../assets/images/preview-app-link-generator/previewApp2.jpg'

export const previewAppLinkGenerator: IProject = {
	title: 'Preview App Link Generator',
	subtitle: 'subtitle',
	thumbnail: thumbnail,
	tags: [TagType.XboxOne],
	content: [
		{
			header: 'Video App Link Creator',
			slideshow: [
				{
					img: img1,
					caption: 'Starting screen',
				},
				{
					img: img2,
					caption: 'Error messages are included to help users include all the required information',
				},
				{
					img: img3,
					caption: 'Link generated successfully',
				},
				{
					img: img4,
					caption: 'Information section',
				},
				{
					img: img5,
					caption: 'Just for fun',
				},
			],
		},
		{
			header: 'Overview',
			body:
				'This tool creates a link that is used on the Xbox One to launch and play videos with the Xbox’s video player (the Preview App).  The tool can string together multiple videos to play in a row and add video titles, CTA buttons, and redirect links.',
		},
		{
			header: 'Role',
			body:
				"I was in charge of designing and creating the tool.  In the original version I used AngularJS's two-way data binding so the user could live-edit and create the link (This version is available to test below). In the final version I removed the live-edit functionality and instead used a ‘generate link’ button, because I didn't want users to have access to an unfinished link.Internal details have been removed.",
		},
		{
			header: 'Details',
			body: 'AngularJS (v1.0 only), jQuery, JSON, HTML, CSS',
		},
		{
			header: 'View Website',
			attachments: [
				{
					img: thumbnail2,
					caption: 'v1.0',
					type: FileType.Link,
					source: 'sites/previewApp/',
				},
			],
		},
	],
}
