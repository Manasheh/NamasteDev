import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

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
                    <li>
                        <Link to = '/home'>Home</Link>
                    </li>
                    <li>
                        <Link to = '/about'>About Us</Link>
                    </li>
                    <li>
                        <Link to = '/contact'>Contact Us</Link>
                    </li>
                    <li>
                        <Link to = '/cart'>Cart</Link>
                    </li>
                    
                    <button onClick={handleLogBtn} className="login">{login}</button>
                </ul>
                <ul>
                    
                </ul>
            </div>
        </div>
    )
}

export default Header;