import React, { Component } from 'react'
import './Categories.css'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'все'
                },
                {
                    key: 'Hallway',
                    name: 'Hallway'
                },
                {
                    key: 'Bedroom',
                    name: 'Bedroom'
                },
                {
                    key: 'Kitchen',
                    name: 'Kitchen'
                }
            ]
        }
    }
    render() {
        return (
            <div className='categories'>
                {this.state.categories.map(el => (
                    <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
                ))}
            </div>
        )
    }
}

export default Categories