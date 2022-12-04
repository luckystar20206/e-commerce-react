import React, { Component } from 'react'
import './Items.css'
import Item from '../Item/Item'

export class Items extends Component {
	render() {
		return (
      		<main>
				{this.props.items.map(el => (
					<Item
					onShowModal={this.props.onShowModal}
						key={el.id} 
						item={el}
						onAdd={this.props.onAdd}
					/>
				))}
			</main>
    	)
  	}
}

export default Items