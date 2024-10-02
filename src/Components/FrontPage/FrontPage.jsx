import React, {useEffect, useState} from 'react';
import "../FrontPage/FrontPage.css";
import video1 from "../../Assets/bg1.mp4";
import video2 from "../../Assets/bg2.mp4";
import video3 from "../../Assets/bg3.mp4";
import VideoCarousel from "../VideoCarsouel/VideoCarsouel";
import Offer from "../Offer/Offer";
import LatestCollection from "../LatestCollections/LatestCollection";
const FrontPage = ()=>{

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
const videos = [video1,video2,video3];

    return (
        <>
        <div className="App">
            <VideoCarousel videos={videos}/>
            <h1 className="carousel-header">"Experience the Thrill: Race, Battle, and Conquer!"</h1>
            <p className="carousel-subheader">Dive into the worlds of Need for Speed, Call of Duty, and Assassin’s
                Creed</p>
            <button className="explore-button">Explore</button>
        </div>
            <LatestCollection/>
            <Offer/>
        </>
    )
}
export default FrontPage;