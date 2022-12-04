import React, { Component } from 'react'

export class Item extends Component {
    render() {
        return (
            <div className='Card'>
                <img src={'./img'} alt="img" />
                <h4>{this.props.item.title}</h4>
                <p>{this.props.item.desc}</p>
                <b>{this.props.item.price}</b>
                <div className='Card__add'>+</div>
            </div>
        )
    }
}

export default Item