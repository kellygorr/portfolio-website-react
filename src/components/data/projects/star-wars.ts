import { IProject } from "../IProject";
import {TagType} from "../IProject"
import thumbnail from '../../../assets/thumbnail/49.jpg';

export const starWars: IProject = {
    title: 'Star Wars Xbox Promotion',
    subtitle: 'subtitle',
    thumbnail: thumbnail,
    tags: [TagType.XboxOne],
    content:[
        {
            "header":"Star Wars Xbox Promotion",
            "slideshow":[
                {
                    "img":"img/starwars1.png",
                    "caption":""
                },
                {
                    "img":"img/starwars2.png",
                    "caption":"Slideshow"
                },
                {
                    "img":"img/starwars3.png",
                    "caption":"Billboard promotion"
                },
                {
                    "img":"img/starwars4.jpg",
                    "caption":"Kotaku article (<a href='http://kotaku.com/the-force-awakens-on-game-consoles-1768991827#'>full</a>)"
                },
                {
                    "img":"img/starwars5.png",
                    "caption":"Placement on the Xbox Dashboard"
                }
            ]
        },
        {
            "header":"Role",
            "body":"A promotion for Star Wars Movies that was featured in a Kotaku article.  I build the homepage, and inner pages (excluding the product pages and video app), and added the content and localized text."
        },
        {
            "header":"Details",
            "body":"Platform: Xbox One with Kinect (voice and gesture)<br/>Placement: Featured on the Xbox One dashboard home page, Movie & TV, and Gold Lounge<br/>Countries: United States, Canada (EN-CA & FR-CA), United Kingdom, Mexico, Brazil, France, Spain, Germany<br/>Dates: April 2016<br/>jQuery/Javascript, JSON, HTML, CSS<br/> Designer: Eric Embry"
        },
        {
            "header":"Xbox One Video Capture",
            "label":"Star Wars Promotion",
            "desc":"",
            "img":"img/thumbnails/v2/49.jpg",
            "action":"video",
            "source":"media/video/starWars.mp4"
        }
    ]
}