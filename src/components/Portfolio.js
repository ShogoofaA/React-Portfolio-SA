import React from "react";
import CarpeDiem from "../Images/CarpeDiem.png"
import DynamicMemes from "../Images/DynamicMemes.png"
import MarioQuiz from "../Images/MarioQuiz.png"
import NiftyCalendar from "../Images/NiftyCalendar.png"
import NoteCollector from "../Images/NoteCollector.png"
import TeamGenerator from "../Images/TeamGenerator.png"



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
                <img src={DynamicMemes} width="300rem" height= "200rem" alt="Logo" />
                <div class="caption">Dynamic Memes</div>
                <a className="Link"href="https://github.com/ShogoofaA/Dynamic-Memes" target="_blank" rel="noopener noreferrer">Link to Project</a>
            </div>
            <div className="box3">
                <img src={MarioQuiz} width="300rem" height= "200rem" alt="Logo" />
                <div class="caption">Mario Quiz</div>
                <a className="Link"href="https://shogoofaa.github.io/Mario-Quiz/" target="_blank" rel="noopener noreferrer">Link to Project</a>
            </div>
            <div className="box4">
                <img src={NiftyCalendar} width="300rem" height= "200rem" alt="Logo" />
                <div class="caption">Nifty Calendar</div>
                <a className="Link"href="https://github.com/ShogoofaA/Nifty-Calendar" target="_blank" rel="noopener noreferrer">Link to Project</a>
            </div>
            <div className="box5">
                <img src={NoteCollector} width="300rem" height= "200rem" alt="Logo" />
                <div class="caption">Note Collector</div>
                <a className="Link"href="https://github.com/ShogoofaA/Note-Collector" target="_blank" rel="noopener noreferrer">Link to Project</a>
            </div>
            <div className="box6">
                <img src={TeamGenerator} width="300rem" height= "200rem" alt="Logo" />
                <div class="caption">Team Generator</div>
                <a className="Link"href="https://github.com/ShogoofaA/Team-Profile-Generator" target="_blank" rel="noopener noreferrer">Link to Project</a>
            </div>
        </div>
      
        </>
    )
}

export default Portfolio;