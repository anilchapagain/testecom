import React, { Component } from 'react';
import './user.css';
import { Link } from "react-router-dom";
import axios from 'axios';


export default class InputButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			userData:[]
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleChanges = this.handleChanges.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}
	handleChange(e) {
		//   console.log(e.target.username(e.target.value)

		this.setState({
			username: e.target.value,
		});


	}
    handleChanges(e) {
		//   console.log(e.target.username(e.target.value)

		this.setState({
			password: e.target.value,
		});

	}
	handleClick(e) {
        
        console.log(this.state.username);
        
        console.log(this.state.password);
		e.preventDefault();
		const userObject = {
            username: this.state.username,
            password: this.state.password
        };

        axios.post('https://nedldevapi.goldfinch.ai/login', userObject)
            .then((res) => {
                console.log(res.data)
				this.setState({
					userData:res.data
				})

            }).catch((error) => {
                console.log(error)
            });

		
		
        
	}
	render( ) {
		return (
			<div>
				<form>
					<div className='mb-3'>
						<label htmlFor ='exampleInputEmail1' className='form-label'>
							Email address
						</label>
						<input
							type='text'
							className='form-control'
							id='exampleInputEmail1'
							aria-describedby='emailHelp'
							onChange={this.handleChange}
						/>
						<div id='emailHelp' className='form-text'>
							We'll never share your email with anyone else.
						</div>
					</div>
					<div className='mb-3'>
						<label htmlFor='exampleInputPassword1' className='form-label'>
							Password
						</label>
						<input
							type='password'
							className='form-control'
							id='exampleInputPassword1'
							onChange={this.handleChanges}
						/>
					</div>
					<div className='mb-3 form-check'>
						<input
							type='checkbox'
							className='form-check-input'
							id='exampleCheck1'
						/>
						<label className='form-check-label' htmlFor='exampleCheck1'>
							Check me out
						</label>
					</div>
					<button
						type='submit'
						className='btn btn-primary'
						onClick={this.handleClick}
					>
						<Link to="/lead">Lead</Link>
					</button>
				</form>
			</div>
		);
	}
}
