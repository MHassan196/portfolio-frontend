import React from 'react'

import EducationCard from './EducationCard';
import { education } from '../data/data';

const Education = () => {

    return (
        <section className='expcontainer' id="education">
            <div className='expwrapper'> 
                <div className='title'>Education</div> 
                <div className='desc'>
                    My education has been a journey of self-discovery and growth. My educational details are given below
                </div>
                <div className='timeline-section'>
                    
                {
                    education.map((edu, index) => {
                            return (
                                <EducationCard
                                key={index}
                                {...edu}
                                />
                            )
                          })
                        }

                </div>
            </div>
        </section>
    )
}

export default Education
