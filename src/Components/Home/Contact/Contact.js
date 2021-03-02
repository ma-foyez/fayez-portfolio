import React, { useContext } from 'react';
import StyleContext from '../../Shared/contexts/StyleContext';
import './Contact.css'
import profilePhoto from '../../../assets/images/DSC_1155 - Copy (2).png'
import emailjs from 'emailjs-com';
import conIcon from '../../../assets/images/icon/con1.png'
const Contact = () => {
    const { isDark } = useContext(StyleContext);

    // send email function 
    function sendEmail(e) {
        e.preventDefault();
        e.stopPropagation();
        emailjs.sendForm('Gmail', 'fayez-portfolio', e.target, 'user_KIYWJuUGJM0ulWTCZl0Ea')
            .then((result) => {
                console.log(result.text);
                alert('Your email has been received successfully. I will contact you as soon as posible')
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <>
            <section className={!isDark ? "contact-dark contact" : "text-dark contact-light"} id="contact">
                <div className="contact">
                    <div className="container pt-5">
                        <div className="contact-heading text-center">
                            <a href="">
                                <small> Contact Me </small> <br />
                                <img src={conIcon} alt="" />
                            </a>
                        </div>
                        <div className="row  pt-3 mt-5">
                            <div className="col-md-5">
                                <div className="title-box-2 pt-4 pt-md-0">
                                    <h5 class="title-left">
                                        Get in touch
                                    </h5>
                                </div>

                                <div className="profile ">
                                    <div className="d-flex justify-content-center">
                                        <div className="profile-img">
                                            <img src={profilePhoto} className="img-fluid img-thumbnail rounded-circle" alt="" />
                                        </div>
                                    </div>
                                    <div className="details mt-5">
                                        <p><i class="fas fa-map-marked-alt"></i> North Charlakshya, Karnaphuli, Chattogram</p>
                                        <p><i class="fas fa-phone-volume"></i> +8801871929132</p>
                                        <p><i class="fas fa-graduation-cap"></i> <strong>Department of Computer Technology</strong>, Chittagong Polytechnic Institute</p>
                                        <p><i class="fas fa-envelope-open-text"></i> mafoyez.bd@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <form action="" onSubmit={sendEmail} className="contact-form">
                                    <div className="form-group">
                                        <input className="form-control" type="text" placeholder="Your Name" name="name" required />
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" type="email" placeholder="Your Email" name="email" required />
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" type="text" placeholder="Subject" name="subject" required />
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" name="message" id="" cols="25" rows="10" required></textarea>
                                    </div>
                                    <input className="btn btn-secondary" type="submit" value="submit" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;