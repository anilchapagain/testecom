import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
export default class Buy extends Component {
	constructor(props) {
		super(props);
		this.state = {
			change: 0,
		};
		this.handlechange = this.handlechange.bind(this);
		this.click = this.click.bind(this);
	}
	handlechange = async (e) => {
		return this.state.change;
	};

    // pclick = (e) =>{
    //     this.props.showtext = false;
    //  console.log(this.props.showtext)
    // }
	click = (e) => {
		switch (e.target.value) {
			case 'minus':
				return this.setState({
					change: this.state.change - 1,
				});
			case 'plus':
				return this.setState({
					change: this.state.change + 1,
				});

			default:
				return null;
		}
	};
    

	render() {
		return (
			<>
				<div  className='col buy'>
					{console.log(this.state.change)}
					<div className='input-group'>
						<span className='input-group-btn'>
							<button
								type='button'
								value='minus'
								onClick={this.click}
								className='quantity-left-minus btn btn-danger btn-number'
								data-type='minus'
								data-field=''
							>
								-
							</button>
						</span>
						{this.state.change}
						<span className='input-group-btn'>
							<button
								type='button'
								className='quantity-right-plus btn btn-success btn-number'
								value='plus'
								data-field=''
                                onClick={this.click}
							>
								+
							</button>
                            
						</span>
                        <button onClick={this.props.clicked}>X</button>
					</div>
				</div>
              
			</>
		);
	}
}
