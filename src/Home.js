import { Link } from "react-router-dom";
import React from "react";
import "./Home.css"

const Home = () => {

    const startButton = () => {
        console.log("you pressed the start button")
    }

    return (
        <div>
        <h1>Home Page</h1>
        <Link to="/first-page">
        <button className="start-button" onClick={startButton}>Start your journey</button>
        </Link>
        </div>
    )
}

export default Home;