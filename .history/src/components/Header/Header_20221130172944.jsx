import React from 'react'
import './Header.css'
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
    return (
        <header>
            <div className='header'>
                <span className="header__logo">Kalen</span>
                <ul className="header__nav">
                    <li>About</li>
                    <li>Contacts</li>
                </ul>
                <FaShoppingCart className='header__'/>
            </div>
            <div className='header__images'></div>
        </header>
    )
}