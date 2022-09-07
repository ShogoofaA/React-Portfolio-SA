import React from "react";
import CarpeDiem from "../Images/CarpeDiem.png"
import "../index.css"

function Portfolio() {
    return (
        <>
        <div className="content-Container" >
            <div className="box1">
                <img src={CarpeDiem} width="300rem" height= "200rem" alt="Logo" />
                <div class="caption">Carpe Diem</div>
                <a className="Link"href="https://github.com/ShogoofaA/Carpe-Diem" target="_blank" rel="noopener noreferrer">Link to Project</a>
            </div>
            <div className="box2">
                <img src={CarpeDiem} width="300rem" height= "200rem" alt="Logo" />
                <div class="caption">Carpe Diem</div>
                <a className="Link"href="https://github.com/ShogoofaA/Carpe-Diem" target="_blank" rel="noopener noreferrer">Link to Project</a>
            </div>
            <div className="box3">
                <img src={CarpeDiem} width="300rem" height= "200rem" alt="Logo" />
                <div class="caption">Carpe Diem</div>
                <a className="Link"href="https://github.com/ShogoofaA/Carpe-Diem" target="_blank" rel="noopener noreferrer">Link to Project</a>
            </div>
            <div className="box4">
                <img src={CarpeDiem} width="300rem" height= "200rem" alt="Logo" />
                <div class="caption">Carpe Diem</div>
                <a className="Link"href="https://github.com/ShogoofaA/Carpe-Diem" target="_blank" rel="noopener noreferrer">Link to Project</a>
            </div>
            <div className="box4">
                <img src={CarpeDiem} width="300rem" height= "200rem" alt="Logo" />
                <div class="caption">Carpe Diem</div>
                <a className="Link"href="https://github.com/ShogoofaA/Carpe-Diem" target="_blank" rel="noopener noreferrer">Link to Project</a>
            </div>
            <div className="box4">
                <img src={CarpeDiem} width="300rem" height= "200rem" alt="Logo" />
                <div class="caption">Carpe Diem</div>
                <a className="Link"href="https://github.com/ShogoofaA/Carpe-Diem" target="_blank" rel="noopener noreferrer">Link to Project</a>
            </div>
        </div>
      
        </>
    )
}

export default Portfolio;