import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <header>
            <h1>LCS tienda Online</h1>
            <nav>
                <ul>
                    <li>Libreria</li>
                    <li>Indumentaria</li>
                    <li>Bazar</li>
                    <li>Miscelaneos</li>
                </ul>
            </nav>
            <CartWidget />
        </header>
    )
}

export default NavBar
