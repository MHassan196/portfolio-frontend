import React from 'react'

const EducationCard = ({ img, school, degree, date, grade, desc }) => {
    return (
        <div className='expCard'>
            <div className='top'>
                <img className='expimage' src={img} />
                <div className='expbody'>
                    <div className='exprole'>{school}</div>
                    <div className='expcompany'>{degree}</div>
                    <div className='expdate'>{date}</div>
                </div>
            </div>
            <div className='description'>
                {grade &&
                    <span className='exp-span'>{grade}</span>

                }
                
            </div>
            <div className='description'>
                {desc &&
                    <span className='exp-span'>{desc}</span>

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

export default EducationCard
