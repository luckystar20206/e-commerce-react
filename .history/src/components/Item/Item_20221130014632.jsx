import React, { Component } from 'react'

export class Item extends Component {
    render() {
        return (
            <div className='Card'>
                <img src={''} alt="" />
                <h4>{t}</h4>
            </div>
        )
    }
}

export default Item