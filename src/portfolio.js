
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "MilindSonawane",
  title: "Hey There, I'm Milind",
  subTitle: emoji("A passionate Web Developer 🚀 having an experience of building Web applications with WordPress, Node.js, PHP and some other cool libraries and frameworks."),
  resumeLink: "https://drive.google.com/file/d/1e96xEbGqy8H_GwXnJdcgiws5r9ie9a0K/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/milindex",
  linkedin: "https://www.linkedin.com/in/milindks/",
  gmail: "milind4j@gmail.com",
  gitlab: "https://gitlab.com/milindks",
  twitter: "https://twitter.com/milinded",
  instagram: "https://www.instagram.com/milindex",
  stackoverflow: "https://stackoverflow.com/users/13767108/milind"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop Static website with clean responsive UI"),
    emoji("⚡ Develop Interactive Wordpress Websites"),
    emoji("⚡ E-Commerce websites with Woocomerce"),
    emoji("⚡ Accelarated Mobile Pages (AMP) Automation for existing website or New"),
    emoji("⚡ Optimize website for better performance"),
    emoji("⚡ Server Management, Configaration & Setup, Cloudflare Configration"),
    emoji("⚡ And much more")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "SASS",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JAVASCRIPT",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "AMP",
      fontAwesomeClassname: "fas fa-bolt"
    },
    {
      skillName: "NODEJS",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "GIT",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "SQL-DATABASE",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "BOOTSTRAP",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "DOCKER",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "Mumbai University",
      logo: require("./assets/images/mumbai_university.png"),
      subHeader: "Master of Science in Information Technology",
      duration: "June 2016 – May 2018",
      desc: "Passed with Distingtion (7.73 CGPI)",
      descBullets: [
        "Software Engineering, Matlab, R-Tool",
        "Java, RDBMS, Data Science, Data Mining",
      ]
    },
    {
      schoolName: "Mumbai University",
      logo: require("./assets/images/mumbai_university.png"),
      subHeader: "Bachelor of Science in Information Technology",
      duration: "June 2013 – May 2016",
      desc: "Passed with Distingtion (70.64%)",
      descBullets: [
        "Software Engineering, Software Development",
        "Java, C++, C# with ASP.NET, PHP",
      ]
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design (HTML/CSS/JS/jQuery)",  //Insert stack or technology you have experience in
      progressPercentage: "80%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend (PHP/WprdPress/MySQL/Node.js)",
      progressPercentage: "85%"
    },
    {
      Stack: "Programming (PSR-2/GiT/DevTools)",
      progressPercentage: "90%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Jr. Web Developer",
      company: "KraftPixel",
      companylogo: require("./assets/images/kraftpixel.webp"),
      date: "January 2019 – Present",
      desc: "KraftPixel is a people-to-people IT solutions startup specializing in Wordpress development, optimization, hosting, SEO-friendly migration and management.",
      descBullets: [
        "WordPress Custom theme Development",
        "3rd Party Service Integration",
        "Working with Leading Paid/Free Plugins as part of Development",
        "Website optimization as per PageSpeed Insights & GTMetrix",
        "Working with Rest API"
      ]
    },
    {
      role: "Web Developer - Intern",
      company: "KraftPixel",
      companylogo: require("./assets/images/kraftpixel.webp"),
      date: "July 2018 – January 2019",
      desc: "KraftPixel is a people-to-people IT solutions startup specializing in Wordpress development, optimization, hosting, SEO-friendly migration and management.",
      descBullets: [
        "Successfully completed 6 months of internship in web development",
        "Successfully secured the Job Offer at KraftPixel",
        "Learned about Custom WordPress Theme and Plugin Development",
        "Improved PHP & Javascript skills."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

console.log(process.env);

const openSource = {
  githubConvertedToken: "724c0d484327c6f6aef7f25f00365186c58b35a6",
  githubUserName: "milindex", // Change to your github username to view your profile in Contact Section.
  showGithubProfile : "true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME HIGH PROFILE PROJECTS I AM CURRENTLY WORKING WITH (TEAM COLLABRATION)",
  projects: [
    {
      image: require("./assets/images/angelbroking.webp"),
      link: "https://www.angelbroking.com/"
    },
    {
      image: require("./assets/images/atomberg.webp"),
      link: "https://atomberg.com"
    },
    {
      image: require("./assets/images/kapiva.webp"),
      link: "https://kapiva.in/"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications and Some Cool Stuff!",

  achievementsCards: [
    {
      title: "Google Ads Display Certification",
      // subtitle: "Obtained the Google Ads Display Certificate from Google ExceedLMS",
      image: require("./assets/images/certifications.png"),
      footerLink: [
        { name: "Google Ads Display Certification", url: "https://skillshop.exceedlms.com/profiles/d95189260afc4321a858a799ea46306a" }
      ]
    },
    {
      title: "Google Ads Mobile Certification",
      // subtitle: "Obtained the Google Ads Mobile Certificate from Google ExceedLMS",
      image: require("./assets/images/certifications.png"),
      footerLink: [
        { name: "Google Ads Mobile Certification", url: "https://skillshop.exceedlms.com/profiles/d95189260afc4321a858a799ea46306a" }
      ]
    },
    {
      title: "Google Ads Mobile",
      // subtitle: "Obtained the Google Ads Mobile Certificate from Google ExceedLMS",
      image: require("./assets/images/certifications.png"),
      footerLink: [
        { name: "Google Ads Mobile", url: "https://skillshop.exceedlms.com/profiles/d95189260afc4321a858a799ea46306a" }
      ]
    },
    {
      title: "Google Ads Fundamentals",
      // subtitle: "Obtained the Google Ads Fundamentals Certificate from Google ExceedLMS",
      image: require("./assets/images/certifications.png"),
      footerLink: [
        { name: "Google Ads Fundamentals", url: "https://skillshop.exceedlms.com/profiles/d95189260afc4321a858a799ea46306a" }
      ]
    }
    // },
    // {
    //   title: "Google Assistant Action",
    //   subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
    //   image: require("./assets/images/googleAssistantLogo.webp"),
    //   footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    // },

    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   footerLink: [
    //     { name: "Certification", url: "" },
    //     { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
    //   ]
    // }
  ]
};

// Blogs Section

const blogSection = {

  title: "Snippets",
  subtitle: "Contribution towards the community",

  blogs: [
    {
      url: "https://codepen.io/milindks/pen/ZdZpWz",
      title: "Beautiful SVG Animation in Console Screen",
      description: "Just check the console afterwards, nothing much."
    },
    {
      url: "https://codepen.io/milindks/pen/PozdXMX",
      title: "A Mixure of particles-js & typewriter-js for github README.md",
      description: ""
    },
    {
      url: "https://codepen.io/milindks/pen/pogOzrV",
      title: "AMP Story Template",
      description: "A free template for AMP stories"
    },
    {
      url: "https://codepen.io/milindks/pen/MWWLKxQ",
      title: "jQuery analog Clock",
      description: "an Analog clock using jQuery"
    },
    {
      url: "https://codepen.io/milindks/pen/ZEQKPLG",
      title: "Use of SVG in AMP",
      description: "Esiest way to use an SVG image in amp html"
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I HAVEN'T STARTED MY OWN PODCAST CHANNEL YET, THIS IS ON MY TODO LIST THOUGH 😅"),

  talks: [
    // {
    //   title: "",
    //   subtitle: "",
    //   slides_url: "",
    //   event_url: ""
    // }
  ]
};

// Podcast Section

const podcastSection = {
  // title: emoji("Podcast 🎙️"),
  title: "",
  // subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  subtitle: "",
  // subtitle: "I HAVEN'T STARTED MY OWN PODCAST CHANNEL YET, THIS IS ON MY TODO LIST THOUGH ",

  // Please Provide with Your Podcast embeded Link
  podcast: [""]
  // podcast: ["https://anchor.fm/"]
};

const contactInfo = {
  title: emoji("Reach Out to me! ☎️"),
  subtitle: "LINKEDIN IS THE BEST WAY TO REACH ME / ",
  number: "+91-7020744605 (Whatsapp/Call)",
  email_address: "milind4j@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : ""//Replace "twitter" with your twitter username without @

};
// export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
