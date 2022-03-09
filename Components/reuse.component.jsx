import React, { Component } from 'react';
import Buttonnew from './resuable/button';


export default class Reuse extends Component {

    constructor(props) {
		super(props);
		this.state = {
			tchildren: 'old',
            text:'hello',
            blogs:
            [
                { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
            ]

		};
		this.oneclick = this.oneclick.bind(this);
	}
	oneclick = async (e) => {
        e.preventDefault();
		this.setState({
            text:"new"
        })
        console.log(this.state.text)
	};
    render() {
		return (

<div>
    
<Buttonnew text={this.state.text} clickMe = {this.oneclick} />\
</div>


        )}
    }