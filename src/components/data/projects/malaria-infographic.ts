import { IProject } from "../IProject";
import {TagType} from "../IProject"
import thumbnail from '../../../assets/thumbnail/4.jpg';

export const malariaInfographic: IProject = {
    title: 'Malaria Infographic',
    subtitle: 'subtitle',
    thumbnail: thumbnail,
    tags: [TagType.XboxOne],
    content:[
        {
            "header":"Malaria Infographic",
            "slideshow":[
                {
                    "img":"img/large4a.jpg",
                    "caption":""
                }
            ]
        },
        {
            "header":"Overview",
            "body":"Malaria infographic design."
        },
        {
            "header":"Details",
            "body":"Tools: Illustrator"
        },
        {
            "header":"Project Statement",
            "label":".pdf",
            "desc":"",
            "img":"img/thumbnails/19.jpg",
            "action":"pdf",
            "source":"img/research_based_design.pdf"
        }
    ]
}