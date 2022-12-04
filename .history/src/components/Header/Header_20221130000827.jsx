import React from 'react'

export default function Header() {
    return (
        <header>
            <div className='header'>
                <span className="header__logo">Kalen</span>
                <ul className="header__nav">
                    <li>About</li>
                    <li>Contacts</li>
                    <li>Card</li>
                </ul>
            </div>
            <div className='header__images'></div>
        </header>
    )
}