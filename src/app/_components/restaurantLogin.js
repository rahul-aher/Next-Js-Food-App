const RestaurantLogin = () => {
    return(
        <>
            <h4>Login Component</h4>
            <div className="input-wrapper">
                <input className="input-field" type="text" placeholder="Enter email id" />
            </div>
            <div className="input-wrapper">
                <input className="input-field" type="password" placeholder="Enter Password" />
            </div>
            <div className="input-wrapper">
                <button className="button">Login</button>
            </div>
        </>
    )
}
export default RestaurantLogin;