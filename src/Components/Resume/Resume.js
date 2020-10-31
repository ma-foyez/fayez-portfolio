import React from 'react';
import './Resume.css'
import downloadIcon from '../../assets/images/icon/down.png'
import resume from '../../assets/resume/Resume_of_Muhammad_Abul_Foyez.pdf'
const Resume = () => {
    return (
        <section id="resume">
            <div className="resume text-center">
                <div className="container" id="resume">
                    <div className="strip text-center"><a href="#resume"><img src={downloadIcon} alt=" " /></a></div>
                    <div className="down"><a href={resume} download>Download My Resume</a></div>
                </div>
            </div>
        </section>
    );
};

export default Resume;