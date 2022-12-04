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
                    className={`header__shop ${cartOpen && 'active'}`}
                />
                {cartOpen && (
                    <div className='header__shop-open'>
                        
                    </div>
                )}
            </div>
            <div className='header__images'></div>
        </header>
    )
}