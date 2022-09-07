import React from 'react';
import "../index.css"

function ContactForm() {
    return (
        <section id="contact">
            <h1 className="contact">Contact Me</h1>
                <div>
                    <div className="name">Input your name here:</div>
                    <input type="text" />
                    <div className="email">Input your Email Address here:</div>
                    <input type="email"/>
                    <div className="message">Please leave me a Message here:</div>
                    <input type="text" />
                <button type="submit" id="submit">Submit</button>
                </div>
        </section>
    );
}
    
export default ContactForm;