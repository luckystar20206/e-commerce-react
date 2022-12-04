import React, { Component } from 'react'
import './Categories.css'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cetegories: [
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
            <div className='cetegories'>
                {this.state.cetegories.map(el => (
                    
                ))}
            </div>
        )
    }
}

export default Categories