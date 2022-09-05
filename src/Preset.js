import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./components/Header"
import Nav from "./components/Nav"
import About from "./components/About"

import "./index.css";

export default function Preset() {
    return(
        <div>
            <Header/>
            <Nav/>
            <About/>
        </div>
    )
}