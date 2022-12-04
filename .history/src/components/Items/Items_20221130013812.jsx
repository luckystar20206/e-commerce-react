import React, { Component } from 'react'
import './Items.css'

export class Items extends Component {
	render() {
		return (
      		<main>
				{this.props.items.map(el => (
					<></>
				))}
			</main>
    	)
  	}
}

export default Items