import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Buy from './Buy.components';

export default class CardsExample extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [],
			perPage: 9,
			page: 0,
			pages: 0,
			clicked: null,
			card: null,
			showtext: false,
		};
		this.handlePageClick = this.handlePageClick.bind(this);
		this.clicked = this.clicked.bind(this);
		this.close = this.close.bind(this);
	}
	//  items = axios
	// .get('https://api.publicapis.org/entries')
	// .then((res) => {
	//     console.log('con',res.data.entries);
	//     this.setState({
	//         items: res.data.entries,
	//     });
	//     console.log('entries',this.state.items);
	// })
	// .catch((error) => {
	//     console.log(error);
	// });
	componentDidMount() {
		//    this.items();
		this.makeHttpRequest();
	}
	makeHttpRequest = async () => {
		let res = await axios
			.get('https://api.publicapis.org/entries')
			.catch((err) => console.log(err));

		this.setState({
			list: res.data.entries,
		});
		console.log('count', this.state.list.length);
		this.setState({
			pages: Math.floor(this.state.list.length / this.state.perPage),
		});
		console.log('dsfdggf', this.state.list, this.state.pages);
	};
	handlePageClick = (event) => {
		let page = event.selected;
		this.setState({ page: page });
		console.log(this.state.page);
	};
	clicked = async (e) => {
		await this.setState({
			clicked: e.target.value,
		});
		console.log('clicked', this.state.clicked);
		this.setState({
			showtext: !this.state.showtext,
			card: {
				item: this.state.clicked,
			},
		});
	};

	

	close = async (close) => {
		await this.setState({
			showtext: false,
		});
		console.log('close',this.state.showtext)
	};
	render() {
		const { page, perPage, pages, list } = this.state;
		let items = list.slice(page * perPage, (page + 1) * perPage);
		console.log(items);

		let weathers =
			items.map((item, key) => {
				return (
					<div className='card' key={key}>
						<img src='http://via.placeholder.com/640x360' />
						{item.API}
						<br />
						{item.Description}
						<button
							value={item.API}
							className='btn btn-sm primary'
							onClick={this.clicked}
						>
							BUY
						</button>
					</div>
				);
			}) || '';

		return (
			<>
				{weathers}
				{this.state.showtext ? <Buy/> : ''}

				<ReactPaginate
					previousLabel={'prev'}
					nextLabel={'next'}
					pageCount={pages}
					onPageChange={this.handlePageClick}
					containerClassName={'pagination'}
					activeClassName={'active'}
				/>
			</>
		);
	}
}
