import React from "react";
import "./Social.css";

export default function Social() {
    return (
        <div className="social-media-div">
            <a href="https://github.com/ma-foyez" className="icon-button github" target="_blank">
                <i className="fab fa-github"></i>
                <span></span>
            </a>
            <a href="https://www.linkedin.com/in/ma-foyez/" className="icon-button linkedin" target="_blank">
                <i className="fab fa-linkedin-in"></i>
                <span></span>
            </a>

            <a href={`mailto:mafoyez.bd@gmail.com`} className="icon-button google" target="_blank">
                <i className="fab fa-google"></i>
                <span></span>
            </a>


            <a href="https://www.instagram.com/m.a_fayez32/" className="icon-button instagram" target="_blank">
                <i className="fab fa-instagram"></i>
                <span></span>
            </a>


            <a href="https://twitter.com/MAFayez3" className="icon-button twitter" target="_blank">
                <i className="fab fa-twitter"></i>
                <span></span>
            </a>


            <a href="https://medium.com/@mafoyez.bd" className="icon-button medium" target="_blank">
                <i className="fab fa-medium"></i>
                <span></span>
            </a>
        </div>
    );
}
