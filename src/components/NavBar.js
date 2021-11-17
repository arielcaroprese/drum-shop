import './NavBar.css'

const NavBar = () => {
    return (
     <nav>
         <div className="logoHeader">
            <p>Pantera</p>
         </div>        
         <ul className="navHeader">
            <li>
                <a href="#1">Home</a>
            </li>
            <li>
                <a href="#2">Shop</a>
            </li>
            <li>
                <a href="#3">Nosotros</a>
            </li>
            <li>
                <a href="#4">Contacto</a>
            </li>
         </ul>
    </nav>
    );   
};

export default NavBar;