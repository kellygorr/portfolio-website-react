import { IProject } from "../IProject";
import {TagType} from "../IProject"
import thumbnail from '../../../assets/thumbnail/3.jpg';

export const kMonogram: IProject = {
    title: 'K Monogram',
    subtitle: 'subtitle',
    thumbnail: thumbnail,
    tags: [TagType.XboxOne],
    content:[
        {
            "header":"K Monogram",
            "slideshow":[
                {
                    "img":"img/large6.jpg",
                    "caption":"",
                    "height":"580px"
                }
            ]
        },
        {
            "header":"Overview",
            "body":"K monogram design."
        },
        {
            "header":"Details",
            "body":"Tools: Illustrator"
        }
    ]
}