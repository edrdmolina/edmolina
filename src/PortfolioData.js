// Project images
import KeyHolder1 from './Documents/Project-Images/KeyHolder1.png';
import ReactList1 from './Documents/Project-Images/ReactList1.png';
import ReactWeather1 from './Documents/Project-Images/ReactWeather1.png';
import Multipurpose from './Documents/Project-Images/Multipurpose.png';
import PomodoroTimer from './Documents/Project-Images/PomodoroTimer1.png';
import JSCalculator from './Documents/Project-Images/JSCalculator1.png';
import QuoteGenerator from './Documents/Project-Images/QuoteGenerator1.png';
import DrumMachine from './Documents/Project-Images/DrumMachine1.png';

// Certificates
import CS50xCert from './Documents/Certificates/CS50xCertificate.pdf';
import WebDevCert from './Documents/Certificates/TheWebDeveloperColtSteeleCERT.pdf';
import BootstrapCert from './Documents/Certificates/BOOTSTRAP4COLT-STEELECERT.pdf';
import FCCFrontend from './Documents/Certificates/fCC-FrontendLibraries.pdf';
import FCCResponsiveCert from './Documents/Certificates/fCC-ResponsiveWebDesign.pdf';
import FCCJSAlgoCert from './Documents/Certificates/fCC-JSAlgo.pdf';
import FccBackendCert from './Documents/Certificates/fCC-BackendDevAndAPI.pdf';
// Logos from courses
import HarvardLogo from './Documents/Certificates/Harvard-Logo.png';
import UdemyLogo from './Documents/Certificates/Udemy-Logo.png';
import fCCLogo from './Documents/Certificates/fCC-Logo.svg';

// Film photos
import ChangiTrain from './Documents/Photos/Changi-train.jpg';
import ChinaTownSingapore from './Documents/Photos/ChinaTown-Singapore.jpg';
import SingaporeFlyer from './Documents/Photos/Singapore-Flyer.jpg';
import TabebuiaTree from './Documents/Photos/TabebuiaTree.jpg';
import BendingArc from './Documents/Photos/BendingArc.jpg';
import TheLandmark from './Documents/Photos/The-Landmark.jpg';
import SinnersParadise from './Documents/Photos/Sinners-Paradise.jpg';
import LoopRoadCar from './Documents/Photos/loopRoadCar.jpg';

const PortfolioData = {
    contact: {
        name: "Eduardo Molina",
        email: "edmolina.solutions@gmail.com",
        phone: "(786)567-2231",
        github: "https://github.com/edrdmolina",
        linkedin: "https://www.linkedin.com/in/eduardo-molina-78105a1a1/",
        instagram: 'https://www.instagram.com/edrdnb1/'
    },
    projects: [
        {
            name: "React List",
            description: "All of the basics you need in order to create multiple shopping lists. with the ability to cross of items while shopping and editing items in case of a typo or quantity error.",
            technologies: ['MongoDB', 'ExpressJS', 'ReactJS', 'NodeJS', 'Heroku', 'Mongo Atlas', 'Passport'],
            appUrl: "https://listapp-molina.herokuapp.com/",
            githubUrl: "https://github.com/edrdmolina/React-List-App",
            image: ReactList1
        },
        {
            name: "React Weather",
            description: "React Weather app based on the look and feel of the iOS weather app. You can check the weather anywhere around the globe using the Open Weather API.",
            technologies: ['ExpressJS', 'ReactJS', 'NodeJS', 'Heroku', 'Github Pages', 'Open Weather', 'Map Quest API'],
            appUrl: "https://edrdmolina.github.io/React-Weather/",
            githubUrl: "https://github.com/edrdmolina/React-Weather",
            image: ReactWeather1
        },
        {
            name: "Multipurpose Express API",
            description: "The Multipurpose Express API was designed to serve as a flexible back-end server for multiple front-end projects. The API has multiple routes that anyone can use.",
            technologies: ['ExpressJS', 'ReactJS', 'NodeJS', 'Heroku', 'Open Weather', 'Map Quest API', 'Cheerio'],
            appUrl: "https://multi-purpose-api.herokuapp.com/",
            githubUrl: "https://github.com/edrdmolina/Multipurpose-ExpressJS",
            image: Multipurpose
        },
        {
            name: "Key-Holder",
            description: "An app designed to store passwords and keys while helping the user to create a randomized password. All data stored on the Database is encrypted before being saved.",
            technologies: ['ExpressJS', 'EJS', 'NodeJS', 'Heroku', 'MongoDB'],
            appUrl: "https://keyholder-molina.herokuapp.com/",
            githubUrl: "https://github.com/edrdmolina/KeyHolder",
            image: KeyHolder1
        },
        {
            name: "Pomodoro Timer",
            description:  "A pomodoro study technique timer created with the React Front End Technology. I created this project in order to complete the freeCodeCamp Front End Development Libraries certificate.",
            technologies: ['ReactJS', 'Github Pages'],
            appUrl: "https://edrdmolina.github.io/Pomodoro-Timer/",
            githubUrl: "https://github.com/edrdmolina/Pomodoro-Timer",
            image: PomodoroTimer
        },
        {
            name: "JavaScript Calculator",
            description:  "JavaScript Calculator using the Formula/Expression Logic created with the React Front End Technology. I created this project in order to complete the freeCodeCamp Front End Development Libraries certificate.",
            technologies: ['ReactJS', 'Github Pages'],
            appUrl: "https://edrdmolina.github.io/JS-Calculator/",
            githubUrl: "https://github.com/edrdmolina/JS-Calculator",
            image: JSCalculator
        },
        {
            name: "Quote Generator",
            description:  "Random quote generator with a twitter share button created with the React Front End Technology. I created this project in order to complete the freeCodeCamp Front End Development Libraries certificate.",
            technologies: ['ReactJS', 'Github Pages', 'Axios'],
            appUrl: "https://edrdmolina.github.io/fcc-Quote-Generator/",
            githubUrl: "https://github.com/edrdmolina/fcc-Quote-Generator",
            image: QuoteGenerator
        },
        {
            name: "Drum Machine",
            description:  "Drum Machine app created with the React Front End Technology. I created this project in order to complete the freeCodeCamp Front End Development Libraries certificate.",
            technologies: ['ReactJS', 'Github Pages'],
            appUrl: "https://edrdmolina.github.io/Drum-Machine/",
            githubUrl: "https://github.com/edrdmolina/Drum-Machine",
            image: DrumMachine
        },
    ],
    certificates: [
        {
            name: 'CS50x',
            certificate: CS50xCert,
            instructor: 'David J. Malan',
            date: 'March 2021',
            logo: HarvardLogo,
            skills: [
                'Abstraction', 'Algorithms', 'Data Structures', 'Encapsulation',
                'Resource Management', 'Security', 'Software Engineering', 'Web Programming',
            ]
        },
        {
            name: 'The Web Developer Bootcamp 2021',
            certificate: WebDevCert,
            instructor: 'Colt Steele',
            date: 'May 2021',
            logo: UdemyLogo,
            skills: [
                'HTML5', 'CSS3', 'JavaScript ES6, ES2018', 'Unix CLI',
                'NodeJS, NPM', 'ExpressJS, REST API', 'MongoDB, Schema Design' 
            ]
        },
        {
            name: 'JavaScript Algorithms and Data Structures',
            certificate: FCCJSAlgoCert,
            instructor: 'Quincy Larson',
            date: 'January 2022',
            logo: fCCLogo,
            skills: [
                'Basic JavaScript', 'ES6', 'Regular Expressions', 'Debugging', 
                'Basic Data Structures', 'Object Oriented Programming',
                'Functional Programming', 'Intermediate Algorithm Scripting'
            ]
        },
        {
            name: 'The Bootstrap 4 Bootcamp',
            certificate: BootstrapCert,
            instructor: 'Colt Steele',
            date: 'May 2021',
            logo: UdemyLogo,
            skills: [
                'Responsive Web Design', 'Bootstrap Components', 'Bootstrap 4 Grid System', 
                'SASS', 'Flexbox'
            ]
        },
        {
            name: 'Responsive Web Design',
            certificate: FCCResponsiveCert,
            instructor: 'Quincy Larson',
            date: 'January 2022',
            logo: fCCLogo,
            skills: [
                'Basic HTML and HTML5', 'Basic CSS', 'Applied Visual Design',
                'Applied Accessibility', 'Responsive Web Design Principles', 
                'CSS Flexbox', 'CSS Grid'
            ]
        },
        {
            name: 'Front End Development Libraries',
            certificate: FCCFrontend,
            instructor: 'Quincy Larson',
            date: 'February 2022',
            logo: fCCLogo,
            skills: [
                'Bootstrap', 'jQuery', 'SASS', 'React', 'Redux'
            ]
        },
        {
            name: 'Back End Development and APIs',
            certificate: FccBackendCert,
            instructor: 'Quincy Larson',
            date: 'February 2022',
            logo: fCCLogo,
            skills: [
                'Managing Packages with NPM', 'Basic Node and Express', 'MongoDB and Mongoose', 
            ]
        },
    ],
    filmPhotos: [
        {
            name: 'Changi Train Station',
            location: 'Singapore',
            camera: 'Pentax K1000',
            filmStock: 'Kodak Ultramax 400',
            image: ChangiTrain
        },
        {
            name: 'China Town',
            location: 'Singapore',
            camera: 'Pentax K1000',
            filmStock: 'Kodak Ultramax 400',
            image: ChinaTownSingapore
        },
        {
            name: 'The Singapore Flyer',
            location: 'Singapore',
            camera: 'Pentax K1000',
            filmStock: 'Kodak Ultramax 400',
            image: SingaporeFlyer
        },
        {
            name: 'Tabebuia Tree',
            location: 'Flora Wylie St. Petersburg',
            camera: 'Pentax K1000',
            filmStock: 'Kodak Portra 400',
            image: TabebuiaTree
        },
        {
            name: 'Bending Arc',
            location: 'St. Petersburg Pier',
            camera: 'Pentax K1000',
            filmStock: 'Kodak Portra 400',
            image: BendingArc
        },
        {
            name: 'The Landmark Motel',
            location: 'St. Petersburg',
            camera: 'Pentax K1000',
            filmStock: 'Kodak Portra 400',
            image: TheLandmark
        },
        {
            name: 'Sinners Paradise',
            location: 'St. Petersburg',
            camera: 'Pentax K1000',
            filmStock: 'Kodak Portra 400',
            image: SinnersParadise
        },
        {
            name: 'Loop Road Chevy',
            location: 'Loop Road Everglades National Park',
            camera: 'Pentax K1000',
            filmStock: 'Kodak Portra 400',
            image: LoopRoadCar
        },

    ]
}

export default PortfolioData;