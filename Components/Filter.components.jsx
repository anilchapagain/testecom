import { Component, useEffect } from 'react';
import './Filter.css';
import axios from 'axios';
// import { Dropdown } from 'bootstrap';
import Select from 'react-select'
export default class Filter extends Component {
	constructor(props) {
		super(props);
		// let oo =  this.fetchData();
		this.state = {
			marketData: '',
			option: null,
			selectedOption: null,
		};
		this.handleChange = this.handleChange.bind(this);
	}

	 customStyles = {
		option: (provided, state) => ({
		  ...provided,
		  borderBottom: '1px dotted pink',
		  color: state.isSelected ? 'red' : 'blue',
		  padding: 20,
		}),
		control: () => ({
		  // none of react-select's styles are passed to <Control />
		  width: 200,
		}),
		singleValue: (provided, state) => {
		  const opacity = state.isDisabled ? 0.5 : 1;
		  const transition = 'opacity 300ms';
	  
		  return { ...provided, opacity, transition };
		}
	  }



	// fetchData = async () =>{
	// 	await axios.get('http://localhost:9000/market')
	// .then((res) => {
	// 	this.setState({
	// 		marketData:res.data
	// 	})
	// 	this.setState({
	// 		option :this.state.marketData.map((data, key) => {
	// 			return ({value : data.market, data:data.market})})
	// 	})
	// 	console.log('marketdata',this.state.marketData)
	// 	console.log('options',this.state.option)
	// }).catch((error) => {
	// 	console.log(error)
	// })
	// }

	handleChange = (selectedOption) => {
		this.setState({ selectedOption });

		console.log(`Option selected:`, selectedOption);
	};
	async componentWillMount() {
		// await fetch('http://localhost:9000/market')
		// 	.then((res) => res.json())
		// 	.then((result) => {
		// 		this.setState({
		// 			marketData: result,
		// 		});
		// 		let option = result.map((data, key) => {
		// 			return { value: data.market, label: data.market };
		// 		});
		// 		console.log('option',option)
		// 		this.setState({
		// 			option: option,
		// 		});
		// 		console.log('market ',this.state.marketData);
		// 		console.log('options ', this.state.option)
		// 	});
	}
	render() {
		return (
			<>
				<Select styles={this.customStyles}
					isMulti={true}
					value={this.state.selectedOption}
					onChange={this.handleChange}
					options={this.state.option}
				/>
				<Select styles={this.customStyles}
					value={this.state.selectedOption}
					onChange={this.handleChange}
					options={this.state.option}
				/>
			</>
		);
	}
}
