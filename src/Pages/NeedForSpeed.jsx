import React, {useContext, useEffect} from 'react';
import "./Css/NeedForSpeed.css";
import img1 from "../Assets/nfc-bg1.jpg";
import img2 from "../Assets/nfc-bg2.jpg";
import img3 from "../Assets/nfc-bg3.jpg";
import ImageCarsoual from "../Components/ImageCarsoual/ImageCarsoual";
import Offer3 from "../Components/Offer3/Offer3";
import {GameContext} from "../Context/GameContext";
import all_racing from "../Assets/all_racing";
import {useNavigate} from "react-router-dom";


const nfcImages = [img1,img2,img3];

const NeedForSpeed = () =>{
    useEffect(() => {
        window.scroll(0,0)
    }, []);
    const {} = useContext(GameContext)
    const navigate = useNavigate();

    const handleProductClick = (id) => {
        navigate(`/product/${id}`); // Navigate to the product page with the ID
    };

    return (
        <>
            <div className="main">
                <div className="carousel-section">
                    <h1 className="carousel-title">Need for Speed</h1>
                    <p className="carousel-subtitle">Experience the thrill of high-speed racing with iconic cars and
                        adrenaline-pumping gameplay.</p>
                    <ImageCarsoual images={nfcImages}/>
                    <button className="exploreMore-button">Explore More</button>
                </div>
            </div>
            <div className="nfc-game-grid">
                {all_racing.map((item, i) => {
                    return <div key={i} className="nfc-game-card" data-aos="fade-up" onClick={()=>handleProductClick(item.id)}>
                        <img src={item.image} alt={item.name} className="nfc-game-image"/>
                        <h2>{item.name}</h2>
                        <p>{item.price}</p>
                    </div>
                })}
            </div>
            <Offer3/>
        </>

    )
}
export default NeedForSpeed;