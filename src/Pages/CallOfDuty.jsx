import React, {useContext, useEffect} from 'react';
import "./Css/CallOfDuty.css";
import pic1 from "../Assets/cod-bg1.jpg"
import pic2 from "../Assets/cod-bg2.jpg"
import pic3 from "../Assets/cod-bg3.jpg"
import ImageCarsoual from "../Components/ImageCarsoual/ImageCarsoual";
import Offer from "../Components/Offer/Offer";
import {GameContext} from "../Context/GameContext";
import all_racing from "../Assets/all_racing";
import all_shooting from "../Assets/all_shooting";
import {useNavigate} from "react-router-dom";


const CallOfDuty = () =>{
    useEffect(() => {
        window.scroll(0,0)
    }, []);

    const {} = useContext(GameContext)

    const codImages = [pic1,pic2,pic3];
    const navigate = useNavigate();

    const handleProductClick = (id) => {
        navigate(`/product/${id}`); // Navigate to the product page with the ID
    };

    return (
        <>
            <div className="main">
                <div className="carousel-section">
                    <h1 className="carousel-title">Modern Warfare Unleashed</h1>
                    <p className="carousel-subtitle2">Dive into epic firefights and strategic warfare in the ultimate
                        battle royale experience.</p>
                    <ImageCarsoual images={codImages}/>
                    <button className="exploreMore-button2">Explore More</button>
                </div>
            </div>
            <div className="cod-game-grid">
                {all_shooting.map((item, i) => {
                    return <div key={i} className="cod-game-card" data-aos="fade-up" onClick={()=>handleProductClick(item.id)}>
                        <img src={item.image} alt={item.name} className="cod-game-image"/>
                        <h2>{item.name}</h2>
                        <p>{item.price}</p>
                    </div>
                })}
            </div>

            <Offer/>
        </>

    )
}
export default CallOfDuty;