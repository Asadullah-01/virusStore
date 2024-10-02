import React, {createContext, useEffect, useState} from 'react';
import games from "../Assets/all_game";
import NewCollections from "../Assets/new_collections";
import Racing from "../Assets/all_racing";
import Strategy from "../Assets/all_strategy";
import Shooting from "../Assets/all_shooting";

export const GameContext = createContext(null);


const GameContextProvider = (props)=>{
    const getDefaultCart = () => {
        let cart = {}
        for (let index = 0; index < 300+1; index++) {
            cart[index] = 0;

        }
        return cart;
    }
    const [all_game , setAllGame] = useState(games);
    const [new_collections,setNew_collections]= useState(NewCollections);
    const [all_strategy,setNew_setAll_strategy]= useState(Strategy);
    const [all_racing,setAll_racing]= useState(Racing);
    const [all_shooting,setAll_Shooting]= useState(Shooting);
    const [cart, setCart] = useState([]);
    const [cartItems, setCartItems] = useState(getDefaultCart());


    const addToCart = (game) => {
        if (!game || !game.id) {
            console.error("Invalid game object:", game);
            return; // Exit if game is invalid
        }

        console.log("Adding to cart:", game);
        setCart((prevCart) => {
            const isAlreadyInCart = prevCart.find(item => item.id === game.id);
            console.log("Is already in cart:", isAlreadyInCart);

            const newCartItems = {
                ...cartItems,
                [game.id]: isAlreadyInCart ? (cartItems[game.id] || 0) + 1 : 1
            };
            console.log("New cart items:", newCartItems);

            setCartItems(newCartItems);
            return isAlreadyInCart ? prevCart : [...prevCart, game];
        });
        alert("Game Added to Cart")
    };
    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== id));
    };
    const getTotalCartAmount = () => {
        return Object.keys(cartItems).reduce((total, id) => {
            const game = all_game.find((game) => game.id === id);
            return game ? total + game.price * cartItems[id] : total;
        }, 0);
    };
    const getItemTotal = (id) => {
        const game = all_game.find((game) => game.id === id);
        return game ? game.price * cartItems[id] : 0;
    };

    const ContextValue = {
        all_game ,
        new_collections,
        all_shooting,
        all_strategy,
        all_racing ,
        cart,
        addToCart ,
        removeFromCart,
        getItemTotal,
        getTotalCartAmount
    }


    return (
        <GameContext.Provider value={ContextValue}>
            {props.children}
        </GameContext.Provider>
    )
}
export default GameContextProvider;