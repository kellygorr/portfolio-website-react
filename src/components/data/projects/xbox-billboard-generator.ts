import { IProject } from "../IProject";
import {TagType} from "../IProject"
import thumbnail from '../../../assets/thumbnail/42.jpg';

export const xboxBillboardGenerator: IProject = {
    title: 'Xbox Billboard Generator',
    subtitle: 'subtitle',
    thumbnail: thumbnail,
    tags: [TagType.XboxOne],
    content:[
        {
            "header":"Xbox One Billboards",
            "slideshow":[
                {
                    "img":"img/billGen0.jpg",
                    "caption":"Billboard generator tool (options condensed)"
                },
                {
                    "img":"img/billGen2.jpg",
                    "caption":""
                },
                {
                    "img":"img/billGen3.jpg",
                    "caption":""
                },
                {
                    "img":"img/billGen4.jpg",
                    "caption":""
                },
                {
                    "img":"img/billGen5.jpg",
                    "caption":""
                }
            ]
        },
        {
            "header":"Overview",
            "body":"Billboards are single page Xbox One promotions for games, TV, and more.  Hundreds of billboards have been published on the Xbox One since 2013.  They are completely customizable (buttons, text, background video/audio) and can integrate team plugins (preroll videos, slideshows, quizzes, etc.).  Billboard templates and the billboard generator were created to allow team designers to make billboards quickly on their own."
        },
        {
            "header":"Billboard Generator Tool",
            "body":"To further simplify the process of creating billboards I built a billboard generator tool for the designers. The tool allowed designers to create billboards using a CMS where they could upload images, make customizations, preview the billboard, save/edit different versions, and generate the completed billboard files."
        },
        {
            "header":"Details",
            "body":"Platform: Web<br/>PHP, Ajax, jQuery/Javascript, JSON, HTML, CSS"
        }
    ]
}