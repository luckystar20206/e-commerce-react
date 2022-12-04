import React, { useState } from 'react'
import './Header.css'
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
    let [cartOpen, setCartOpen] = useState(false)

    return (
        <header>
            <div className='header'>
                <span className="header__logo">Kalen</span>
                <ul className="header__nav">
                    <li>About</li>
                    <li>Contacts</li>
                </ul>
                <FaShoppingCart 
                    onClick={() => setCartOpen(cartOpen = !cartOpen)} 
                    className={`header__shop $`}
                />
            </div>
            <div className='header__images'></div>
        </header>
    )
}