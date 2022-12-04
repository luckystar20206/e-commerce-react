import React, { Component } from 'react';
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Items from './components/Items/Items'

export default class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			orders: [],
			items: [
				{
					id: 1,
					title: 'Hallway',
					img: '1_img.jpg',
					desc: 'Sophisticated dark design',
					category: 'Hallway',
					price: '7.000$ м²'
				},
				{
					id: 2,
					title: 'Hallway',
					img: '2_img.jpg',
					desc: 'For lovers of minimalism',
					category: 'Hallway',
					price: '7.200$ м²'
				},
				{
					id: 3,
					title: 'Kitchen',
					img: '3_img.jpg',
					desc: 'With a comfortable kitchen, only the most delicious dishes',
					category: 'Kitchen',
					price: '4.200$ м²'
				},
				{
					id: 4,
					title: 'Bedroom',
					img: '4_img.jpg',
					desc: 'For true fans of dark interiors',
					category: 'Bedroom',
					price: '5.700$ м²'
				},
				{
					id: 5,
					title: 'Kitchen',
					img: '5_img.jpg',
					desc: 'Cooking will take a minimum of time with a similar interior',
					category: 'Kitchen',
					price: '6.700$ м²'
				},
				{
					id: 6,
					title: 'Bedroom',
					img: '6_img.jpg',
					desc: 'Sleep well with Kalen\'s transformed Refurbishment',
					category: 'Bedroom',
					price: '5.400$ м²'
				}
			]
		}
		this.addToOrder = this.addToOrder.bind(this)
		this.deleteOrder = this.deleteOrder.bind(this)
	}

	deleteOrder(id) {

	}

	addToOrder(item) {
		let isInArray = false

		this.state.orders.forEach(el => {
			if(el.id === item.id)
				isInArray = true
		})
		if (!isInArray)
			this.setState({ orders: [...this.state.orders, item] })
	}

	render() {
		return (
			<div className='app'>
				<Header orders={this.state.orders} ondelete={this.deleteOrder}/>
				<Items items={this.state.items} onAdd={this.addToOrder}/>
				<Footer />
			</div>
		);
	}
}
