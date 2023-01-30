import React from "react";

export default function Main(props){
    return(
        <>
            <div className="main-body">
                <div class="search-box">
                   <input type="search" id="search-input" placeholder="Search what you want!" />
                </div>
            </div>
            <div className="card--heading">
                <p>Here are some of the Equipments that you might like</p>
                <h3>Total items in cart <span>{props.cartCount}</span></h3>
            </div>
        </>
    )
}