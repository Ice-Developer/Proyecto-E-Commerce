import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import {Link} from "react-router-dom";
import { useState, useEffect } from 'react'
import NavList from '../NavList/NavList';
import { getItemNav } from '../../asyncmock';
const NavBar = () => {
    const [navegador, setNavegador] = useState ([]);

    useEffect (()=>{
        getItemNav()
        .then (res => setNavegador(res))
        .catch (error => console.error(error))
    },[])

    return (
        <header>
            <div className='logoNav'>
            <Link to={`./`}>
            <img className='imgLogo' src="../img/logo_LCS.png" alt="aswdas" />
            </Link> 
            <nav>
                <ul>
                    <NavList nav={navegador}/>
                </ul>
            </nav>
            </div>
            <CartWidget />
        </header>
    )
}

export default NavBar
