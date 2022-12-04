import React, { Component } from 'react';
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Items from './components/Items/Items'

export default class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			items: [
				{
					id: 1,
					title: 'Hallway',
					img: '1_',
					desc: 'Sophisticated dark design',
					category: 'Hallway',
					price: '7.000$ м²'
				},
				{
					id: 2,
					title: 'Hallway',
					img: '',
					desc: 'For lovers of minimalism',
					category: 'Hallway',
					price: '7.200$ м²'
				},
				{
					id: 3,
					title: 'Kitchen',
					img: '',
					desc: 'With a comfortable kitchen, only the most delicious dishes',
					category: 'Kitchen',
					price: '4.200$ м²'
				},
				{
					id: 4,
					title: 'Bedroom',
					img: '',
					desc: 'For true fans of dark interiors',
					category: 'Bedroom',
					price: '5.700$ м²'
				},
				{
					id: 5,
					title: 'Kitchen',
					img: '',
					desc: 'Cooking will take a minimum of time with a similar interior',
					category: 'Kitchen',
					price: '6.700$ м²'
				},
				{
					id: 6,
					title: 'Bedroom',
					img: '',
					desc: 'Sleep well with Kalen\'s transformed Refurbishment',
					category: 'Bedroom',
					price: '5.400$ м²'
				}
			]
		}
	}

	render() {
		return (
			<div className='app'>
				<Header />
				<Items items={this.state.items}/>
				<Footer />
			</div>
		);
	}
}
