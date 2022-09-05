import React from "react";
import "../index.css"

function Nav() {
    return (
    <>
        <div className="navBar">
            <button className="btn"> About Me</button>
            <button className="btn">Portfolio</button>
            <button className="btn">Resume</button>
            <button className="btn">Contact</button>
        </div>
    </>
    )
}

export default Nav;