import React, {useContext, useEffect} from 'react';
import "../AllProduct/AllProduct.css";
import {GameContext} from "../../Context/GameContext";
import {useNavigate} from "react-router-dom";


const AllProduct=()=> {
    useEffect(() => {
        window.scroll(0,0)
    }, []);
    const {all_game} = useContext(GameContext);
    console.log(all_game);
    const navigate = useNavigate();

    const handleProductClick = (id) => {
        navigate(`/product/${id}`); // Navigate to the product page with the ID
    };

        return (
            <div className="all_game">
                <div className="all-game-banner">
                    <h1>All Games</h1>
                </div>
                <hr/>
                <div className="all-game-grid">
                    {all_game.map((item, i) => {
                        return <div key={i} className="all-game-card" data-aos="fade-up"
                                  onClick={()=>handleProductClick(item.id)}>
                            <img src={item.image} alt={item.name} className="all-game-image"/>
                            <h2>{item.name}</h2>
                            <p>{item.price}</p>
                        </div>
                    })}
                </div>
            </div>
        )

}
export default AllProduct;