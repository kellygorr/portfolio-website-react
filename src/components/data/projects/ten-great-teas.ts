import { IProject } from "../IProject";
import {TagType} from "../IProject"
import thumbnail from '../../../assets/thumbnail/2.jpg';

export const tenGreatTeas: IProject = {
    title: 'Ten Great Teas',
    subtitle: 'subtitle',
    thumbnail: thumbnail,
    tags: [TagType.XboxOne],
    content:[
        {
            "header":"Ten Great Teas",
            "slideshow":[
                {
                    "img":"img/large2a.jpg",
                    "caption":"Main screen"
                },
                {
                    "img":"img/large2b.jpg",
                    "caption":"Main screen with selected state"
                },
                {
                    "img":"img/large2c.jpg",
                    "caption":"Tea details screen"
                }
            ]
        },
        {
            "header":"Overview",
            "body":"Interface design for an interactive tea map for Tazo tea."
        },
        {
            "header":"Details",
            "body":"Illustrator"
        }
    ]
}