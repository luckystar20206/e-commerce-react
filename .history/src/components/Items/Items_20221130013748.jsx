import React, { Component } from 'react'
import './Items.css'

export class Items extends Component {
	render() {
		return (
      		<main>
				{this.props.items}
			</main>
    	)
  	}
}

export default Items