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
        <NavLink to="/category/baterias-acusticas" className="NavLink">
            Baterías Acústicas
        </NavLink> 
        <NavLink to="/category/baterias-electronicas" className="NavLink">
            Baterías Electrónicas
        </NavLink>        
        <NavLink to="/category/percusion" className="NavLink">
            Percusión
        </NavLink>     
        <CartWidget/>
    </nav>
    );   
};

export default NavBar;