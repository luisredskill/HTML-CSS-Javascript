import React from "react"
import logo from "../react.png"

export default function Nav() {
    return (
        <nav>
            <div className="nav--containers">
                <img src={logo} alt="" className="nav--logo_img"></img>
                <h3 className="nav--logo_text">ReactFacts</h3>
            </div>
            <div className="nav--containers">
                <label className="switch" id="switch">
                    <input type="checkbox" id="checkbox"></input>
                        <span className="slider round"></span>
                </label>
                <h4 className="nav--title">React Course - Project 1</h4>
            </div>
        </nav>
    )
}

// var check = document.getElementById("checkbox")

// document.getElementById("checkbox").addEventListener("click", function() {
//     if (check.checked) {
//         alert("gg")
//     }
// })







