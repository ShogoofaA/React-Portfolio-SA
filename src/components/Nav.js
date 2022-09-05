import React from "react";
import "../index.css"

function Nav({setPage, About, Portfolio, Resume, Contact}) {
    return (
    <>
        <div className="navBar">
            <button onClick={() => setPage(<About/>)} className="btn"> About Me</button>
            <button onClick={() => setPage(<Portfolio/>)} className="btn">Portfolio</button>
            <button onClick={() => setPage(<Resume/>)} className="btn">Resume</button>
            <button onClick={() => setPage(<Contact/>)} className="btn">Contact</button>
        </div>
    </>
    )
}

export default Nav;