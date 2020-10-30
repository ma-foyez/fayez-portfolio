import React, { useContext, useEffect } from 'react';
import './Blog.css'
import blog1 from '../../../assets/images/blog/b.jpg'
import blog2 from '../../../assets/images/blog/p4.jpg'
import blog3 from '../../../assets/images/blog/p5.jpg'
import StyleContext from '../../Shared/contexts/StyleContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Blog = () => {
    const { isDark } = useContext(StyleContext);
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (

        <div className={isDark ? "blog-dark text-light" : "bg-white text-dark"} id="blog">
            <div className="container">
                <div className="blog-info text-center">
                    <h3>BLOG</h3>
                </div>
                <div className="row p-5">
                    <div className="col-md-4">
                        <div data-aos="fade-right" className={isDark ? "blog-grid text-dark shadow p-3 mb-5 bg-white rounded" : "shadow p-3 mb-5 bg-white rounded blog-grid work-light"}>
                            <a href="single.html"><img src={blog1} alt="" /></a>
                            <div className="blog-text">
                                <a href="#">Nature is lethal but it doesn't hold a candle to man.</a>
                                <div className="stripa"></div>
                                <p>Your bones don't break, mine do. That's clear. Your cells react to bacteria
						and viruses differently than mine. You don't get sick, I do.</p>
                            </div>

                            <div className="blog-para">
                                <ul>
                                    <li><a href="#">3 Comments</a></li>
                                    <li><a href="#">8 Share</a></li>
                                </ul>
                            </div>
                          
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div data-aos="fade-up" className={isDark ? "blog-grid text-dark shadow p-3 mb-5 bg-white rounded" : "shadow p-3 mb-5 bg-white rounded blog-grid work-light"}>
                            <a href="#"><img src={blog2} alt="" /></a>
                            <div className="blog-text">
                                <a href="#">Nature is lethal but it doesn't hold a candle to man.</a>
                                <div className="stripa"></div>
                                <p>Your bones don't break, mine do. That's clear. Your cells react to bacteria
						and viruses differently than mine. You don't get sick, I do.</p>
                            </div>

                            <div className="blog-para">
                                <ul>
                                    <li><a href="#">3 Comments</a></li>
                                    <li><a href="#">8 Share</a></li>
                                </ul>
                            </div>
                        
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div data-aos="fade-left" className={isDark ? "blog-grid text-dark shadow p-3 mb-5 bg-white rounded" : "shadow p-3 mb-5 bg-white rounded blog-grid work-light"}>
                            <a href="single.html"><img src={blog3} alt="" /></a>
                            <div className="blog-text">
                                <a href="#">Nature is lethal but it doesn't hold a candle to man.</a>
                                <div className="stripa"></div>
                                <p>Your bones don't break, mine do. That's clear. Your cells react to bacteria
						and viruses differently than mine. You don't get sick, I do.</p>
                            </div>

                            <div className="blog-para">
                                <ul>
                                    <li><a href="#">3 Comments</a></li>
                                    <li><a href="#">8 Share</a></li>
                                </ul>
                            </div>
                           
                        </div>
                    </div>
                   
                    {/*row close*/}
                </div>
            </div>
        </div>
    );
};

export default Blog;