import React, { Component } from 'react'
import './Categories.css'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all__s',
                    name: 'All'
                },
                {
                    key: 'Hallway_s',
                    name: 'Hallway'
                },
                {
                    key: 'Bedroom_s',
                    name: 'Bedroom'
                },
                {
                    key: 'Kitchen_s',
                    name: 'Kitchen'
                }
            ]
        }
    }
    render() {
        return (
            <div className='categories'>
                {this.state.categories.map(el => (
                    <div key={el.key} onClick={() => this.props.choo}>{el.name}</div>
                ))}
            </div>
        )
    }
}

export default Categories