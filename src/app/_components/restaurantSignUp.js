const RestaurantSignUp = () => {
    return(
        <>
            <h4>Sign Up Component</h4>
            <div className="input-wrapper">
                <input className="input-field" type="text" placeholder="Enter email id" />
            </div>
            <div className="input-wrapper">
                <input className="input-field" type="password" placeholder="Enter Password" />
            </div>
            <div className="input-wrapper">
                <input className="input-field" type="password" placeholder="Confirm Password" />
            </div>
            <div className="input-wrapper">
                <input className="input-field" type="text" placeholder="Enter Restaurant Name" />
            </div>
            <div className="input-wrapper">
                <input className="input-field" type="text" placeholder="Enter City" />
            </div>
            <div className="input-wrapper">
                <input className="input-field" type="text" placeholder="Enter Full Address" />
            </div>
            <div className="input-wrapper">
                <input className="input-field" type="text" placeholder="Enter Contact No." />
            </div>
            <div className="input-wrapper">
                <button className="button">Sign Up</button>
            </div>
        </>
    )
}
export default RestaurantSignUp;