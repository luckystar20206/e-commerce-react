import React, { Component } from 'react'

export class Item extends Component {
    render() {
        return (
            <div className='Card'>
                <img src={''} alt="" />
                <h4>{this.props.item.title}</h4>
            </div>
        )
    }
}

export default Item