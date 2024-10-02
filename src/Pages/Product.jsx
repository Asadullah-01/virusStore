
import React, { useContext , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GameContext } from "../Context/GameContext";
import '../Pages/Css/Product.css';

const ProductPage = (product) => {


    useEffect(() => {
        window.scroll(0,0)
    }, []);

    const { id } = useParams(); // Get the ID from the URL
    const { all_game } = useContext(GameContext); // Access the game data

    const {addToCart} = useContext(GameContext)
    const game = all_game.find(item => item.id === parseInt(id));

    if (!game) {
        return <div>Game not found!</div>;
    }

    return (
        <div className="product-page">
            <div className="product-image">
                <img src={game.image} alt={game.name} />
            </div>
            <div className="product-details">
                <h1>{game.name}</h1>
                <p>Category: {game.category}</p>
                <p>{game.description}</p>
                <p>Minimum Requirements: {game.requirements}</p>
                <button className="add-to-cart-button" onClick={()=>addToCart(game)}>Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductPage;
