import { NavLink } from 'react-router-dom';
import './navbar.css'
export default function Navbar(){
    return(
        <nav className="nav">
            <div>
                <NavLink to="/">
                    MY <span className="logw">WORLD</span>
                </NavLink>
            </div>
            <ul>
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink exact to="/about">About</NavLink></li>
                <li><NavLink exact to="/contact">Contact</NavLink></li>
                <li className="login"><NavLink to="/login">Sign in</NavLink></li>
            </ul>
        </nav>
    );
}