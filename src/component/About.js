import React, { useState } from 'react'
import img from '../img/about.PNG'
const About = () => {
    const [skills, setSkills] = useState(false);
    const [education, setEducation] = useState(true);
    const [experience, setExperience] = useState(false);

    let classes = "col-4 h5 fw-600"
    let classesP = "base-line col-4 h5 fw-600"
    // THE ABOVE VARIABLES CLASSES AND CLASSESP ARE USED TO APPLY STYLES ON THE TABS AND THEIR BODIES.
    return (
        <div id='about'>
            <div className="container">
                <div className="row pb-2 pt-5">
                    <div className=" col-12 col-md-6">
                        <img src={img} alt="" className='about-img' />
                    </div>

                    <div className="col-12 col-md-6">
                        <div className='h2 '><span>A</span>bout</div>

                        <p className='lead'>Eager to work in a well reputed organization, where I can use my
                            learning and skills to achieve the organization objective and get a conducive
                            environment to improve my siklls and grow with the organization</p>

                        <div className="row tabs">

                            <div className={skills ? classesP : classes}
                                onClick={() => {
                                    setSkills(true);
                                    setEducation(false);
                                    setExperience(false);
                                }}
                            >Skills</div>

                            <div className={education ? classesP : classes}
                                onClick={() => {
                                    setEducation(true);
                                    setSkills(false);
                                    setExperience(false);
                                }}
                            >Education</div>

                            <div className={experience ? classesP : classes}
                                onClick={() => {
                                    setExperience(true);
                                    setSkills(false);
                                    setEducation(false);

                                }}
                            >Experience</div>
                        </div>

                               { skills &&<div className="skills">
                                    <ul className='list-unstyled'>
                                        <li className="h4 pt-4" style={{ color: 'var(--text-color)' , fontSize:'x-large' }}>Front End Developer</li>
                                        <li>ReactJS</li>
                                        <li>JavaScript</li>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>Bootstrap</li>
                                        <li>C++</li>
                                    </ul>
                                </div>
}

                               { education && <div className='education'>
                                    <ul className='list-unstyled'>
                                        <li className='h4 pt-4' style={{ color: 'var(--text-color)' }}>
                                            Bachelor of Computer Science (Honours)
                                        </li>
                                        <li className='ps-4 text-capitalize'>abdul wali khan university mardan</li>
                                        <li className='ps-4'>Aug 2021</li>

                                        <li className="h4 pt-2" style={{ color: 'var(--text-color)' }}>
                                            Intermediate
                                        </li>
                                        <li className='ps-4 text-capitalize'>government degree college pabbi</li>
                                        <li className='ps-4'>2017</li>

                                        <li className='h4 pt-2' style={{ color: 'var(--text-color)' }}>Matric</li>
                                        <li className='ps-4 text-capitalize'>government high school pabbi</li>
                                        <li className='ps-4'>2015</li>

                                    </ul>

                                </div>
                                }

                               { experience && <div className="experience">
                                    <ul className="pt-4 list-unstyled">
                                        <li className="h4" style={{ color: 'var(--text-color)' }}>Internee</li>
                                        <li className='ps-4 mb-2 lead'> 1.2 year </li>
                                        <li className='ps-4'>Jafasa IT Solution Peshawar, </li>
                                        <li className='ps-4'>Eziline Software Company Rawalpindi</li>
                                    </ul>
                                </div>
                                }

                           
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About