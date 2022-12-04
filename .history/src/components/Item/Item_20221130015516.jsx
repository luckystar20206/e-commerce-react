import React, { Component } from 'react'
import './'

export class Item extends Component {
    render() {
        return (
            <div className='card'>
                <img src={'./img/' + this.props.item.img} alt="img" />
                <h4>{this.props.item.title}</h4>
                <p>{this.props.item.desc}</p>
                <b>{this.props.item.price}</b>
                <div className='card__add'>+</div>
            </div>
        )
    }
}

export default Item