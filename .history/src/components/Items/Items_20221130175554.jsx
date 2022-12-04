import React, { Component } from 'react'
import './Items.css'
import Item from '../Item/Item'

export class Items extends Component {
	render() {
		return (
      		<main>
				{this.props.items.map(el => (
					<Item 
						key={el.id} item={el}/>
				))}
			</main>
    	)
  	}
}

export default Items