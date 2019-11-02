import { IProject } from "../IProject";
import {TagType} from "../IProject"
import thumbnail from '../../../assets/thumbnail/23.jpg';

export const supersizedUserTesting: IProject = {
    title: 'Supersized! User Testing',
    subtitle: 'subtitle',
    thumbnail: thumbnail,
    tags: [TagType.XboxOne],
    content:[
        {
            "header":"Supersized! User Testing",
            "slideshow":[
                {
                    "img":"img/large22e.jpg",
                    "caption":""
                },
                {
                    "img":"img/large22a.jpg",
                    "caption":"Part 1 tested a paper prototype of the interface"
                },
                {
                    "img":"img/large22b.jpg",
                    "caption":"I experimented with graph visualizations"
                },
                {
                    "img":"img/large22c.jpg",
                    "caption":""
                },
                {
                    "img":"img/large22d.jpg",
                    "caption":""
                }
            ]
        },
        {
            "header":"Overview",
            "body":"I designed a CMS for the Supersized! slideshow plugin and conducted small-scale user testing to test the interface. The full document with methods and conclusions is available below.  In part 1, volunteers experience the interface through a paper prototype, and the results are used to create an updated digital prototype that is used for testing in part 2.<br/>View the PDF below to see the full methods and conclusions."
        },
        {
            "header":"Details",
            "body":"PDF created in InDesign"
        },
        {
            "header":"Methods and Results",
            "label":".pdf",
            "desc":"",
            "img":"img/thumbnails/v2/23.jpg",
            "action":"link",
            "source":"img/kelly_gorr_user_testing_plan.pdf"
        }
    ]
}