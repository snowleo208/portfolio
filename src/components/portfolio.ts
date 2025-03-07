import ryugakuFair1 from '../assets/projects/gallery/xl/ryugaku-fair_1.jpg';
import ryugakuFair2 from '../assets/projects/gallery/xl/ryugaku-fair_2.jpg';
import ryugakuFair3 from '../assets/projects/gallery/xl/ryugaku-fair_3.jpg';
import ryugakuFair4 from '../assets/projects/gallery/xl/ryugaku-fair_4.jpg';
import ryugakuFairBG from '../assets/projects/bg/ryugaku-fair.jpg';

import uniquizBG from '../assets/projects/bg/uniquiz.jpg';
import uniquiz1 from '../assets/projects/gallery/xl/uniquiz_1.jpg';
import uniquiz2 from '../assets/projects/gallery/xl/uniquiz_2.jpg';
import uniquiz3 from '../assets/projects/gallery/xl/uniquiz_3.jpg';
import uniquiz4 from '../assets/projects/gallery/xl/uniquiz_4.jpg';

import internshipBG from '../assets/projects/bg/internship.jpg';
import internship1 from '../assets/projects/gallery/xl/internship_1.jpg';
import internship2 from '../assets/projects/gallery/xl/internship_2.jpg';
import internship3 from '../assets/projects/gallery/xl/internship_3.jpg';
import internship4 from '../assets/projects/gallery/xl/internship_4.jpg';

import weLoveLanguagesBG from '../assets/projects/bg/we-love-languages.jpg';
import weLoveLanguages1 from '../assets/projects/gallery/xl/we-love-languages_1.jpg';
import weLoveLanguages2 from '../assets/projects/gallery/xl/we-love-languages_2.jpg';
import weLoveLanguages3 from '../assets/projects/gallery/xl/we-love-languages_3.jpg';
import weLoveLanguages4 from '../assets/projects/gallery/xl/we-love-languages_4.jpg';

import zooplaDashboardBg from '../assets/projects/bg/zoopla-dashboard.jpg';
import zooplaDashboard1 from '../assets/projects/gallery/xl/zoopla-dashboard_1.jpg';
import zooplaDashboard2 from '../assets/projects/gallery/xl/zoopla-dashboard_2.jpg';
import zooplaDashboard3 from '../assets/projects/gallery/xl/zoopla-dashboard_3.jpg';
import zooplaDashboard4 from '../assets/projects/gallery/xl/zoopla-dashboard_4.jpg';

import zooplaMapsBg from '../assets/projects/bg/zoopla-maps.jpg';
import zooplaMaps1 from '../assets/projects/gallery/xl/zoopla-maps_1.jpg';
import zooplaMaps2 from '../assets/projects/gallery/xl/zoopla-maps_2.jpg';

export default {
    "header": "Grow and Develop",
    "headerText": "A front-end engineer emphasised on quality, accessibility and user experience. Created professional websites for serveral companies, mainly focused on React/Next.js. Enjoy writing in free time.",
    "aboutHeader": "I am Yuki Cheung",
    "aboutText": "I am a front-end engineer emphasised on quality, accessibility and user experience",
    "aboutDesc": "Hello, I am Yuki! A front-end web developer emphasised UI/UX. Good at building user interfaces and work with various designers. Equipped with automated unit test and end-to-end test skills.",
    "aboutDesc1": "Love writing and learning new languages. Native in Cantonese, fluent in Japanese and English. Feel free to drop me a line!",
    "skills": {
        "frontend": ["React/Next.js", "Gatsby.js", "Cypress", "Storybook", "CSS-in-JS", "TypeScript", "CSS/SASS/LESS"],
        "backend": ["GraphQL", "Node.js/Express", "MySQL/PostgresQL", "Linux", "Python"],
        "tools": ["AWS", "CI/CD", "Cypress", "Figma", "git", "Docker", "Jest", "Monorepo", "Webpack", "axe"]
    },
    "aboutButton": "Contact Me",
    "headerButton": "About Me",
    "projectsTitle": ["all", "side projects"],
    "brandList": ["zoopla", "ef", "dbs"],
    "blogTitle": "Recent Articles",
    "projects": [
        {
            "id": 1,
            "urlKey": "zoopla-maps",
            "category": "Commercial",
            "name": "Self-hosted Static Maps Project",
            "link": "https://www.zoopla.co.uk/",
            "desc": "This project aimed to reduce static map costs for Zoopla, transitioning from Google Static Maps to a self-hosted solution. The project is projected to save £30,000 per year, significantly reducing operational costs. Led the project from the discovery phase, evaluating multiple solutions and selecting the one best suited to the company’s needs. Collaborated closely with the infrastructure team and the Head of Engineering to ensure a smooth transition. Took the lead on the front-end implementation and coordinated with the infra team.",
            "techDesc": "Implemented a service using TileServer GL, Amazon ECS, Amazon CloudFront, and other cloud services.",
            "client": "Zoopla (London, United Kingdom)",
            "date": "Dec 2024 - Mar 2025",
            "bg": zooplaMapsBg,
            "gallery": [zooplaMaps1, zooplaMaps2]
        },
        {
            "id": 2,
            "urlKey": "zoopla-account-dashboard",
            "category": "Commercial",
            "name": "My Zoopla – Account Page Revamp",
            "link": "https://www.zoopla.co.uk/my-zoopla/",
            "desc": "This project was a complete overhaul of the existing Zoopla account page, improving both functionality and user experience. Revamped all key sections of the account page, including Tracked Properties, Saved Searches, Saved Listings, and more. Previously, these sections had inconsistent styles, and they were now unified with a modern, cohesive design.",
            "techDesc": "Developed the account page with Next.js, React, GraphQL, Cypress, Jest, and other modern technologies.",
            "client": "Zoopla (London, United Kingdom)",
            "date": "2023",
            "bg": zooplaDashboardBg,
            "gallery": [zooplaDashboard1, zooplaDashboard2, zooplaDashboard3, zooplaDashboard4]
        },
        {
            "id": 3,
            "urlKey": "ryugaku-fair",
            "category": "Commercial",
            "name": "Ryugaku Fair",
            "link": "https://www.efjapan.co.jp/hub/asia/ryugaku-fair",
            "desc": "This page is created for EF Japan for promoting their education fairs and generating leads. Using Gatsby to programmatically generate pages for office/testimonials and office details.",
            "techDesc": "The main technologies are Gatsby/React, SASS/CSS.",
            "client": "EF Education First (Japan)",
            "date": "Aug, 2019",
            "bg": ryugakuFairBG,
            "gallery": [ryugakuFair1, ryugakuFair2, ryugakuFair3, ryugakuFair4]
        },
        {
            "id": 4,
            "urlKey": "uniquiz",
            "category": "Commercial",
            "name": "Uniquiz - Quiz Template",
            "link": "https://www.ef.com/hub/asia/quizzes/uniquiz",
            "desc": "This is a quiz template created for EF Asia. Users can create different types of quizzes, like adding/removing point-based, category-based questions/answers by editing in Sitecore. Customers can change to different by using different paths, like moms-quiz, uniquiz etc.",
            "techDesc": "The main technologies are React and React hook/router, SASS/CSS. Using react-testing-library for unit testing.",
            "client": "EF Education First (Asia)",
            "date": "July, 2019",
            "bg": uniquizBG,
            "gallery": [uniquiz1, uniquiz2, uniquiz3, uniquiz4]
        },
        {
            "id": 5,
            "category": "Commercial",
            "urlKey": "internship",
            "name": "EF International Internship & Volunteer Programs Landing Page",
            "link": "https://www.ef.com.hk/hub/asia/internship/",
            "desc": "This is a landing page developed for EF Hong Kong, for introducing an internship programme to students and stakeholders like teachers and universities. Get data from backend API, with a different design for destinations in mobile and desktop version. ",
            "techDesc": "The main technologies are HTML, CSS, Javascript",
            "client": "EF Education First (Hong Kong)",
            "date": "Feb, 2019",
            "bg": internshipBG,
            "gallery": [internship1, internship2, internship3, internship4]
        },
        {
            "id": 6,
            "category": "Commercial",
            "urlKey": "we-love-languages",
            "name": "Card Game - We Love Languages",
            "link": "https://www.ef.com.hk/hub/asia/we-love-languages/",
            "desc": "This is a campaign page developed for EF Asia, for boosting awareness and sales of EF Asia offices, included EF Japan, Hong Kong, Indonesia, South Korea, Thailand, Vietnam. User needs to play and match six pairs of card and the end, they can get discounts on EF's courses.",
            "techDesc": "The main technologies are React, SASS/CSS and webpack.",
            "client": "EF Education First (Japan)",
            "date": "November, 2018",
            "bg": weLoveLanguagesBG,
            "gallery": [weLoveLanguages1, weLoveLanguages2, weLoveLanguages3, weLoveLanguages4]
        }
    ],
    "contactHeader": "Contact Me",
    "contactText": "Interested in working together? Reach out and let me know how I can help!",
    "footer": [{
        "id": "github",
        "url": "https://github.com/snowleo208"
    },
    {
        "id": "codepen",
        "url": "https://codepen.io/snowleo208/"
    },
    {
        "id": "dev-dot-to",
        "url": "https://dev.to/snowleo208/"
    }
    ]
}