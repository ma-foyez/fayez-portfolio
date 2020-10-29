import React, { useContext } from 'react';
import Particles from 'react-particles-js';
import StyleContext from '../../Shared/contexts/StyleContext';
import './Banner.css'
import profile from '../../../assets/images/DSC_1155 - Copy (2).png'
import Typical from 'react-typical'

const Banner = () => {
    const { isDark } = useContext(StyleContext);
   
    return (
        <div className={isDark ? "banner-dark" : "banner-white"}>
            <div className="container banner" style={{ zIndex: '999999' }}>
                <div className="row justify-content-center align-items-center pt-5 p-2 text-center">
                    <div className="col-md-4">
                        <div className="banner-img">
                            <img src={profile} className="img-fluid" alt="" />
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="banner-title">
                            <h2 >I'm M.A Fayez</h2>

                            <Typical
                                loop={Infinity}
                                wrapper="p"
                                steps={['Developer', 1000, 'Designer!', 1000]}
                            />
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