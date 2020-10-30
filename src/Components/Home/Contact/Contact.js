import React, { useContext } from 'react';
import StyleContext from '../../Shared/contexts/StyleContext';
import './Contact.css'
const Contact = () => {
    const { isDark } = useContext(StyleContext);

    return (
        <section classNameName={isDark ? "skill-dark contact" : "bg-white text-dark contact"} id="contact">
           
        </section>
    );
};

export default Contact;