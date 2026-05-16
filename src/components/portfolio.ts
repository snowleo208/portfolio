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

import autocompleteBg from '../assets/projects/bg/autocomplete.jpg';
import autocomplete1 from '../assets/projects/gallery/autocomplete_1.jpg';
import autocomplete2 from '../assets/projects/gallery/autocomplete_2.jpg';

import zooplaMcp from '../assets/projects/bg/zoopla-mcp.jpg';
import zooplaMcp1 from '../assets/projects/gallery/zoopla-mcp_1.jpg';
import zooplaMcp2 from '../assets/projects/gallery/zoopla-mcp_2.jpg';
import zooplaMcp3 from '../assets/projects/gallery/zoopla-mcp_3.jpg';

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
            "id": 7,
            "urlKey": "zoopla-chatgpt-apps",
            "category": "Commercial",
            "name": "Zoopla ChatGPT Apps",
            "link": "https://chatgpt.com/apps/zoopla/asdk_app_694547c513008191a7b8f44c95fb14c3",
            "desc": "This commercial project for Zoopla explored building a customer-facing ChatGPT app experience, combining a custom MCP server with a new interactive UI surface inside ChatGPT. I led the initial frontend architecture and took the UI foundation from 0 to 1 while the backend MCP server work was still in progress, creating enough structure, patterns, and reusable templates for the wider team to continue development independently.",
            "techDesc": "Created the initial ChatGPT Apps UI template from scratch and contributed to the MCP server integration approach. Established the frontend architecture, component structure, data-flow assumptions, and development patterns needed to support iterative product work while backend capabilities were still being defined.",
            "client": "Zoopla (London, United Kingdom)",
            "date": "Feb 2026",
            "bg": zooplaMcp,
            "gallery": [zooplaMcp1, zooplaMcp2, zooplaMcp3]
        },
        {
            "id": 6,
            "urlKey": "autocomplete",
            "category": "Commercial",
            "name": "House Prices Address Autocompletion on Zoopla Mobile App",
            "link": "https://www.zoopla.co.uk/",
            "desc": "This commercial project for Zoopla introduced address autocompletion to the House Prices journey on the mobile app, enabling users to search across a dataset of 35 million UK addresses. The work covered the full discovery and delivery process, from analysing address-search behaviour and OpenSearch query strategies through to validating relevance improvements in a production-safe way. A key part of the project was finding the best possible query approach without risking regressions to the live experience.",
            "techDesc": "Built the address autocomplete experience with OpenSearch and React Native, including query optimisation, relevance tuning, performance analysis, and production-safe experimentation. Integrated the final solution into the Zoopla mobile app while balancing search quality, latency, and operational risk across a large-scale UK address index.",
            "client": "Zoopla (London, United Kingdom)",
            "date": "Mar 2025",
            "bg": autocompleteBg,
            "gallery": [autocomplete1, autocomplete2]
        },
        {
            "id": 5,
            "urlKey": "zoopla-maps",
            "category": "Commercial",
            "name": "In-house Static Maps Image Alternatives",
            "link": "https://www.zoopla.co.uk/",
            "desc": "This project aimed to reduce static map costs for Zoopla, transitioning from Google Static Maps to a self-hosted solution. The project is projected to save £30,000 per year, significantly reducing operational costs. Led the project from the discovery phase, evaluating multiple solutions and selecting the one best suited to the company’s needs. Collaborated closely with the infrastructure team and the Head of Engineering to ensure a smooth transition. Took the lead on the front-end implementation and coordinated with the infra team.",
            "techDesc": "Implemented a service using TileServer GL, Amazon ECS, Amazon CloudFront, and other cloud services.",
            "client": "Zoopla (London, United Kingdom)",
            "date": "Dec 2024 - Mar 2025",
            "bg": zooplaMapsBg,
            "gallery": [zooplaMaps1, zooplaMaps2]
        },
        {
            "id": 4,
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
            "id": 2,
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
            "id": 1,
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
        },
    ],
    "contactHeader": "Contact Me",
    "contactText": "Interested in working together or discussing a project? Get in touch and I’ll be happy to connect.",
    "footer": [
        {
            "id": "github",
            "url": "https://github.com/snowleo208/"
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
