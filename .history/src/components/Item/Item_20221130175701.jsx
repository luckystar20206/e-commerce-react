import React, { Component } from 'react'
import './Item.css'

export class Item extends Component {
    render() {
        return (
            <div className='card'>
                <img src={'./img/' + this.props.item.img} alt="img" />
                <h3 className='card__title'>{this.props.item.title}</h3>
                <p className='card__desc'>{this.props.item.desc}</p>
                <b className='card__price'>{this.props.item.price}</b>
                <div className='card__add' onClick={}>+</div>
            </div>
        )
    }
}

export default Item