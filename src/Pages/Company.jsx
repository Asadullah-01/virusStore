import React, {useEffect} from 'react';
import "./Css/Company.css";

const Company = () => {

    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page when the component mounts
    }, []);

    return (
        <div className="company-container">
            <div className="company">
                <h1>Our Company</h1>
                <p>
                    Virus Tech Store was established in 2024 with the vision of becoming the go-to marketplace for games.
                    Over the past year, we have partnered with top game developers and brands to ensure the
                    authenticity of games and provide an unparalleled shopping experience.
                </p>
                <h2>Our Values</h2>
                <ul>
                    <li>Innovation: Pushing boundaries to enhance gaming experiences.</li>
                    <li>Trust: Building a platform that users can rely on.</li>
                    <li>Community: We believe in the power of bringing gamers together.</li>
                </ul>
            </div>
        </div>
    )
}
export default Company;