import React, { useState } from 'react'
import './Header.css'
import { FaShoppingCart } from "react-icons/fa";
import Order from '../Order/Order'

const showOrders = (props) => {
    return (
        <div>
            {props.orders.map(el => (
                <Order 
                    onDelete={props.onDelete} 
                    key={el.id} 
                    item={el} 
                />
            ))}
            <p></p>
        </div>
    )
}

const showNothing = (props) => {
    return (
        <div className='header__notFound'>
            <h4>Cart is empty</h4>
        </div>
    )
}

export default function Header(props) {
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
                        {props.orders.length > 0  ?
                        showOrders(props) : showNothing()}
                    </div>
                )}
            </div>
            <div className='header__images'></div>
        </header>
    )
}