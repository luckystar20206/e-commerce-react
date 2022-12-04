import React, { Component } from 'react';
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Items from './components/Items/Items'
import Categories from './components/Categories/Categories.jsx';

export default class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			orders: [],
			currentItems: [],
			items: [
				{
					id: 1,
					title: 'Hallway',
					img: '1_img.jpg',
					desc: 'Sophisticated dark design',
					category: 'Hallway',
					price: '7000$ м²'
				},
				{
					id: 2,
					title: 'Hallway',
					img: '2_img.jpg',
					desc: 'For lovers of minimalism',
					category: 'Hallway',
					price: '7200$ м²'
				},
				{
					id: 3,
					title: 'Kitchen',
					img: '3_img.jpg',
					desc: 'With a comfortable kitchen, only the most delicious dishes',
					category: 'Kitchen',
					price: '4200$ м²'
				},
				{
					id: 4,
					title: 'Bedroom',
					img: '4_img.jpg',
					desc: 'For true fans of dark interiors',
					category: 'Bedroom',
					price: '5700$ м²'
				},
				{
					id: 5,
					title: 'Kitchen',
					img: '5_img.jpg',
					desc: 'Cooking will take a minimum of time with a similar interior',
					category: 'Kitchen',
					price: '6700$ м²'
				},
				{
					id: 6,
					title: 'Bedroom',
					img: '6_img.jpg',
					desc: 'Sleep well with Kalen\'s transformed Refurbishment',
					category: 'Bedroom',
					price: '5400$ м²'
				}
			],
			modal
		}
		this.state.currentItems = this.state.items
		this.addToOrder = this.addToOrder.bind(this)
		this.deleteOrder = this.deleteOrder.bind(this)
		this.chooseCategory = this.chooseCategory.bind(this)
	}

	deleteOrder(id) {
		this.setState({
			orders: this.state.orders.filter(el => el.id !== id
		)})
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

	chooseCategory(category) {
		if (category === 'all') {
			this.setState({currentItems: this.state.items})
			return
		}

		this.setState({
			currentItems: this.state.items.filter(el => el.category === category)
		})
	}

	render() {
		return (
			<div className='app'>
				<Header orders={this.state.orders} onDelete={this.deleteOrder}/>
				<Categories chooseCategory={this.chooseCategory}/>
				<Items items={this.state.currentItems} onAdd={this.addToOrder}/>
				<Footer />
			</div>
		);
	}
}

