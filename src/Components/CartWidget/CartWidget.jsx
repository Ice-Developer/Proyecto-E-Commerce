import React from 'react'
import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito = "https://imgs.search.brave.com/i_lGe2CoZQH-iSAn6Hb48_bQQSmm7G5WE8aXBIKqGtw/rs:fit:900:600:1/g:ce/aHR0cHM6Ly9pbWcy/LmZyZWVwbmcuZXMv/MjAxODA1MTUvemZ3/L2tpc3Nwbmctc2hv/cHBpbmctY2FydC1s/b2dvLXNob3BwaW5n/LWJhZ3MtdHJvbGxl/eXMtNWFmYjY1YjA5/YzcyZDQuMzU2NDc5/MTQxNTI2NDI1MDA4/NjQwOC5qcGc"
    return (
        <div>
            <img className='imgCarrito' src= {imgCarrito} alt="Carrito" />
            <strong>2</strong>
        </div>
    )
}

export default CartWidget