"use client"
import { useState } from "react";
import RestaurantLogin from "../_components/restaurantLogin";
import RestaurantSignUp from "../_components/restaurantSignUp";

const Restaurant = () => {

    const [login, setLogin] = useState(true);

    return(
            <>
            <div className="container">
                <h4>Restaurant Login / Sign Up Page</h4>
                {
                    login ? <RestaurantLogin /> : <RestaurantSignUp />
                }
                
                <button className="button-link" onClick={() => setLogin(!login)}>
                    {login ? "Do not have an account? Sign Up" : "Already Have an account? Login"}
                </button>
            </div>
            </>
    );
}

export default Restaurant;