import './NavBar.css';
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from 'react-router-dom';
import { GiDrumKit } from 'react-icons/gi';

const NavBar = () => {
    return (
     <nav className="navBar">
        <Link to="/" className="logoContainer">
                <GiDrumKit className='siteLogo'/>
                <span className='siteTitle'>Drum Shop</span>
        </Link> 
        <div className='mainMenu'>
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
        </div>

    </nav>
    );   
};

export default NavBar;