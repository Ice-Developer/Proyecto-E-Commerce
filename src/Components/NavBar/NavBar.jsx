import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link} from "react-router-dom";
const NavBar = () => {
    return (
        <header>
            <div className='logoNav'>
            <Link to={`./`}>
            <img className='imgLogo' src="../img/logo_LCS.png" alt="aswdas" />
            </Link> 
            <nav>
                <ul>
                    <li>
                        <NavLink to ={`/Descargable/1`}>
                        <img className='imgNav' src="../img/descargables.png" alt="Descargables" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`/Academia/2`}>
                        <img className='imgNav' src="../img/academia.png" alt="Academia de Asesores" />
                        </NavLink> 
                    </li>
                    <li>
                        <NavLink to={`/Productos/3`}>
                                <img className='imgNav' src="../img/chucherias.png" alt="Chucherias" />
                            </NavLink> 
                    </li>
                    <li>
                        <NavLink to={`/ServWeb/4`}>
                        <img className='imgNav' src="../img/diseño.png" alt="Diseño Web" />
                        </NavLink> 
                    </li>
                </ul>
            </nav>
            </div>
            <CartWidget />
        </header>
    )
}

export default NavBar
