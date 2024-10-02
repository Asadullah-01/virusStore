import React, {useEffect} from 'react';
import "./Css/AboutUS.css";


const AboutUs = () => {

    useEffect(() => {
        window.scroll(0,0)
    }, []);
    return (
        <div className="aboutus-container">
            <div className="about-us">
                <h1>About Virus Tech Store</h1>
                <p>
                    Virus Tech Store is a leading e-commerce platform for buying and selling skins of popular games like
                    CS:GO, Assassin’s Creed, Call of Duty, and Need for Speed. Our mission is to provide a safe,
                    user-friendly
                    environment where gamers can exchange and purchase skins.
                </p>
                <h2>Our Mission</h2>
                <p>
                    To deliver the best skin trading experience for gamers worldwide, ensuring transparency, safety, and
                    customer satisfaction.
                </p>
                <h2>Our Team</h2>
                <p>
                    Founded by passionate gamers, Virus Tech Store has grown into a dedicated team of developers, designers,
                    and support staff, all working to enhance the gaming experience.
                </p>
            </div>
        </div>
    )
}
export default AboutUs;