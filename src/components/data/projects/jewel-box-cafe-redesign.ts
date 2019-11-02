import { IProject } from "../IProject";
import {TagType} from "../IProject"
import thumbnail from '../../../assets/thumbnail/5.jpg';

export const jewelBoxCafe: IProject = {
    title: 'Jewel Box Cafe Redesign',
    subtitle: 'subtitle',
    thumbnail: thumbnail,
    tags: [TagType.XboxOne],
    content:[
        {
            "header":"Jewelbox Cafe Redesign",
            "slideshow":[
                {
                    "img":"img/large5.jpg",
                    "caption":"",
                    "source":"sites/type_website/",
                    "height":"580px"
                }
            ]
        },
        {
            "header":"Overview",
            "body":"Website redesign and navigation demo."
        },
        {
            "header":"Details",
            "body":"HTML, CSS, jQuery<br />Illustrator"
        },
        {
            "header":"View Website",
            "label":"Demo",
            "desc":"(Navigation only)",
            "img":"img/thumbnails/v2/5.jpg",
            "action":"link",
            "source":"sites/type_website/"
        }
    ]
}