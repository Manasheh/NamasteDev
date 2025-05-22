import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    const [ login, setLogin ] = useState('Login')

    const handleLogBtn = () => {
        login === 'Login' ? setLogin('Logout') : setLogin('Login')
    }
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src= {LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button onClick={handleLogBtn} className="login">{login}</button>
                </ul>
                <ul>
                    
                </ul>
            </div>
        </div>
    )
}

export default Header;