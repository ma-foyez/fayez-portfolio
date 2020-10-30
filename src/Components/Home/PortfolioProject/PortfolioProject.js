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
        <section classNameName={isDark ? "project-dark" : "bg-white text-dark"} id="skill" id="project">
            <div classNameName="container">
                <h1 className="text-center">
                    Recent Work
                </h1>
                <div className="row text-center p-5">


                    <div className="col-md-4 text-center">
                        <div data-aos="fade-right" className={isDark ? "work-box text-dark shadow p-3 mb-5 bg-white rounded" : "shadow p-3 mb-5 bg-white rounded work-box work-light"}>
                            <div className="work-img">
                                <img src={project1} alt="project-img" className="img-fluid" />
                            </div>
                            <div className="work-content pt-3">
                                <h2 className="w-title">Creative Agency</h2>
                                <div className="w-more">
                                    <p className="w-ctegory mt-3">Dynamic Web Application</p>  <p className="w-date text-bold">October. 2020</p>
                                </div>
                                <div className="row Details justify-content-between m-3">
                                    <a href="https://creatives-agency.web.app/" target="_blank" className="btn btn-danger">View Demo</a>
                                    <a href="https://github.com/ma-foyez/creative-agency" target="_blank" className="btn btn-secondary">Source Code</a>
                                    <Link to="/notFound"><button href="#" target="_blank" className="btn resume-btn">See More</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 text-center">
                        <div data-aos="fade-right" className={isDark ? "work-box text-dark shadow p-3 mb-5 bg-white rounded" : "shadow p-3 mb-5 bg-white rounded work-box work-light"}>
                            <div className="work-img">
                                <img src={volunteer} alt="project-img" className="img-fluid" />
                            </div>
                            <div className="work-content pt-3">
                                <h2 className="w-title">Volunteer Network</h2>
                                <div className="w-more">
                                    <p className="w-ctegory mt-3">Dynamic Web Application</p>  <p className="w-date text-bold">October. 2020</p>
                                </div>
                                <div className="row Details justify-content-between m-3">
                                    <a href="https://volunteer-network-2.web.app/" target="_blank" className="btn btn-danger">View Demo</a>
                                    <a href="https://github.com/ma-foyez/volunteer-network-client" target="_blank" className="btn btn-secondary">Source Code</a>
                                    <Link to="/notFound"><button href="#" target="_blank" className="btn resume-btn">See More</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 text-center">
                        <div data-aos="fade-right" className={isDark ? "work-box text-dark shadow p-3 mb-5 bg-white rounded" : "shadow p-3 mb-5 bg-white rounded work-box work-light"}>
                            <div className="work-img">
                                <img src={travel} alt="project-img" className="img-fluid w-75" />
                            </div>
                            <div className="work-content pt-3">
                                <h2 className="w-title">Travel Guru</h2>
                                <div className="w-more">
                                    <p className="w-ctegory mt-3">Dynamic Web Application</p>  <p className="w-date text-bold">September. 2020</p>
                                </div>
                                <div className="row Details justify-content-between m-3">
                                    <a href="https://travel-guru1-c76b7.web.app/" target="_blank" className="btn btn-danger">View Demo</a>
                                    <a href="https://github.com/ma-foyez/travel-guru" target="_blank" className="btn btn-secondary">Source Code</a>
                                    <Link to="/notFound"><button href="#" target="_blank" className="btn resume-btn">See More</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 text-center">
                        <div data-aos="fade-left" className={isDark ? "work-box text-dark shadow p-3 mb-5 bg-white rounded" : "shadow p-3 mb-5 bg-white rounded work-box work-light"}>
                            <div className="work-img">
                                <img src={eSchool} alt="project-img" className="img-fluid w-75" />
                            </div>
                            <div className="work-content pt-3">
                                <h2 className="w-title">E-School</h2>
                                <div className="w-more">
                                    <p className="w-ctegory mt-3">Bootstrap Responsive Website</p>  <p className="w-date text-bold">August. 2020</p>
                                </div>
                                <div className="row Details justify-content-between m-3">
                                    <a href="https://mafayez-e-school.netlify.app/" target="_blank" className="btn btn-danger">View Demo</a>
                                    <a href="https://github.com/ma-foyez/E-School" target="_blank" className="btn btn-secondary">Source Code</a>
                                    <Link to="/notFound"><button href="#" target="_blank" className="btn resume-btn">See More</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 text-center">
                        <div data-aos="fade-left" className={isDark ? "work-box text-dark shadow p-3 mb-5 bg-white rounded" : "shadow p-3 mb-5 bg-white rounded work-box work-light"}>
                            <div className="work-img">
                                <img src={pinMatcher} alt="project-img" className="img-fluid w-75" />
                            </div>
                            <div className="work-content pt-3">
                                <h2 className="w-title">Pin Matcher Generator</h2>
                                <div className="w-more">
                                    <p className="w-ctegory mt-3">Vanila JavaScript</p>  <p className="w-date text-bold">July. 2020</p>
                                </div>
                                <div className="row Details justify-content-between m-3">
                                    <a href="https://mafayez-pin-matcher.netlify.app/" target="_blank" className="btn btn-danger">View Demo</a>
                                    <a href="https://github.com/ma-foyez/pin-matcher" target="_blank" className="btn btn-secondary">Source Code</a>
                                    <Link to="/notFound"><button href="#" target="_blank" className="btn resume-btn">See More</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 text-center">
                        <div data-aos="fade-left" className={isDark ? "work-box text-dark shadow p-3 mb-5 bg-white rounded" : "shadow p-3 mb-5 bg-white rounded work-box work-light"}>
                            <div className="work-img">
                                <img src={hipCamp} alt="project-img" className="img-fluid w-75" />
                            </div>
                            <div className="work-content pt-3">
                                <h2 className="w-title">Hip Camp</h2>
                                <div className="w-more">
                                    <p className="w-ctegory mt-3">A Camping Web Application</p>  <p className="w-date text-bold">July. 2020</p>
                                </div>
                                <div className="row Details justify-content-between m-3">
                                    <a href="https://mafayez-hipcamp.netlify.app/" target="_blank" className="btn btn-danger">View Demo</a>
                                    <a href="https://github.com/ma-foyez/HipCamp" target="_blank" className="btn btn-secondary">Source Code</a>
                                    <Link to="/notFound"><button href="#" target="_blank" className="btn resume-btn">See More</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/*end row*/}
                </div>
            </div>
        </section >
    );
};

export default PortfolioProject;