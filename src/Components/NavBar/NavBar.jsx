import React from 'react';
import "../NavBar/Navbar.css";
import {Link} from "react-router-dom";
import cart_icon from "../../Assets/cart_icon.png";

const NavBar = () =>{
    return (
        <div className="NavBar">
            <div className='NavBar-container'>
                <div className='h'>
                    <h1>V-T Store</h1>
                </div>
                <div className="NavBar-container-items">
                    <Link to="/">Home</Link>
                    <Link to="/nfc">NFC</Link>
                    <Link to="/cod">Call of duty</Link>
                    <Link to="/ac">Assassin creed</Link>

                </div>
                <div className="NavBar-login">
                    <Link to="login"><button>Login</button></Link>
                    <Link to="cart"><img src={cart_icon} alt=""/></Link>
                    <div className="nav-cart-count">0</div>
                </div>
            </div>
        </div>
    )
}
export default NavBar;