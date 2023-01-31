import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Login from "./components/Login"
import Footer from "./components/Footer"
import Equipment from "./components/Equipment"
import Equipdata from "./components/Equipdata"

export default function App(){
    const [itemsInCart, setItemsInCart] = React.useState(0)

    function addToCart(event){
        if(event.target.textContent === "Add to cart"){
            setItemsInCart(prevCount => prevCount+1)
            event.target.textContent = "Remove from cart"
        }
        else{
            setItemsInCart(prevCount => prevCount-1)
            event.target.textContent = "Add to cart"
        }
    }

    const EquipmentList = Equipdata.map(items => {
        return(
            <Equipment 
            image={items.image}
            title={items.title}
            price={items.price} 
            offer={items.offer}
            cartCount = {itemsInCart} 
            handleClick ={addToCart}/>
        )
    })

    return(
        <div>
            <Navbar />
            <Main cartCount = {itemsInCart}/>
            <div className="cards">
                {EquipmentList}
            </div>
            <Login />
            <Footer />
        </div>
    )
}
