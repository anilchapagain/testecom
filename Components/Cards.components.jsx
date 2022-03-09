import { Component } from 'react';
import axios from 'axios';
import Buttonnew from './resuable/button';
export default class Cards extends Component {
	constructor(props) {
		super(props);
		this.state = {
			leadData: [],
			items: [],
		};
	}

	lead = axios
		.get(
			'http://localhost:9000//leads?year=2021&month=9&market=&sale_propensity=Hot&status=lead,opportunity,negotiation,proposal'
		)
		.then((res) => {
			console.log(res.data);

			this.setState({
				leadData: res.data,
			
			});
      

			let count = Object.keys(this.state.leadData).length;
			console.log(count);
      
      this.setState({
        items: this.state.leadData.slice(0, 10),
      })
		})
		.catch((error) => {
			console.log(error);
		});

	render() {
		return (
			<>
				{this.state.items.map((data, key) => {
					return (
						<div class='card text-center' key={key.property_id}>
							<div class='card-header'>Property Id{ data.property_id}</div>
							<div class='card-body'>
								<h5 class='card-title'>Property name {data.property_name}</h5>
								<p class='card-text'>Market{data.market}</p>
								<p class='card-text'>SubMarket{data.submarket}</p>
								<p class='card-text'>Address{data.property_address}</p>
								<p class='card-text'>Zip{data.property_zip_code}</p>
								<p class='card-text'>City{data.property_city}</p>
								<p class='card-text'>Phone{data.property_phone}</p>
								<p class='card-text'>Owner Name{data.owner_name}</p>
							</div>
							<div class='card-footer text-muted'>2 days ago</div>
							<Buttonnew text = {data.market}/>
						</div>
					);
				})}
			</>
		);
	}
}
