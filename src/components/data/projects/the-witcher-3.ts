import { IProject } from "../IProject";
import {TagType} from "../IProject"
import thumbnail from '../../../assets/thumbnail/60.jpg';

export const theWitcher3: IProject = {
    title: 'The Witcher 3 Xbox Promotion',
    subtitle: 'subtitle',
    thumbnail: thumbnail,
    tags: [TagType.XboxOne],
    content:[
        {
            header:"The Witcher 3 Xbox Promotion",
            slideshow:[
                {
                    img:"img/witcher2.jpg",
                    caption:"Main menu with animated background (Pre-launch)"
                },
                {
                    img:"img/witcher3.jpg",
                    caption:"Watch section shows subnav with trailers and gameplay"
                },
                {
                    img:"img/witcher5.jpg",
                    caption:"Character gallery with center carousel navigation."
                },
                {
                    img:"img/witcher6.jpg",
                    caption:"Character details page"
                },
                {
                    img:"img/witcher7.jpg",
                    caption:"Image slideshow"
                },
                {
                    img:"img/witcher9.jpg",
                    caption:"Quiz with animated background"
                },
                {
                    img:"img/witcher10.jpg",
                    caption:"Quiz question"
                },
                {
                    img:"img/witcher11.jpg",
                    caption:"Quiz incorrect answer message"
                },
                {
                    img:"img/witcher12.jpg",
                    caption:"Quiz results page with animated background"
                },
                {
                    img:"img/witchera.jpg",
                    caption:"Post-launch experience with new content"
                },
                {
                    img:"img/witcher13.jpg",
                    caption:"Post-launch poll"
                },
                {
                    img:"img/witcher14.jpg",
                    caption:"Post-launch monster bestiary"
                },
                {
                    img:"img/witcher8.jpg",
                    caption:"Quiz featured as a stand-alone experience on the Xbox One"
                },
                {
                    img:"img/witcher1.jpg",
                    caption:"Xbox One games section feature"
                }
            ]
        },
        {
            header:"Overview",
            body:"This large promotion provided games and content for fans to explore including: trailers and gameplay videos, character/weapon/monster galleries, quizzes, and a poll.  A pre-launch version ran before The Witcher 3 was released and a post-launch version ran that added new videos, content and games."
        },
        {
            header:"Role",
            body:"Skills: UI/UX, jQuery/JavaScript, Ajax, JSON, HTML, CSS<br/>  I was responsible for building the entire promotion, excluding the hunt section (built by a teammate).  This involved working through the UX of the main sections, galleries, and games with designers to ensure that the promotion would be easy to navigate on the Xbox, and to establish all the functionality I would need to code.  I built the promotion to be compatible with the Xbox controller and the Xbox Kinect (voice and gesture), and I also included custom user data tracking.  After coding the promotion I added all the assets (videos, images, sound), and text for each language."
        },
        {
            header:"Details",
            body:"Platform: Xbox One with Kinect (voice and gesture)<br/>Placement: Featured on the Xbox One dashboard home page and games section<br/>Countries: United States, Canada (EN-CA & FR-CA), United Kingdom, Mexico, Brazil, France, Spain, Germany<br/>Dates: May 2015 - June 2015<br/>Design Lead: Karlo Reyes<br/>Designers: Annie Marten & Eric Embry<br/>Interaction Design: Kelly Gorr & Jana Sheehan"
        },
        {
            header:"Xbox One Video Capture",
            label:"Witcher 3 Poll",
            desc:"",
            img:"img/thumbnails/36.jpg",
            action:"video",
            source:"media/video/witcherPollOpt.mp4"
        }
    ]
}