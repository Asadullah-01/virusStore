import React, {useContext, useEffect} from 'react';
import "../Pages/Css/Cart.css";
import {GameContext} from "../Context/GameContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const Cart = ()=>{
    useEffect(() => {
        window.scroll(0,0)
    }, []);
    const {all_game, removeFromCart ,cartItems ,  getTotalCartAmount, getItemTotal } = useContext(GameContext);
    const cartTotalAmount = getTotalCartAmount();
    console.log('cartItems:', cartItems);
    console.log('all_game:', all_game);

    return (
        <div className="cart">
            <h1>Your Cart</h1>
            <div className="cart-items-header">
                <p>Title</p>
                <p>Category</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr/>



            <hr/>
            <div className="cart-total-section">
                <h2>Total: ${cartTotalAmount}</h2>
                <button className="checkout-button">Proceed to Checkout</button>
            </div>
        </div>
    )
}
export default Cart;