import React, { useContext } from 'react';
import Particles from 'react-particles-js';
import StyleContext from '../../Shared/contexts/StyleContext';
import './Banner.css'
import fayez from '../../../assets/images/image 14.png'
import Header from '../../Shared/Header/Header'
import Typical from 'react-typical'
import Social from '../../Shared/Social/Social';
import resume from '../../../assets/resume/Resume_of_Muhammad_Abul_Foyez.pdf'

const Banner = () => {
    const { isDark } = useContext(StyleContext);

    return (
        <div className={!isDark ? "banner-dark" : "banner-white"}>
            <div className="menu">
                <Header />
            </div>
            <div className="container banner">
                <div className="row justify-content-center align-items-center pt-3 p-2 text-center">
                    <div className="col-md-6">
                        <div className="banner-img text-center">
                            <img src={fayez} className="img-fluid" alt="" />
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="banner-title">
                            <h1>I'm <span className="brand-text">M.A Fayez</span></h1>
                            <Typical
                                loop={Infinity}
                                wrapper="h3"
                                steps={["Frontend Developer", 2500, "PROGRAMMER!", 2500]}
                            />
                            <p className="text-justify text-capitalize">A passionate Frontend Developer 🚀 having an experience of building dynamic Web applications with JavaScript / Reactjs / Nodejs / and some other cool libraries and frameworks.</p>

                            <Social />

                            <div className="brand-btn">
                                <button className="btn hire-me m-2">Contact Me</button>
                                <a className="text-decoration-none" href={resume} download> <button className="btn resume-btn">Download Resume </button></a>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Particles
                id="particles"
                params={{
                    "particles": {
                        "number": {
                            "value": 70
                        },
                        "size": {
                            "value": 6
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }}></Particles>
        </div>
    );
};

export default Banner;