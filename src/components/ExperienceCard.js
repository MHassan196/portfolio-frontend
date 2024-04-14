import React from 'react'

const ExperienceCard = ({ img, role, company, date, desc, skills }) => {
    return (
        <div className='expCard'>
            <div className='top'>
                <img className='expimage' src={img} alt='exp-logo' />
                <div className='expbody'>
                    <div className='exprole'>{role}</div>
                    <div className='expcompany'>{company}</div>
                    <div className='expdate'>{date}</div>
                </div>
            </div>
            <div className='description'>
                {desc &&
                    <span className='exp-span'>{desc}</span>

                }
                {skills &&
                    <>
                        <br />
                        <div className='expskills'>
                            <b>Skills:</b>
                            <div className='expItemWrapper'>
                                {skills?.map((skill, index) => (
                                    <div className='expskill' key={index}>• {skill}</div>
                                ))}
                            </div>
                        </div>
                    </>
                }
            </div>
            {/* {experience.doc &&
                <a href={experience.doc} target="new">
                    <Document src={experience.doc} />
                </a>
            } */}
        </div>
    )
}

export default ExperienceCard
