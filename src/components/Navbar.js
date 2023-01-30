import React from "react";
import gymlogo from "../images/gym-logo.png"

export default function Navbar(){
    return(
            <div className="navbar">
                <div className="left-nav">
                    <img className="gym-logo" src ={gymlogo} alt="" />
                    <h2 className="heading">Fitness Center</h2>
                </div>
                <div className="nav-heads">
                    <ul className="nav-ul">
                        <li className="nav-items">Home</li>
                        <li className="nav-items">About</li>
                        <li className="nav-items">Services</li>
                        <li className="nav-items">Cart</li>
                        <li className="nav-items">Login</li>
                    </ul>
                </div>
            </div>
    )
}