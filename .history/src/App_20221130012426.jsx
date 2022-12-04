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
					desc: 'Sophisticated dark design'
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
