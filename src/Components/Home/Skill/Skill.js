import React, { useContext, useEffect } from 'react';
import StyleContext from '../../Shared/contexts/StyleContext';
import './Skill.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Skill = () => {
    const { isDark } = useContext(StyleContext);
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])

    return (
        <section className={!isDark ? "skill-dark" : "bg-white text-dark"} id="skill">
            <div className="container pt-3">
                <div className="skill-heading text-center">
                    <h1>Skill</h1>
                    <div className="row">
                        <div className="col-md-3">
                            <div data-aos="fade-right">
                                <div className={!isDark ? "single-skill !isDark text-dark" : "single-skill isNotDark text-light"}>
                                    <div class="service-ico">
                                        <span class="ico-circle"><i class="fab fa-react"></i></span>
                                    </div>
                                    <div class="service-content">
                                        <h3 className="skill-title">React JS</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div data-aos="fade-right">
                                <div className={!isDark ? "single-skill !isDark text-dark" : "single-skill isNotDark text-light"}>
                                    <div class="service-ico">
                                        <span class="ico-circle"><i class="fas fa-database"></i></span>
                                    </div>
                                    <div class="service-content">
                                        <h3 className="skill-title">MongoDB</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div data-aos="fade-up-right">
                                <div className={!isDark ? "single-skill !isDark text-dark" : "single-skill isNotDark text-light"}>
                                    <div class="service-ico">
                                        <span class="ico-circle"><i class="fab fa-node"></i></span>
                                    </div>
                                    <div class="service-content">
                                        <h3 className="skill-title">Node JS</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div data-aos="fade-right">
                                <div className={!isDark ? "single-skill !isDark text-dark" : "single-skill isNotDark text-light"}>
                                    <div class="service-ico">
                                        <span class="ico-circle"><i class="fas fa-laptop-code"></i></span>
                                    </div>
                                    <div class="service-content">
                                        <h3 className="skill-title">Express JS</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div data-aos="fade-down">
                                <div className={!isDark ? "single-skill !isDark text-dark" : "single-skill isNotDark text-light"}>
                                    <div class="service-ico">
                                        <span class="ico-circle"><i class="fas fa-code-branch"></i></span>
                                    </div>
                                    <div class="service-content">
                                        <h3 className="skill-title">Marerial UI</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div data-aos="fade-up">
                                <div className={!isDark ? "single-skill !isDark text-dark" : "single-skill isNotDark text-light"}>
                                    <div class="service-ico">
                                        <span class="ico-circle"><i class="fab fa-bootstrap"></i></span>
                                    </div>
                                    <div class="service-content">
                                        <h3 className="skill-title">Bootstrap</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div data-aos="fade-left">
                                <div className={!isDark ? "single-skill !isDark text-dark" : "single-skill isNotDark text-light"}>
                                    <div class="service-ico">
                                        <span class="ico-circle"><i class="fab fa-codepen"></i></span>
                                    </div>
                                    <div class="service-content">
                                        <h3 className="skill-title">Codepen</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div data-aos="slide-right">
                                <div className={!isDark ? "single-skill !isDark text-dark" : "single-skill isNotDark text-light"}>
                                    <div class="service-ico">
                                        <span class="ico-circle"><i class="fab fa-css3-alt"></i></span>
                                    </div>
                                    <div class="service-content">
                                        <h3 className="skill-title">CSS 3</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skill;