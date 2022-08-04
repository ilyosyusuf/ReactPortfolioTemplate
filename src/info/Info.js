import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
// import mock3 from "../img/mock3.png"
// import mock4 from "../img/mock4.png"
// import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Ilyos",
    lastName: "Yusupov",
    initials: "ibrakhimi", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Flutter Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee :)'
        },
        {
            emoji: '🌎',
            text: 'based in Uzbekistan'
        },
        {
            emoji: "💼",
            text: "Flutter Developer | Freelancer"
        },
        {
            emoji: "📧",
            text: "ilyosyusuf17@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/ilyosyusuf17",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://t.me/ilyosyusuf",
            icon: 'fa fa-telegram',
            label: 'telegram'
        },
        {
            link: "https://github.com/ilyosyusuf",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/ilyos-yusupov-718a11238/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/ilyos_yusuf?t=YMuT9s1_HrvO_Gd-Q-oaNw&s=09",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Assalamu alaykum! My name is Ilyos. I'm a Flutter Developer.  I studied Flutter Developing at Najot Ta'lim IT-School with full scholarship.  I love flutter and I believe that it will be the most popular framework to build mobile, web and desktop applications in the future!",
    skills:
        {
            proficientWith: ['flutter', 'bloc/cubit', 'provider', 'github', 'hive', 'firebase', 'animation', 'OOP', 'rest api', 'jira'],
            exposedTo: ['dart', 'python', 'C']
             
        },
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'photograpy',
            emoji: '📸'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'gaming',
            emoji: '🎮'
        },

// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Organico",
            // live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/ilyosyusuf/organico", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "E-Med",
            // live: "https://paytonpierce.dev",
            source: "https://github.com/ilyosyusuf/e-med",
            image: mock2
        },
        // {
        //     title: "Project 3",
        //     // live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock3
        // },
        // {
        //     title: "Project 4",
        //     // live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock4
        // },
        // {
        //     title: "Project 5",
        //     // live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock5
        // }
    ]
}