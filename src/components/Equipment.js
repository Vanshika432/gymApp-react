import React from "react"
import "../css/Card.css"

export default function Equipment(items){
    return(
        <div className="card--list">
            <div className="card">
                {items.offer && <div className="card-tag">Special discount</div>}
                <img src={items.image} className="card--img" alt=""/>
                <p>{items.title}</p>
                <p>₹{items.price}</p>
                <div className="card-buttons">
                    <button id="buy-btn" className="card-btn">Buy Now</button>
                    <button id="add-btn" className="card-btn" onClick={items.handleClick}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}