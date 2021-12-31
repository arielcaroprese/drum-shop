import React from 'react'

import { NavLink, Link } from 'react-router-dom'

import { GiDrumKit } from 'react-icons/gi';

import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className='Footer'>
                <div className="footerNav">  
                    <h6 className="siteMap">Mapa de sitio</h6>          
                    <NavLink to="/category/baterias-acusticas" className="footerNavLink">
                        Baterías Acústicas
                    </NavLink> 
                    <NavLink to="/category/baterias-electronicas" className="footerNavLink">
                        Baterías Electrónicas
                    </NavLink>        
                    <NavLink to="/category/percusion" className="footerNavLink">
                        Percusión
                    </NavLink>
                </div>
                <Link to="/" className="logoContainer">
                    <GiDrumKit className='siteLogo'/>
                    <span className='siteTitle'>Drum Shop</span>
                </Link>
                <div>
                    
                </div>
            </div>
            <div className='credits'>
                        <a href='https://github.com/arielcaroprese/drum-shop'>Desarrollado por Esteban Ariel Caroprese</a>
                </div>
        </footer>
    )
}

export default Footer
