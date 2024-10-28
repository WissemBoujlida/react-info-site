import React from "react"
import reactLogo from "../images/react-logo.png"
import "../style.css"

function Navbar() {
    return (
        <nav className="navbar">
            <img className="navbar--logo" src={reactLogo} alt="navbar logo" />
            <h3 className="navbar--logo-text">ReactFacts</h3>
            <h4 className="navbar--title">React Course - Project 1</h4>
        </nav>
    )
}

export default Navbar