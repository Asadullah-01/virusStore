import React, {useContext, useEffect} from 'react';
import "./Css/AssassinCreed.css";
import pic1 from "../Assets/ac-bg1.jpg";
import pic2 from "../Assets/ac-bg2.jpg";
import pic3 from "../Assets/ac-bg3.jpg";
import ImageCarsoual from "../Components/ImageCarsoual/ImageCarsoual";
import Offer2 from "../Components/Offer2/Offer2";
import {GameContext} from "../Context/GameContext";
import all_strategy from "../Assets/all_strategy";
import {useNavigate} from "react-router-dom";

const AssassinCreed = () => {
    useEffect(() => {
        window.scroll(0,0)
    }, []);
    const {} = useContext(GameContext);
    const acimages = [pic1,pic2,pic3];

    const navigate = useNavigate();

    const handleProductClick = (id) => {
        navigate(`/product/${id}`); // Navigate to the product page with the ID
    };


    return (
        <>
            <div className="main">
                <div className="carousel-section">
                    <h1 className="carousel-title">Assassin's Creed Legacy</h1>
                    <p className="carousel-subtitle">Uncover the secrets of ancient orders and experience epic historical adventures.</p>
                    <ImageCarsoual images={acimages}/>
                    <button className="exploreMore-button">Explore More</button>
                </div>
            </div>
            <div className="game-grid"  >
                {all_strategy.map((item,i)=> {
                        return   <div key={i} className="game-card" data-aos="fade-up" onClick={()=>handleProductClick(item.id)}>
                            <img src={item.image} alt={item.name} className="game-image"/>
                            <h2>{item.name}</h2>
                            <p>{item.price}</p>
                        </div>
                })}
            </div>
            <Offer2/>
        </>
    )
}
export default AssassinCreed;