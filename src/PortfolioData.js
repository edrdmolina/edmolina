import ChuckNorris1 from './Images/ChuckNorris1.png';
import KeyHolder1 from './Images/KeyHolder1.png';
import ReactList1 from './Images/ReactList1.png';

// Film photos
import ChangiTrain from './Images/Photos/Changi-train.jpg';
import ChinaTownSingapore from './Images/Photos/ChinaTown-Singapore.jpg';
import SingaporeFlyer from './Images/Photos/Singapore-Flyer.jpg';
import TabebuiaTree from './Images/Photos/TabebuiaTree.jpg';
import BendingArc from './Images/Photos/BendingArc.jpg';
import TheLandmark from './Images/Photos/The-Landmark.jpg';
import SinnersParadise from './Images/Photos/Sinners-Paradise.jpg';

const PortfolioData = {
    contact: {
        name: "eduardo molina",
        email: "edrdmolina11@gmail.com",
        phone: "(786)567-2231",
        github: "https://github.com/edrdmolina",
        linkedin: "https://www.linkedin.com/in/eduardo-molina-78105a1a1/",
    },
    projects: [
        {
            name: "React List",
            description: "A MERN stack app designed to save lists. Requires making an account to save all data onto a Mongo Atlas server. I use it on a weekly basis with my significant other to prepare grocery lists or tasks that need to be completed. Being a full stack app all changes update instantly by calling the backend express server API.",
            appUrl: "https://listapp-molina.herokuapp.com/",
            githubUrl: "https://github.com/edrdmolina/React-List-App",
            image: ReactList1
        },
        {
            name: "Key-Holder",
            description: "A full Stack app using Express JS, Mongo Atlas and EJS Engine. This app is designed to store passwords and even help you create a randomized password. All data stored on the Database is encrypted before being saved.",
            appUrl: "https://keyholder-molina.herokuapp.com/",
            githubUrl: "https://github.com/edrdmolina/KeyHolder",
            image: KeyHolder1
        },
        {
            name: "Chuck Norris Joke Generator",
            description:  "Using axios and cheerio, I scraped over 90 Chuck Norris jokes and saved them to a JSON file. From there, I set up a backend API with express that serves a random joke every time it's called. On the client side it's a simple button that gives you a random Chuck Norris Joke. Overall it was a simple afternoon exercise that tought me the basics of web scraping.",
            appUrl: "https://edrdmolina.github.io/Chuck-Norris-Jokes/",
            githubUrl: "https://github.com/edrdmolina/Chuck-Norris-Jokes",
            image: ChuckNorris1
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

    ]
}

export default PortfolioData;