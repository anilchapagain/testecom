import React, { Component } from 'react';

import './Navigation.css';
import Search from './Search.components';
import logo from '../images/cryptocurrency.png';
import User from './user.components';
import Shopping from './shoping.component';
import ReturnOrder from './returnOrder.components';
import Menu from './Menu.components';
class Navigation extends Component {
	render() {
		return (
			<div className='Nav'>
				<div className='top-menu'>
				<div className='logo'>
					<img src={logo} alt='Crypto' width='150' height='90' />
				</div>
				
				<Search/>
				<User />
				<ReturnOrder/>
				<Shopping/>
				
				</div>
				<div className='below-menu'>
				<Menu/>
				</div>
			</div>
		);
	}
}
export default Navigation;
