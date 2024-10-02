import React from 'react';
import "../Offer2/Offer2.css";
import logo from "../../Assets/assasin-creed0origin.png";


const Offer2 = ()=>{
    return (
        <div className="offer2">
            <div className="offer2-logo">
                <img src={logo} alt=""/>
                <button> See More</button>
            </div>
        </div>
    )
}
export default Offer2;