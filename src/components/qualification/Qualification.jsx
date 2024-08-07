import React ,{useState} from 'react'
import './qualification.css'
import Projects from '../projects/Projects'

const Qualification = () => {

    const [toggleState, setToggleState] = useState(0)

    const toggleTab = (i)=>{
        setToggleState(i)
    }

  return (
    <section className='qualification section' id='portfolio'>
        <h2 className='section_title'>
            Qualification
        </h2>
        <span className='section_subtitle'>
            My personal journey
        </span>

        <div className="qualification_container container">
            <div className="qualification_tabs">
                <div className={toggleState === 1 ? 'qualification_button qualification_active button-flex': 'qualification_button  button-flex'}
                onClick={()=>toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification_icon"></i>Education
                </div>

                <div className={toggleState === 2 ? 'qualification_button qualification_active button-flex': 'qualification_button  button-flex'} onClick={()=>toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification_icon"></i>Experience
                </div>
            </div>

            <div className="qualification_sections">
                <div className={toggleState === 1 ? 'qualification_content qualification_content-active': 'qualification_content'}>
                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">Chemical Engineer</h3>
                            <span className="qualification_subtitle">
                                IIT Delhi
                            </span>
                            <div className="qualification_calender">
                                <i className="uil uil-calender-alt"></i>2022 - Present
                            </div>
                        </div>

                            <div>
                                <span className='qualification_rounder'></span>
                                <span className="qualification_line"></span>
                            </div>
                    </div>


                    <div className="qualification_data">
                        <div></div>

                            <div>
                                <span className='qualification_rounder'></span>
                                <span className="qualification_line"></span>
                            </div>

                        <div>
                            <h3 className="qualification_title">Web Developement</h3>
                            <span className="qualification_subtitle">
                                IIT Delhi
                            </span>
                            <div className="qualification_calender">
                                <i className="uil uil-calender-alt"></i>2022 - Present
                            </div>
                            
                        </div>
                    </div>


                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">Chemical Engineer</h3>
                            <span className="qualification_subtitle">
                                IIT Delhi
                            </span>
                            <div className="qualification_calender">
                                <i className="uil uil-calender-alt"></i>2022 - Present
                            </div>
                            </div>

                            <div>
                                <span className='qualification_rounder'></span>
                                <span className="qualification_line"></span>
                            </div>
                    </div>


                    <div className="qualification_data">
                        <div></div>

                        <div>
                                <span className='qualification_rounder'></span>
                                <span className="qualification_line"></span>
                            </div>

                        <div>
                            <h3 className="qualification_title">Data Analyst</h3>
                            <span className="qualification_subtitle">
                                IIT Delhi
                            </span>
                            <div className="qualification_calender">
                                <i className="uil uil-calender-alt"></i>2022 - Present
                            </div>
                            
                        </div>
                    </div>
                </div>



                <div className={toggleState === 2 ? 'qualification_content qualification_content-active': 'qualification_content'}>
                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">----------</h3>
                            <span className="qualification_subtitle">
                                IIT Delhi
                            </span>
                            <div className="qualification_calender">
                                <i className="uil uil-calender-alt"></i>2022 - Present
                            </div>
                            </div>

                            <div>
                                <span className='qualification_rounder'></span>
                                <span className="qualification_line"></span>
                            </div>   
                    </div>


                    <div className="qualification_data">
                        <div></div>

                        <div>
                                <span className='qualification_rounder'></span>
                                <span className="qualification_line"></span>
                            </div>

                        <div>
                            <h3 className="qualification_title">Web Developement</h3>
                            <span className="qualification_subtitle">
                                IIT Delhi
                            </span>
                            <div className="qualification_calender">
                                <i className="uil uil-calender-alt"></i>2022 - Present
                            </div>
                            
                        </div>
                    </div>


                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">Chemical Engineer</h3>
                            <span className="qualification_subtitle">
                                IIT Delhi
                            </span>
                            <div className="qualification_calender">
                                <i className="uil uil-calender-alt"></i>2022 - Present
                            </div>
                            </div>
                            <div>
                                <span className='qualification_rounder'></span>
                                <span className="qualification_line"></span>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        <Projects/>
    </section>
  )
}

export default Qualification
