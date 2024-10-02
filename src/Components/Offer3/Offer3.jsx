import React from 'react';
import "../Offer3/Offer3.css";
import logo from "../../Assets/need-for-speed.png";


const Offer3 = () =>{
    return (
        <div className="offer3">
            <div className="offer3-logo">
                <img src={logo} alt=""/>
                <button> See More</button>
            </div>
        </div>
    )
}
export default Offer3;