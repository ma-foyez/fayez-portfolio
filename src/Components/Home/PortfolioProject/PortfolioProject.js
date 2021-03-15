import React, { useContext } from 'react';
//import stock
import stock from "../../../assets/images/project/creative-agency.png";

import './PortfolioProject.css'
import StyleContext from '../../Shared/contexts/StyleContext';
import PortfolioInfo from "./PortfolioData/PortfolioData"
const PortfolioProject = () => {
    const { isDark } = useContext(StyleContext);
    return (
        <section iclassName={!isDark ? "project-dark" : "bg-white text-dark"} id="skill" id="project">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="title-box text-center">
                            <h3 className="title-a">Portfolio</h3>
                            <p className="subtitle-a">
                                Incididunt nostrud id aute culpa excepteur pariatur consequat
                                elit culpa nulla enim anim incididunt.
                           </p>

                            <div className="line-mf"></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        PortfolioInfo.length > 0 && PortfolioInfo.map((item, index) => (
                            <div className="col-md-4">
                                <div className="work-box shadow p-3 mb-5 bg-body rounded">
                                    <a href={item.image} data-lightbox="gallery-vmarine">
                                        <div className="work-img">
                                            <img src={item.image} alt="" className="img-fluid" />
                                        </div>
                                    </a>
                                    <div className="work-content">
                                        <h2 className="w-title">{item.title}</h2>
                                        <div className="w-more">
                                            <span className="w-ctegory">
                                                HTML5 CSS3 Bootstrap ReactJS
                                        </span>
                                        </div>
                                        <div class="text-center">
                                            <a href="https://volunteer-network-2.web.app/" target="_blank" className="btn btn-danger m-2">View Demo</a>
                                            <a href="https://github.com/ma-foyez/volunteer-network-client" target="_blank" className="btn btn-secondary m-2">Source Code</a>
                                        </div>
                                    </div>

                                    {
                                        item.gallery.length > 0 && item.gallery.map((sliderImage, index) => (
                                            <a href={sliderImage.img} data-lightbox="gallery-vmarine" style={{ display: "none" }}>
                                                jsx-a11y/anchor-has-content warning
                                            </a>
                                        ))
                                    }

                                </div>
                            </div>
                        ))
                    }



                </div>
            </div>
        </section>

    );
};

export default PortfolioProject;