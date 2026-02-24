const RestaurantLogin = () => {
    return(
        <>
        <form>
            <h4>Login Component</h4>
            <div className="input-wrapper">
                <input className="input-field" type="email" placeholder="Enter email id" autoComplete="email"  />
            </div>
            <div className="input-wrapper">
                <input className="input-field" type="password" autoComplete="passsword" placeholder="Enter Password" />
            </div>
            <div className="input-wrapper">
                <button type="button" className="button">Login</button>
            </div>
            </form>
        </>
    )
}
export default RestaurantLogin;