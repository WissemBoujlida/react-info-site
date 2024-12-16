import React from "react"
import reactLogo from "../images/react-logo.png"
import "../style.css"

function Navbar(props) {
    return (
        <nav className={props.darkMode ? "dark" : ""}>
            <img className="navbar--logo" src={reactLogo} alt="navbar logo" />
            <h3 className="navbar--logo-text">ReactFacts</h3>
            <h4 className="navbar--title">React Course - Project 1</h4>
            <div className="toggler">
                <p className="toggler--light">Light</p>
                <div
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}

export default Navbar