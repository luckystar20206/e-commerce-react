import React, { Component } from 'react';
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'

export default class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			items: [
				{
					id: 1,
					title: 'Hallway',
					img: '',
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
					price: '4.200$ м²'
				},
				{
					id: 3,
					title: 'Kitchen',
					img: '',
					desc: 'For lovers of minimalism',
					category: 'Hallway',
					price: '4.200$ м²'
				}
			]
		}
	}

	render() {
		return (
			<div className='app'>
				<Header />
				<Footer />
			</div>
		);
	}
}
