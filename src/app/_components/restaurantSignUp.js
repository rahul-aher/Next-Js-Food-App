import { useState } from "react";

const RestaurantSignUp = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [c_password, setC_password] = useState("");
    const [restoname, setRestoname] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    const [contact, setContact] = useState("");

    const handleSignUp=()=>{
        console.log(email,password,c_password,restoname,city,address,contact); 
    }

    return(
        <>
            <form>
            <h4>Sign Up Component</h4>
            <div className="input-wrapper">
                <input className="input-field" type="email" placeholder="Enter email id" autoComplete="email" 
                value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className="input-wrapper">
                <input className="input-field" type="password" placeholder="Enter Password" autoComplete="current-password" 
                value={password} onChange={(e)=>setPassword(e.target.value)} required />
            </div>
            <div className="input-wrapper">
                <input className="input-field" type="password" placeholder="Confirm Password" autoComplete="current-confirm-password" 
                value={c_password} onChange={(e)=>setC_password(e.target.value)} required />
            </div>
            <div className="input-wrapper">
                <input className="input-field" type="text" placeholder="Enter Restaurant Name" autoComplete="resto" 
                value={restoname} onChange={(e)=>setRestoname(e.target.value)} />
            </div>
            <div className="input-wrapper">
                <input className="input-field" type="text" placeholder="Enter City" 
                autoComplete="city" 
                value={city} onChange={(e)=>setCity(e.target.value)} />
            </div>
            <div className="input-wrapper">
                <input className="input-field" type="text" placeholder="Enter Full Address" 
                autoComplete="address" 
                value={address} onChange={(e)=>setAddress(e.target.value)} />
            </div>
            <div className="input-wrapper">
                <input className="input-field" type="text" placeholder="Enter Contact No." 
                autoComplete="contact" 
                value={contact} onChange={(e)=>setContact(e.target.value)} />
            </div>
            <div className="input-wrapper">
                <button className="button" type="button" onClick={handleSignUp}>Sign Up</button>
            </div>
            </form>
        </>
    )
}
export default RestaurantSignUp;