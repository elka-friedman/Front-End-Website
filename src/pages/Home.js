import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.png";
import "../styles/Home.css";

function Home() {
    return (
        <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className="headerContainer">
                <h1> OUR NAME HERE </h1>
                <p> MORE CONTENT</p>
                <Link to="/menu">
                    <button> OUR SERVICES </button>
                </Link>
            </div>
        </div>
    );
}

export default Home;