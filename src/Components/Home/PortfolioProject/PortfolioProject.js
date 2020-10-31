import React, { useContext, useEffect } from 'react';
import StyleContext from '../../Shared/contexts/StyleContext';
import './PortfolioProject.css'
import project1 from '../../../assets/images/project/creative-agency.png'
import volunteer from '../../../assets/images/project/volunteer.png'
import travel from '../../../assets/images/project/travel.png'
import eSchool from '../../../assets/images/project/ESchool.png'
import pinMatcher from '../../../assets/images/project/pin-matcher.png'
import hipCamp from '../../../assets/images/project/hipcamp.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
const PortfolioProject = () => {
    const { isDark } = useContext(StyleContext);
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])

    return (
        <section className={isDark ? "project-dark" : "bg-white text-dark"} id="skill" id="project">
            <div className="container">
                <h1 className="text-center">
                    Recent Work
                </h1>
                <div className="row p-3">
                    <div className="col-md-4 text-center">
                        <div data-aos="fade-left" className={isDark ? "card portfolio text-dark shadow p-3 mb-5 bg-white rounded" : " card shadow p-3 mb-5 bg-white rounded portfolio"}>
                            <img src={project1} alt="project-img" className="card-img-top" />
                            <div class="card-body mt-3">
                                <h4 class="card-title">Creative Agency</h4>
                                <p class="card-text">A Dynamic Web Application <br /> <strong>October,2020</strong> </p>
                            </div>
                            <div class="text-center">
                                <a href="https://creatives-agency.web.app/" target="_blank" className="btn btn-danger m-2">View Demo</a>
                                <a href="https://github.com/ma-foyez/creative-agency" target="_blank" className="btn btn-secondary m-2">Source Code</a>
                                <Link to="/notFound"><button href="#" target="_blank" className="btn resume-btn m-2">See More</button></Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 text-center">
                        <div data-aos="fade-left" className={isDark ? "card portfolio text-dark shadow p-3 mb-5 bg-white rounded" : " card shadow p-3 mb-5 bg-white rounded portfolio"}>
                            <img src={volunteer} alt="project-img" className="card-img-top" />

                            <div class="card-body mt-3">
                                <h4 class="card-title">Volunteer Network</h4>
                                <p class="card-text">A Dynamic Web Application <br /> <strong>October,2020</strong> </p>
                            </div>
                            <div class="text-center">
                                <a href="https://volunteer-network-2.web.app/" target="_blank" className="btn btn-danger m-2">View Demo</a>
                                <a href="https://github.com/ma-foyez/volunteer-network-client" target="_blank" className="btn btn-secondary m-2">Source Code</a>
                                <Link to="/notFound"><button href="#" target="_blank" className="btn resume-btn m-2">See More</button></Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 text-center">
                        <div data-aos="fade-left" className={isDark ? "card portfolio text-dark shadow p-3 mb-5 bg-white rounded" : " card shadow p-3 mb-5 bg-white rounded portfolio"}>
                            <img src={travel} alt="project-img" className="card-img-top" />

                            <div class="card-body mt-3">
                                <h4 class="card-title">Travel Guru</h4>
                                <p class="card-text">A Dynamic Web Application <br /> <strong>October,2020</strong> </p>
                            </div>
                            <div class="text-center">
                                <a href="https://travel-guru1-c76b7.web.app/" target="_blank" className="btn btn-danger m-2">View Demo</a>
                                <a href="https://github.com/ma-foyez/travel-guru" target="_blank" className="btn btn-secondary m-2">Source Code</a>
                                <Link to="/notFound"><button href="#" target="_blank" className="btn resume-btn m-2">See More</button></Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 text-center">
                        <div data-aos="fade-left" className={isDark ? "card portfolio text-dark shadow p-3 mb-5 bg-white rounded" : " card shadow p-3 mb-5 bg-white rounded portfolio"}>
                            <img src={eSchool} alt="project-img" className="card-img-top" />

                            <div class="card-body mt-3">
                                <h4 class="card-title">E-School</h4>
                                <p class="card-text">Bootstrap Responsive Website <br /> <strong>August, 2020</strong> </p>
                            </div>
                            <div class="text-center">
                                <a href="https://mafayez-e-school.netlify.app/" target="_blank" className="btn btn-danger m-2">View Demo</a>
                                <a href="https://github.com/ma-foyez/E-School" target="_blank" className="btn btn-secondary m-2">Source Code</a>
                                <Link to="/notFound"><button href="#" target="_blank" className="btn resume-btn m-2">See More</button></Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 text-center">
                        <div data-aos="fade-left" className={isDark ? "card portfolio text-dark shadow p-3 mb-5 bg-white rounded" : " card shadow p-3 mb-5 bg-white rounded portfolio"}>
                            <img src={pinMatcher} alt="project-img" className="card-img-top" />

                            <div class="card-body mt-3">
                                <h4 class="card-title">Pin Matcher </h4>
                                <p class="card-text">Vanila JavaScript <br /> <strong>October,2020</strong> </p>
                            </div>
                            <div class="text-center">
                                <a href="https://mafayez-pin-matcher.netlify.app/" target="_blank" className="btn btn-danger m-2">View Demo</a>
                                <a href="https://github.com/ma-foyez/pin-matcher" target="_blank" className="btn btn-secondary m-2">Source Code</a>
                                <Link to="/notFound"><button href="#" target="_blank" className="btn resume-btn m-2">See More</button></Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 text-center">
                        <div data-aos="fade-left" className={isDark ? "card portfolio text-dark shadow p-3 mb-5 bg-white rounded" : " card shadow p-3 mb-5 bg-white rounded portfolio"}>
                            <img src={hipCamp} alt="project-img" className="card-img-top" />

                            <div class="card-body mt-3">
                                <h4 class="card-title">Camping Application</h4>
                                <p class="card-text">Vanila JavaScript <br /> <strong>October,2020</strong> </p>
                            </div>
                            <div class="text-center">
                                <a href="https://mafayez-hipcamp.netlify.app/" target="_blank" className="btn btn-danger m-2">View Demo</a>
                                <a href="https://github.com/ma-foyez/HipCamp" target="_blank" className="btn btn-secondary m-2">Source Code</a>
                                <Link to="/notFound"><button href="#" target="_blank" className="btn resume-btn m-2">See More</button></Link>
                            </div>
                        </div>
                    </div>



                    {/*row close */}
                </div>
            </div>
        </section >
    );
};

export default PortfolioProject;