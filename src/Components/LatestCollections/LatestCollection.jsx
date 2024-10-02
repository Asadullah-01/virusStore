import React, {useContext} from 'react';
import {useNavigate} from "react-router-dom";
import "../LatestCollections/LatestCollection.css";
import {GameContext} from "../../Context/GameContext";

const LatestCollection = () =>{

    const {new_collections} = useContext(GameContext);
    const navigate = useNavigate();

    const handleProductClick = (id) => {
        navigate(`/product/${id}`); // Navigate to the product page with the ID
    };
    return (
        <div className="LatestCollection">
            <h1>Latest Collection</h1>
            <hr/>
            <div className="Latest-game-grid" >
                {new_collections.map((item, i) => {
                    return <div key={i} className="Latest-game-card" data-aos="fade-up" onClick={()=>handleProductClick(item.id)}>
                        <img src={item.image} alt={item.name} className="Latest-game-image"/>
                        <h2>{item.name}</h2>
                        <p>{item.price}</p>
                    </div>
                })}
            </div>
        </div>
    )
}
export default LatestCollection;