import React, { Component } from 'react'
import './Categories.css'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'll'
                },
                {
                    key: 'Hallway',
                    name: 'гостиница'
                },
                {
                    key: 'Bedroom',
                    name: 'спальня'
                },
                {
                    key: 'Kitchen',
                    name: 'кухня'
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