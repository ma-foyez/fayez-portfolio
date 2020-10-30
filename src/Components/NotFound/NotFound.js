import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section className="container p-5">
            <div className="alert alert-primary text-center" role="alert">
                <h1 className="display-3"><strong>Now I'm Very sick</strong></h1>
                <h2 className="display-4">
                    Update coming soon Inshallah!
               </h2>
               <Link to="/home"><button className="btn resume-btn">Go Back Home Page</button></Link>
            </div>
        </section>
    );
};

export default NotFound;