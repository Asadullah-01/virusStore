import React from 'react';
import "../Offer/Offer.css";
import logo from "../../Assets/call-of-duty-modern-warfare-3-logo-png-transparent.png";

const Offer = () => {
    return (
        <div className="offer">
            <h1>Latest Collection</h1>
            <hr/>
            <div className="offer-logo">
                <img src={logo} alt=""/>
                <button> See More </button>
            </div>
        </div>
    )
}
export default Offer;
