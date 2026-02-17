"use client"
import { useState } from "react";
import "./style.css";
import RestaurantLogin from "../_components/RestaurantLogin";
import RestaurantSignUp from "../_components/RestaurantSignUp";
import RestaurantHeader from "../_components/RestaurantHeader";
import Footer from "../_components/Footer";



const Restaurant = () => {

    const [login, setLogin] = useState(true);

    return(
            <>
            
            <div className="container">
                <RestaurantHeader />
                <h4>Restaurant Login / Sign Up Page</h4>
                {
                    login ? <RestaurantLogin /> : <RestaurantSignUp />
                }
                
                <button className="button-link" onClick={() => setLogin(!login)}>
                    {login ? "Do not have an account? Sign Up" : "Already Have an account? Login"}
                </button>
                <Footer />
            </div>
            </>
    );
}

export default Restaurant;