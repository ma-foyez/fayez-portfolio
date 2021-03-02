import React, { useContext, useEffect } from 'react';
import './Blog.css'
import blog1 from '../../../assets/images/blog/post-1.jpg'
import blog2 from '../../../assets/images/blog/post-2.jpg'
import blog3 from '../../../assets/images/blog/post-3.jpg'
import StyleContext from '../../Shared/contexts/StyleContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import fayez from '../../../assets/images/DSC_1155 - Copy (2).png'

const Blog = () => {
    const { isDark } = useContext(StyleContext);
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (

        <div className={!isDark ? "blog-dark text-light" : "bg-white text-dark"} id="blog">
            <div className="container">
                <div className="blog-info text-center">
                    <h3>BLOG</h3>
                </div>
                <div className="row p-5">
                    <div className="col-md-4">
                        <div data-aos="fade-left" className="card card-blog shadow p-3 mb-5 bg-white rounded">
                            <div className="card-img">
                                <a href="#blog"><img src={blog1} alt="" className="img-fluid" /></a>
                            </div>
                            <div className="card-body">
                                <div className="card-category-box">
                                    <div className="card-category">
                                        <h6 className="category">Travel</h6>
                                    </div>
                                </div>
                                <h3 className="card-title text-dark">See more ideas about Travel</h3>
                                <p className="card-description text-justify">
                                    Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis
                                    a pellentesque nec,
                                    egestas non nisi. </p>
                            </div>
                            <div className="card-footer">
                                <div className="post-author">
                                    <a href="#" blog>
                                        <img src={fayez} alt="" className="avatar rounded-circle img-thumbnail img-fuild" />
                                        <span className="author ml-3">M.A Foyez</span>
                                    </a>
                                </div>
                                <div className="post-date">
                                    <span className="ion-ios-clock-outline"></span> 10 min
                               </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div data-aos="fade-down" className="card card-blog shadow p-3 mb-5 bg-white rounded">
                            <div className="card-img">
                                <a href="#blog"><img src={blog2} alt="" className="img-fluid" /></a>
                            </div>
                            <div className="card-body">
                                <div className="card-category-box">
                                    <div className="card-category">
                                        <h6 className="category">Travel</h6>
                                    </div>
                                </div>
                                <h3 className="card-title text-dark">See more ideas about Travel</h3>
                                <p className="card-description text-justify">
                                    Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis
                                    a pellentesque nec,
                                    egestas non nisi. </p>
                            </div>
                            <div className="card-footer">
                                <div className="post-author">
                                    <a href="#" blog>
                                        <img src={fayez} alt="" className="avatar rounded-circle img-thumbnail img-fuild" />
                                        <span className="author ml-3">M.A Foyez</span>
                                    </a>
                                </div>
                                <div className="post-date">
                                    <span className="ion-ios-clock-outline"></span> 10 min
                               </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div data-aos="fade-right" className="card card-blog shadow p-3 mb-5 bg-white rounded">
                            <div className="card-img">
                                <a href="#blog"><img src={blog3} alt="" className="img-fluid" /></a>
                            </div>
                            <div className="card-body">
                                <div className="card-category-box">
                                    <div className="card-category">
                                        <h6 className="category">Travel</h6>
                                    </div>
                                </div>
                                <h3 className="card-title text-dark">See more ideas about Travel</h3>
                                <p className="card-description text-justify">
                                    Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis
                                    a pellentesque nec,
                                    egestas non nisi. </p>
                            </div>
                            <div className="card-footer">
                                <div className="post-author">
                                    <a href="#" blog>
                                        <img src={fayez} alt="" className="avatar rounded-circle img-thumbnail img-fuild" />
                                        <span className="author ml-3">M.A Foyez</span>
                                    </a>
                                </div>
                                <div className="post-date">
                                    <span className="ion-ios-clock-outline"></span> 10 min
                               </div>
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