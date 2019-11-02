import { IProject } from "../IProject";
import {TagType} from "../IProject"
import thumbnail from '../../../assets/thumbnail/43.jpg';

export const xboxQuizzes: IProject = {
    title: 'Xbox Quizzes',
    subtitle: 'subtitle',
    thumbnail: thumbnail,
    tags: [TagType.XboxOne],
    content:[
        {
            "header":"Xbox One Quizzes",
            "slideshow":[
                {
                    "img":"img/quiz7.png",
                    "caption":"All quizzes have an intro and results page"
                },
                {
                    "img":"img/quiz8.jpg",
                    "caption":"Witcher 3: Four choice quiz"
                },
                {
                    "img":"img/quiz4.jpg",
                    "caption":"World Cup Quiz: Five choice quiz"
                },
                {
                    "img":"img/quiz22.jpg",
                    "caption":"South Park Quiz: Five choice quiz with multiple sounds for right/wrong answers"
                },
                {
                    "img":"img/quiz11.jpg",
                    "caption":"Witcher 3 Quiz: User got the question incorrect"
                },
                {
                    "img":"img/quiz14.png",
                    "caption":"Daredevil Quiz: User got the question correct"
                },
                {
                    "img":"img/quiz13.png",
                    "caption":"World Cup Quiz: Results page"
                },
                {
                    "img":"img/quiz9.png",
                    "caption":"Tomb Raider Quiz: Results page with community performance"
                }
            ]
        },
        {
            "header":"Overview",
            "body":"Quizzes on the Xbox One are very popular promotional tools, because they consistently have high user engagement.  Quizzes run as stand-alone promotions or in combination with larger projects (where they still preform very well)."
        },
        {
            "header":"Role",
            "body":"I was tasked with building a quiz plugin that would be used to customize and run Xbox quizzes.  The intro page, question section, and results page were completely customizable, and options included video backgrounds, different result page layouts, and a vertical button layout.  The text fields for the body copy and buttons were flexible enough to accommodate varying text lengths so that a quiz could be translated into multiple languages without having to adjust the layout."
        },
        {
            "header":"Details",
            "body":"Platform: Xbox One with Kinect (voice and gesture)<br/>Designers: Xbox Programing Team designers"
        },
        {
            "header":"Xbox One Video Capture",
            "label":"Fifa 16 quiz",
            "desc":"",
            "img":"img/thumbnails/v2/46.jpg",
            "action":"video",
            "source":"media/video/fifaQuiz.mp4"
        },
        {
            "title":"Game of Thrones Quiz",
            "slideshow":[
                {
                    "img":"img/gotquiz1.jpg",
                    "caption":"Intro page"
                },
                {
                    "img":"img/gotquiz2.jpg",
                    "caption":"Question section (The answer is Stallion)"
                },
                {
                    "img":"img/gotquiz3.jpg",
                    "caption":"The results screen had 6 possible messages and sound clips from previous Game of Thrones seasons, based on the user's score."
                }
            ]
        },
        {
            "header":"Overview",
            "body":"This was the first quiz released by Xbox on the Xbox One.  Between projects I had built a quiz prototype, and since my team focused on user engagement they recognized it would be a great promotional tool.  GOT was the perfect opportunity to use a quiz, and I was chosen to build it.  I coded the quiz and collaborated with the project’s designers on the functionality. The quiz was a big success with 90% of users finishing the quiz and over half of those people replaying it."
        },
        {
            "header":"Details",
            "body":"Platform: Xbox One with Kinect (voice and gesture)<br/>Placement: Featured on the Xbox One dashboard home page and games section<br/>Countries: United States, Canada<br/>Dates: May 2015 - June 2015<br/>jQuery/Javascript, JSON, HTML, CSS<br/> Design Lead: Todd Bohanna<br/> Designer: James Aparis"
        },
        {
            "header":"Xbox One Video Capture",
            "label":"Game of Thrones Quiz",
            "desc":"",
            "img":"img/thumbnails/29.jpg",
            "action":"video",
            "source":"media/video/gameofthronesquiz.mp4"
        }
    ]
}