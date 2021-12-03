import './NavBar.css';
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
    return (
     <nav className="navBar">
        <Link to="/" className="NavLink">
            <div className="logoHeader">
                <p>Pantera</p>
            </div>
        </Link> 
        <NavLink to="/" className="NavLink">
            Home
        </NavLink> 
        <NavLink to="/category/MLA1648" className="NavLink">
            Computación
        </NavLink> 
        <NavLink to="/category/MLA1051" className="NavLink">
            Celulares y Teléfonos
        </NavLink>        
        <NavLink to="/category/MLA1144" className="NavLink">
            Consolas y Videojuegos
        </NavLink>     
        <CartWidget/>
    </nav>
    );   
};

export default NavBar;