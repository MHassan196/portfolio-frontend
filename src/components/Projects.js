import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import cravio from '../assets/img/cravio/thumbnail.png'
import cravio2 from '../assets/img/cravio/cravio2.png'
import cravio3 from '../assets/img/cravio/cravio3.png'
import cravio4 from '../assets/img/cravio/cravio4.png'
import cravio5 from '../assets/img/cravio/cravio5.png'
import cravio6 from '../assets/img/cravio/cravio6.png'
import cravio7 from '../assets/img/cravio/cravio7.png'
import con1 from '../assets/img/conversify/con1.png'
import con2 from '../assets/img/conversify/con2.png'
import con3 from '../assets/img/conversify/con3.png'
import mov1 from '../assets/img/movix/mov1.png'
import mov2 from '../assets/img/movix/mov2.png'
import mov3 from '../assets/img/movix/mov3.png'
import mov4 from '../assets/img/movix/mov4.png'
import mov5 from '../assets/img/movix/mov5.png'
import mov6 from '../assets/img/movix/mov6.png'
import in1 from '../assets/img/insights/in1.png'
import in2 from '../assets/img/insights/in2.png'
import in3 from '../assets/img/insights/in3.png'
import in4 from '../assets/img/insights/in4.png'
import in5 from '../assets/img/insights/in5.png'
import in6 from '../assets/img/insights/in6.png'
import in7 from '../assets/img/insights/in7.png'
import in8 from '../assets/img/insights/in8.png'
import in9 from '../assets/img/insights/in9.png'
import in10 from '../assets/img/insights/in10.png'
import in11 from '../assets/img/insights/in11.png'
import in12 from '../assets/img/insights/in12.png'
import in13 from '../assets/img/insights/in13.png'
import in14 from '../assets/img/insights/in14.png'
import in15 from '../assets/img/insights/in15.png'
import auth1 from '../assets/img/auth/auth1.png'
import auth2 from '../assets/img/auth/auth2.png'
import auth3 from '../assets/img/auth/auth3.png'
import auth4 from '../assets/img/auth/auth4.png'
import auth5 from '../assets/img/auth/auth5.png'
import auth6 from '../assets/img/auth/auth6.png'
import auth7 from '../assets/img/auth/auth7.png'
import auth8 from '../assets/img/auth/auth8.png'
import auth9 from '../assets/img/auth/auth9.png'
import auth10 from '../assets/img/auth/auth10.png'
import auth11 from '../assets/img/auth/auth11.png'
import quiz1 from '../assets/img/quiz/quiz1.png'
import quiz2 from '../assets/img/quiz/quiz2.png'
import quiz3 from '../assets/img/quiz/quiz3.png'
import quiz4 from '../assets/img/quiz/quiz4.png'
import data1 from '../assets/img/data-entry/data1.png'
import data2 from '../assets/img/data-entry/data2.png'
import data3 from '../assets/img/data-entry/data3.png'
import data4 from '../assets/img/data-entry/data4.png'
import data5 from '../assets/img/data-entry/data5.png'
import data6 from '../assets/img/data-entry/data6.png'
import data7 from '../assets/img/data-entry/data7.png'
import data8 from '../assets/img/data-entry/data8.png'
import data9 from '../assets/img/data-entry/data9.png'
import data10 from '../assets/img/data-entry/data10.png'
import data11 from '../assets/img/data-entry/data11.png'
import data12 from '../assets/img/data-entry/data12.png'
import data13 from '../assets/img/data-entry/data13.png'
import data14 from '../assets/img/data-entry/data14.png'
import data15 from '../assets/img/data-entry/data15.png'
import data16 from '../assets/img/data-entry/data16.png'
import data17 from '../assets/img/data-entry/data17.png'
import data18 from '../assets/img/data-entry/data18.png'
import data19 from '../assets/img/data-entry/data19.png'
import data20 from '../assets/img/data-entry/data20.png'
import data21 from '../assets/img/data-entry/data21.png'
import data22 from '../assets/img/data-entry/data22.png'
import data23 from '../assets/img/data-entry/data23.png'
import data24 from '../assets/img/data-entry/data24.png'
import data25 from '../assets/img/data-entry/data25.png'
import text1 from '../assets/img/text/text1.png'
import text2 from '../assets/img/text/text2.png'
import text3 from '../assets/img/text/text3.png'
import text4 from '../assets/img/text/text4.png'
import text5 from '../assets/img/text/text5.png'
import text6 from '../assets/img/text/text6.png'
import text7 from '../assets/img/text/text7.png'
import text8 from '../assets/img/text/text8.png'
import heroSection from '../assets/img/collabez/herosection.png'
import pricing from '../assets/img/collabez/pricing.png'
import services from '../assets/img/collabez/services.png'
import portfolio from '../assets/img/collabez/portfolio.png'
import innerservice from '../assets/img/collabez/innerservice.png'
import team from '../assets/img/collabez/team.png'
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "CollabEZ - Let's Create Extraordinary",
      description: "Welcome to collabEZ, your one-stop solution for innovative web development, mobile app creation, logo design, and marketing services. We collaborate closely with you to bring your vision to life with precision and creativity.",
      thumbnail: heroSection,
      imgUrl: [heroSection, portfolio, services, innerservice, pricing, team],
      type: "Static",
      tags: [
        "ReactJS",
        "JavaScript",
        "Tailwind CSS",
        "GSAP",
        "HTML CSS",
        "vite",
        "heroicons"
      ],
      githubLink: "https://github.com/threedev3/collabez-full",
      liveAppLink: "https://collabez.vercel.app/"
    },
    {
      title: "Cravio - Unveiling Delicious Delights",
      description: "Cravio is a stylish and user-friendly static web application for food delivery. Serving as a standalone restaurant platform, Cravio offers an enticing user interface where customers can explore its menu offerings. Users have the option to add desired items to their cart, review the billing details, provide address information, and smoothly proceed to checkout. With its captivating design and intuitive features, Cravio provides customers with a seamless and enjoyable experience as they order food online directly from the restaurant's menu.",
      thumbnail: cravio,
      imgUrl: [cravio, cravio2, cravio3, cravio4, cravio5, cravio6, cravio7],
      type: "Static",
      tags: [
        "ReactJS",
        "JavaScript",
        "HTML",
        "CSS",
        "Redux",
        "vite",
        "react-icons"
      ],
      githubLink: "https://github.com/MHassan196/cravio",
      liveAppLink: "https://cravio.vercel.app/"
    },
    {
      title: "Conversify",
      description: "Conversify is an intelligent chatbot web application that utilizes Google's Gemini API to fetch precise responses for user queries. It's adept at understanding natural language, enabling seamless interactions. The app offers real-time updates to ensure the information provided is current. Its intuitive interface fosters an engaging user experience, facilitating easy access to a diverse range of topics.",
      thumbnail: con1,
      imgUrl: [con1, con2, con3],
      type: "Static",
      tags: [
        "ReactJS",
        "HTML",
        "CSS",
        "JavaScript",
        "Google Gemini API",
        "Font Awesome icons",

      ],
      githubLink: "https://github.com/MHassan196/conversify",
      liveAppLink: "https://conversify-five.vercel.app/"
    },
    {
      title: "Movix - Your Gateway To The Cinematic World",
      description: "Movix is a movie app featuring an extensive database of films and TV shows, powered by the OMDB API. Users can browse the latest releases, explore genres, and access detailed information including cast, plot summaries, and ratings. With search functionality and filters, finding the perfect movie is easy. Movix offers a user-friendly interface for discovering and learning more about movies and TV shows.",
      thumbnail: mov1,
      imgUrl: [mov1, mov2, mov3, mov4, mov5, mov6],
      type: "Static",
      tags: [
        "ReactJS",
        "Javascript",
        "HTML",
        "CSS",
        "SASS",
        "Redux",
        "react-infinite-scroll",
        "react-redux",
        "OMDb API"

      ],
      githubLink: "https://github.com/MHassan196/movix",
      liveAppLink: "https://movix-coral-two.vercel.app/"
    },
    {
      title: "Insights Blog",
      description: "Insights Blog is a versatile full-stack web application designed to foster a community centered around insightful content. Administrators wield comprehensive control, empowered to create, edit, and delete posts, users, and comments. Meanwhile, users can immerse themselves in the rich variety of blogs, sharing their thoughts through comments and expressing appreciation via likes. The platform prioritizes security and convenience with JWT token authentication and OAuth integration through Firebase, offering users a seamless and secure experience. Insights Blog merges front-end and back-end functionalities seamlessly, ensuring a smooth and intuitive journey for users as they explore, engage, and contribute to the platform's dynamic content ecosystem.",
      thumbnail: in1,
      imgUrl: [in1, in14, in15, in2, in3, in5, in6, in7, in8, in9, in10, in11, in12, in13,],
      type: "Dynamic",
      tags: [
        "ReactJS",
        "NodeJS",
        "ExpressJS",
        "MongoDB",
        "JavaScript",
        "Redux",
        "Flowbite React",
        "Tailwind CSS",
        "Firebase",
        "Google OAuth",
      ],
      githubLink: "https://github.com/MHassan196/insights-blog",
    },
    {
      title: "MERN Authentication App",
      description: "The MERN Authentication App offers users a comprehensive platform for managing their accounts securely. Users can register with their email and password, and login to access personalized profiles. Profile updates, including name, address, and profile picture changes, are supported. In case of a forgotten password, users can initiate the recovery process. An OTP is sent to their registered email address for verification. Upon successful verification, users are directed to a password reset page where they can securely update their password. This app is built on the MERN stack, ensuring robust functionality and security. With its intuitive interface and reliable features, the MERN Authentication App provides users with a seamless and protected account management experience.",
      thumbnail: auth1,
      imgUrl: [auth1, auth2, auth3, auth4, auth5, auth6, auth7, auth8, auth9, auth10, auth11,],
      type: "Dynamic",
      tags: [
        "ReactJS",
        "NodeJS",
        "ExpressJS",
        "MongoDB",
        "Zustand",
        "HTML CSS",
        "Tailwind CSS",
        "formik",
        "react-hot-toast",
        "jsonwebtoken",
        "mongoose",
      ],
      githubLink: "https://github.com/MHassan196/authentication-app",
    },
    {
      title: "MERN Quiz App",
      description: "The MERN Quiz App offers users an interactive platform for testing their knowledge across various topics. Users are presented with questions, each accompanied by three to four options, and they must select the correct answer. Upon completing the quiz, users receive immediate feedback regarding their performance. The app calculates the total points based on the number of correct answers. If the user successfully answers a sufficient number of questions, they pass the quiz; otherwise, they fail. Built on the MERN stack (MongoDB, Express.js, React.js, Node.js), this app ensures a seamless user experience. With its intuitive interface and engaging quiz format, the MERN Quiz App provides users with an entertaining and educational way to assess their knowledge.",
      thumbnail: quiz1,
      imgUrl: [quiz1, quiz2, quiz3, quiz4,],
      type: "Dynamic",
      tags: [
        "ReactJS",
        "NodeJS",
        "ExpressJS",
        "MongoDB",
        "mongoose",
        "Redux",
        "HTML CSS",
        "JavaScript",
      ],
      githubLink: "https://github.com/MHassan196/quiz-app",
      githubLink2: "https://github.com/MHassan196/quiz-app-backend"
    },
    {
      title: "AI Based Data Entry Automation",
      description: "The AI-based Data Entry Automation web app simplifies data entry tasks by utilizing OCR and Deep Learning technologies. Users can upload various file types, including PDFs, Word documents, and images, containing tabular or handwritten data. Once uploaded, the app automatically extracts the data using advanced algorithms and stores it securely in the database. Through the user dashboard, individuals have convenient access to their data, enabling them to read, update, and delete entries as needed. Additionally, users can customize data fields according to their preferences and save the modified data directly to the database for future reference. This full-stack solution seamlessly integrates front-end and back-end functionalities, providing a user-friendly experience. By harnessing AI technologies, the Data Entry Automation app enhances efficiency and accuracy in data management, offering a streamlined solution for users' data entry needs.",
      thumbnail: data1,
      imgUrl: [data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12, data13, data14, data15, data16, data17, data18, data19, data20, data21, data22, data23, data24, data25,],
      type: "Dynamic",
      tags: [
        "ReactJS",
        "Python",
        "Django",
        "MongoDB",
        "mongoose",
        "HTML CSS",
        "JavaScript",
        "OCR",
        "Deep Learning"
      ],
      githubLink: "https://github.com/MHassan196/DEA_Frontend",
      githubLink2: "https://github.com/MHassan196/DEA_Backend"
    },
    {
      title: "TextUtils",
      description: "TextUtils is a user-friendly web application for text manipulation. It offers various functionalities such as converting text to lowercase or uppercase, formatting it into sentence case or title case, and swapping the case of letters. Users can also remove extra spaces for cleaner formatting. The app provides a convenient way to play with text and modify it according to their preferences.",
      thumbnail: text1,
      imgUrl: [text1, text2, text3, text4, text5, text6, text7, text8],
      type: "Static",
      tags: [
        "ReactJS",
        "HTML CSS",
        "JavaScript",

      ],
      githubLink: "https://github.com/MHassan196/TextUtils",
      liveAppLink: "https://mhassan196.github.io/TextUtils/"
    },

  ];

  const filteredProjects = {
    all: projects,
    static: projects.filter(project => project.type === "Static"),
    dynamic: projects.filter(project => project.type === "Dynamic"),
  };


  // const handleTabChange = (tab) => {
  //   setActiveTab(tab);
  // };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={8}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>I have worked on wide range of projects. From static websites to dynamic web applications which includes various range of technologies. Here you can check those project and have a try using it.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first" >All</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second" >Static</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third" >Dynamic</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>

                      <Tab.Pane eventKey="first">
                        <Row>
                          {filteredProjects.all.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>


                      <Tab.Pane eventKey="second">
                        <Row>
                          {filteredProjects.static.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>


                      <Tab.Pane eventKey="third">
                        <Row>
                          {filteredProjects.dynamic.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>

                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="back-img"></img>
    </section>
  )
}
