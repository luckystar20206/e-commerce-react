import React, { Component } from 'react'
import './Order.css'

export class Order extends Component {
    render() {
        return (
            <div className='header__modal'>
                <img src={'./img/' + this.props.item.img} alt="img" />
                <h3 className='card__title'>{this.props.item.title}</h3>
                <b className='card__price'>{this.props.item.price}</b>
            </div>
        )
    }
}

export default Order