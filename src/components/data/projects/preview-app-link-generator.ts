import { IProject } from "../IProject";
import {TagType} from "../IProject"
import thumbnail from '../../../assets/thumbnail/47.jpg';

export const previewAppLinkGenerator: IProject = {
    title: 'Preview App Link Generator',
    subtitle: 'subtitle',
    thumbnail: thumbnail,
    tags: [TagType.XboxOne],
    content:[
        {
            "header":"Video App Link Creator",
            "slideshow":[
                {
                    "img":"img/previewApp1.jpg",
                    "caption":"Starting screen",
                    "source":""
                },
                {
                    "img":"img/previewApp4.jpg",
                    "caption":"Error messages are included to help users include all the required information",
                    "source":""
                },
                {
                    "img":"img/previewApp6.jpg",
                    "caption":"Link generated successfully",
                    "source":""
                },
                {
                    "img":"img/previewApp3.jpg",
                    "caption":"Information section",
                    "source":""
                },
                {
                    "img":"img/previewApp2.jpg",
                    "caption":"Just for fun",
                    "source":""
                }
            ]
        },
        {
            "header":"Overview",
            "body":"This tool creates a link that is used on the Xbox One to launch and play videos with the Xbox’s video player (the Preview App).  The tool can string together multiple videos to play in a row and add video titles, CTA buttons, and redirect links."
        },
        {
            "header":"Role",
            "body":"I was in charge of designing and creating the tool.  In the original version I used AngularJS's two-way data binding so the user could live-edit and create the link (This version is available to test below). In the final version I removed the live-edit functionality and instead used a ‘generate link’ button, because I didn't want users to have access to an unfinished link.Internal details have been removed."
        },
        {
            "header":"Details",
            "body":"AngularJS (v1.0 only), jQuery, JSON, HTML, CSS"
        },
        {
            "header":"View Website",
            "label":"v1.0",
            "desc":"",
            "img":"img/thumbnails/v2/34.jpg",
            "action":"link",
            "source":"sites/previewApp/"
        }
    ]
}