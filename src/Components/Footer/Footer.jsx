import React from "react";
import "../Footer/Footer.css";
import review from "../../Assets/rating-icons-nfs-esrb.svg";
import {Link} from "react-router-dom";
import ft1 from "../../Assets/activision-logo.png";
import ft2 from "../../Assets/atvi-shanghai-logo.png";
import ft3 from "../../Assets/infinity-ward-logo.png";
import ft4 from "../../Assets/treyarch-logo.png";


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer1">
                <div className="footer-title">
                    <p>Virus Tech Store </p>
                </div>
                <ul className="footer-links">
                    <Link to="/company"><li>Company</li></Link>
                    <Link to="allproduct">
                        <li>Products</li>
                    </Link>
                    <Link to="/aboutus"><li>About</li></Link>
                    <Link to="/contactus">ContactUs</Link>
                </ul>
            </div>

            <div className="footer-icons">
                <hr className="footer-icons-hr"/>

                <div className="footer-icons-container-row">
                    <div className="footer-icons-container">
                        <img src={review} alt=""/>
                    </div>
                    <div className="footer-icons-container">
                        <img src={ft1} alt=""/>
                    </div>
                    <div className="footer-icons-container">
                        <img src={ft2} alt=""/>
                    </div>
                    <div className="footer-icons-container">
                        <img src={ft3} alt=""/>
                    </div>
                    <div className="footer-icons-container">
                        <img src={ft4} alt=""/>
                    </div>
                </div>
            </div>

            <div className="footer-copyright">
                <hr/>
                <p> Copyright @2024 - All right Reserved</p>
            </div>
        </div>
    )
}

export default Footer;