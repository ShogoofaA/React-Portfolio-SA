import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio"
import Resume from "./components/Resume"
import Contact from "./components/Contact"

import "./index.css";

export default function Preset() {
    const [page, setPage] = useState(<About/>)
    return(
        <div>
            <Header/>
            <div className="Content-Container">
            <Nav setPage={setPage} About={About} Portfolio={Portfolio} Resume={Resume} Contact={Contact}/>
            {page}
            </div>
            {/* <About/> */}
        </div>
    )
}