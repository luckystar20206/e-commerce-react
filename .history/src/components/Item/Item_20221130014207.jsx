import React, { Component } from 'react'

export class Item extends Component {
    render() {
        return (
            <div>{this.props.item}</div>
        )
    }
}

export default Item