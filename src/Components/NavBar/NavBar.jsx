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
                            <div className='card'>
                                <div className='img'>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div className='detalle'>
                                    <h4>
                                        Aca vas a poder encontrar material descargable completamente gratis!!
                                    </h4>
                                </div>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`/Academia/2`}>
                        <div className='card'>
                                <div className='img'>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div className='detalle'>
                                    <h4>
                                        Cursos, Mentorias, MasterClass y nuestros servicios para empresas en un solo lugar
                                    </h4>
                                </div>
                            </div>
                        </NavLink> 
                    </li>
                    <li>
                        <NavLink to={`/Productos/3`}>
                            <div className='card'>
                                <div className='img'>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div className='detalle'>
                                    <h4>
                                        Todos nuestros productos y mas para adornar tu espacio de trabajo
                                    </h4>
                                </div>
                            </div>
                            </NavLink> 
                    </li>
                    <li>
                        <NavLink to={`/ServWeb/4`}>
                        <div className='card'>
                                <div className='img'>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div className='detalle'>
                                    <h4>
                                        Diseñamos a tu medida tu pagina web, dandote el mejor servicio y precio del mercado.
                                    </h4>
                                </div>
                            </div>
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
