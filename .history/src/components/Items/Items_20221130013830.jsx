import React, { Component } from 'react'
import './Items.css'

export class Items extends Component {
	render() {
		return (
      		<main>
				{this.props.items.map(el => (
					<h4>{el}</h4>
				))}
			</main>
    	)
  	}
}

export default Items