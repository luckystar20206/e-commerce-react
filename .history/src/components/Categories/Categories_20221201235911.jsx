import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cetegories: [
                {
                    key: 'alls',
                    name: 'All'
                },
                {
                    key: 'Hallways',
                    name: 'All'
                },
                {
                    key: 'Bedrooms',
                    name: 'All'
                },
                {
                    key: 'Kitchens',
                    name: 'All'
                }
            ]
        }
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}

export default Categories