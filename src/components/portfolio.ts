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

import accentQuizBG from '../assets/projects/bg/accent-quiz.jpg';
import accentQuiz1 from '../assets/projects/gallery/xl/accent-quiz_1.jpg';
import accentQuiz2 from '../assets/projects/gallery/xl/accent-quiz_2.jpg';
import accentQuiz3 from '../assets/projects/gallery/xl/accent-quiz_3.jpg';
import accentQuiz4 from '../assets/projects/gallery/xl/accent-quiz_4.jpg';

import hotDealsBG from '../assets/projects/bg/hot-deals.jpg';
import hotDeals1 from '../assets/projects/gallery/xl/hot-deals_1.jpg';
import hotDeals2 from '../assets/projects/gallery/xl/hot-deals_2.jpg';
import hotDeals3 from '../assets/projects/gallery/xl/hot-deals_3.jpg';
import hotDeals4 from '../assets/projects/gallery/xl/hot-deals_4.jpg';

export default {
    "header": "Grow and Develop",
    "headerText": "A front-end web developer. Created professional landing pages and websites for serveral companies, mainly focused on React, styled components and Jest/Jasmine. Love to write when having free time.",
    "aboutHeader": "I am Yuki Cheung",
    "aboutText": "I am a web developer focused on front-end technologies.",
    "aboutDesc": "Hello, I am Yuki! A front-end web developer emphasised UI/UX. Good at building user interfaces and work with various designers. Equipped with automated unit test and end-to-end test skills.",
    "aboutDesc1": "Love writing and learning new languages. Native in Cantonese, fluent in Japanese and English. Feel free to drop me a line!",
    "skills": {
        "frontend": ["React/Gatsby", "Angular", "Storybook", "styled components", "Typescript", "CSS/SASS/LESS"],
        "backend": ["Node.js/Express", "Next.js", "MySQL/PostgresQL", "GraphQL", "Linux"],
        "tools": ["Cypress", "Docker", "Webpack", "Jest", "CI/CD", "Monorepo/Lerna"]
    },
    "aboutButton": "Contact Me",
    "headerButton": "About Me",
    "projectsTitle": ["all", "side projects"],
    "brandList": ["zoopla", "ef", "dbs"],
    "blogTitle": "Recent Articles",
    "projects": [{
            "id": 0,
            "urlKey": "ryugaku-fair",
            "category": "commercial",
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
            "id": 1,
            "urlKey": "uniquiz",
            "category": "commercial",
            "name": "Uniquiz - a quiz template",
            "link": "https://www.ef.com/hub/asia/quizzes/uniquiz",
            "desc": "This is a quiz template created for EF Asia. Users can create different types of quizzes, like adding/removing point-based, category-based questions/answers by editing in Sitecore. Customers can change to different by using different paths, like moms-quiz, uniquiz etc.",
            "techDesc": "The main technologies are React and React hook/router, SASS/CSS. Using react-testing-library for unit testing.",
            "client": "EF Education First (Asia)",
            "date": "July, 2019",
            "bg": uniquizBG,
            "gallery": [uniquiz1, uniquiz2, uniquiz3, uniquiz4]
        },
        {
            "id": 2,
            "category": "commercial",
            "urlKey": "internship",
            "name": "EF International Internship & Volunteer Programs",
            "link": "https://www.ef.com.hk/hub/asia/internship/",
            "desc": "This is a landing page developed for EF Hong Kong, for introducing an internship programme to students and stakeholders like teachers and universities. Get data from backend API, with a different design for destinations in mobile and desktop version. ",
            "techDesc": "The main technologies are HTML, CSS, Javascript",
            "client": "EF Education First (Hong Kong)",
            "date": "Feb, 2019",
            "bg": internshipBG,
            "gallery": [internship1, internship2, internship3, internship4]
        },
        {
            "id": 3,
            "category": "commercial",
            "urlKey": "we-love-languages",
            "name": "We Love Languages",
            "link": "https://www.ef.com.hk/hub/asia/we-love-languages/",
            "desc": "This is a campaign page developed for EF Asia, for boosting awareness and sales of EF Asia offices, included EF Japan, Hong Kong, Indonesia, South Korea, Thailand, Vietnam. User needs to play and match six pairs of card and the end, they can get discounts on EF's courses.",
            "techDesc": "The main technologies are React, SASS/CSS and webpack.",
            "client": "EF Education First (Japan)",
            "date": "November, 2018",
            "bg": weLoveLanguagesBG,
            "gallery": [weLoveLanguages1, weLoveLanguages2, weLoveLanguages3, weLoveLanguages4]
        },
        {
            "id": 4,
            "category": "commercial",
            "urlKey": "accent-quiz",
            "name": "Accent Quiz",
            "link": "https://liuxue.ef.com.cn/hub/asia/accent-quiz",
            "desc": "This is a campaign page developed for EF China, for boosting leads and awareness of EF China. Through this quiz, the user can hear and answer questions of different accents. In the end, they can know their scores.",
            "techDesc": "The main technologies are React, SASS/CSS, with WeChat SDK for customizing share content.",
            "client": "EF Education First China",
            "date": "October, 2018",
            "bg": accentQuizBG,
            "gallery": [accentQuiz1, accentQuiz2, accentQuiz3, accentQuiz4]
        },
        {
            "id": 5,
            "category": "commercial",
            "urlKey": "hot-deals",
            "name": "EF Hot Deals",
            "link": "https://www.ef.com.hk/hub/asia/hot-deals",
            "desc": "This is a promotion page developed for EF Asia, for boosting sales of EF Asia offices, included EF Japan, Hong Kong, Indonesia, South Korea, Thailand, Vietnam. Staff can switch to a different theme, e.g. Christmas to show different design.",
            "techDesc": "The main technologies are HTML/Pug, SASS/CSS and Javascript.",
            "client": "EF Education First Japan",
            "date": "December, 2018",
            "bg": hotDealsBG,
            "gallery": [hotDeals1, hotDeals2, hotDeals3, hotDeals4]
        },
    ],
    "contactHeader": "Contact Me",
    "contactText": "Need a project? Feel free to contact me and let me know what you need. Everything would be tailor-made and suit your needs.",
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