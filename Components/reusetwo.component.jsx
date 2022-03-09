import React, { Component } from 'react';
import CardsExample from './cardsexample.components';
import Buttonnew from './resuable/button';

export default class Reusetwo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tchildren: 'old',
			text: 'hello',
			data: 0,
			showMe: true,
			blogs: [
				{ title: 'New tEXT', body: 'lorem ipsum...', author: 'mario', id: 1 },
				{
					title: 'Welcome DSFGDSGDG!',
					body: 'lorem ipsum...',
					author: 'yoshi',
					id: 2,
				},
				{
					title: 'Web dev tCVBCFBCVBVCBCBCHBBop tips',
					body: 'lorem ipsum...',
					author: 'mario',
					id: 3,
				},
			],
		};
		this.oneclick = this.oneclick.bind(this);
	}
	async oneclick(blog) {
		await this.setState({
			showMe: !this.state.showMe,
			data: blog.target.value,
			text: 'nothing',
		});

		console.log(this.state.showMe);
		console.log(this.state.data);
	}
	render() {
		return (
			<div style={{width :'100%'}}>
				{this.state.blogs.map((blog) => (
					<div>
						

						<Buttonnew
							value={blog.id}
							key={blog.id}
							clickMe={(blog) => this.oneclick(blog)}
                            className='anil'
                            text = {blog.title}
						/>
                        {this.state.data == blog.id && <div>{}</div>}
						{this.state.data != blog.id && ''}

					</div>
				))}
			</div>
		);
	}
}
