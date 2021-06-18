import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  img: 'crophero.jpg',
  title: 'Portfolio:',
  name: 'Nikolay Valkov',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'cropprofile.jpg',
  paragraphOne:
    "I'm 22, tech-oriented and I love creating things and solving problems. I just finished my BSc Comptuer Science at the University of Strathclyde, Glasgow. During my time there I have gained invaluable experience in various fields accross software development:",
  paragraphTwo:
    "From low level bit-logic, algorithms, web-dev and basics of assemby to modern languages like Python, Java and C++ across multiple platforms, I've grown accustomed to learning and applying new technologies/skills in the field for various projects. In addition I've also had to work in group development projects where collaboration, communication, and teamwork were require. ",
  paragraphThree:
    "I'm looking for experience in a varied work-environment to improve upon my skills and gain new ones.",
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: '408proj.PNG',
    title: 'Music Production App - LoopDeck',
    info: 'For my dissertation project I chose to make an application teaching beginners in music production basic concepts such as repetition and layering. \n ',
    info2:
      'The main challenges in developing this application were the need to learn C++ with minimal experience, as well as learn and use the JUCE framework designed for multi-platform GUI/audio application development. This project was heavily researched and was developed in the span of 4 months with no prior experience of developing audio software.',
    url: 'https://drive.google.com/file/d/1MVRthN5Xl5P0BzQdEatNiFvRxrAeuXrb/view?usp=sharing',
    repo: 'https://github.com/gimmickmegladon/LoopDeck', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'convcalc.PNG',
    title: 'Conversion Calculator',
    info: 'Web Currency Conversion Calculator to help with quick conversions while abroad',
    info2:
      'Live Updates to Currency Prices using European Central Bank data.\nPlain JavaScript + HTML; designed for mobile use',
    url: 'https://devweb2019.cis.strath.ac.uk/~cmb17180/317_a1/',
    repo: 'https://gitlab.cis.strath.ac.uk/cs317-2019/madass1-cmb17180', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'brickbreaker.PNG',
    title: 'BrickBreaker',
    info: 'Web based Brick Breaker game made to be played on mobile with tilt controls',
    info2: 'Mainly JavaScript with some HTML',
    url: 'https://devweb2019.cis.strath.ac.uk/~cmb17180/317_a2/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ordersystem.PNG',
    title: 'Art Store',
    info: 'Web based art listing and ordering system',
    info2: 'Mostly HTML and PHP',
    url: 'https://devweb2019.cis.strath.ac.uk/~cmb17180/art_store/listart.php',
    repo: '', // if no repo, the button will not show up
  }
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'nickolayvalkov@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    /*{
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },*/
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
