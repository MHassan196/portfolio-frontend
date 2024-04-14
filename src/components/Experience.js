import React from 'react'

import ExperienceCard from './ExperienceCard';
import colorSharp from '../assets/img/color-sharp.png'

const Experience = () => {

    const experiences = [ 
        {
            img: "https://media.licdn.com/dms/image/C4E0BAQGP76UYEEXpsw/company-logo_200_200/0/1630564171412/octopus_digital_network_logo?e=2147483647&v=beta&t=qu8CZ8tygqRnzCCQXZ_0KyhSXkaHBUk0Xuw0o4MY2GM",
            role: "Frontend Developer Intern",
            company: "Octopus Digital Networks",
            date: "Aug 2022 - October 2022",
            desc: "During my frontend developer internship, I worked on developing user interfaces with HTML, CSS, and JavaScript, utilizing frameworks like React and overcoming technical challenges.",
            skills: [ 
                "HTML",
                "CSS",
                "Javascript",
                "Bootstrap",
                "ReactJS",
                "Redux",
                "Figma"
            ],
        }
    ]

    return (
        <section className='expcontainer' id="experience">
            <div className='expwrapper'> 
                <div className='title'>Experience</div> 
                <div className='desc'>
                    My work experience as a software engineer and working on different companies and projects.
                </div>
                <div className='timeline-section'>
                    
                {
                    experiences.map((exp, index) => {
                            return (
                                <ExperienceCard
                                key={index}
                                {...exp}
                                />
                            )
                          })
                        }

                </div>
            </div>
            <img className="expbackground-image-left" src={colorSharp} alt="Image" />
        </section>
    )
}

export default Experience
