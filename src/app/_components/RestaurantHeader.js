import Link from "next/link";

const RestaurantHeader = () => {
    return(
        <div className="header-wrapper">
            <div className="logo">
                <img style={{width:100}} src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_260/portal/m/seo/Logos/Swiggy/Swiggy%20logo-2.png" />
            </div>

            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/">Login/Sign Up</Link>    
                </li>    
                <li>    
                    <Link href="/">Profile</Link>
                </li>
            </ul>
        </div>
    )
}

export default RestaurantHeader;