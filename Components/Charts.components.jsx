import { Component } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

export default class Charts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			alldata: [],
			labels: [],
			chartData: [],
			transaction_rate: [],
			occupancy_rate: [],
            occudata:[]
		};
	}

	lead = axios
		.get(
			'http://localhost:9000//charts?market=Atlanta%20-%20Suburban&year=2021-9-01'
		)
		.then((res) => {
			console.log(res.data);
			this.setState({
				alldata: res.data,
			});
			console.log('alldata', this.state.alldata);
			var leadsss = [];
			for (var item of this.state.alldata) {
				leadsss.push(item.year_month);
			}
			var chart = [];
			for (var item of this.state.alldata) {
				chart.push(item.transaction_rate);
			}
			this.setState({
				labels: leadsss,
				transaction_rate: chart,
			});
			console.log(
				'labels',
				this.state.chartData,
				'data',
				this.state.transaction_rate
			);

			var newchart = {
				labels: leadsss,
				datasets: [
					{
						label: 'Transaction     ',
						fill: false,
						lineTension: 0.5,
						backgroundColor: 'rgba(75,192,192,1)',
						borderColor: 'rgba(0,0,0,1)',
						borderWidth: 2,
						data: this.state.transaction_rate,
					},
				],
			};
			this.setState({
				chartData: newchart,
			});
			console.log('chartdata', this.state.chartData, 'local', newchart);

            var occu = [];
			for (var item of this.state.alldata) {
				occu.push(item.occupancy_rate);
			}
            this.setState({
				occupancy_rate: occu,
			});
			var occupancy = {
				labels: leadsss,
				datasets: [
					{
						label: 'occupancy     ',
						fill: false,
						lineTension: 0.5,
						backgroundColor: 'rgba(75,192,192,1)',
						borderColor: 'rgba(0,0,0,1)',
						borderWidth: 2,
						data: this.state.occupancy_rate,
					},
				],
			};
			// getting levels for charts
            this.setState({
                occudata:occupancy
            })
			
            console.log('occupancy',this.state.occudata)
		})
		.catch((error) => {
			console.log(error);
		});

	render() {
		return (
			<>
				<div className='chart'>

					<Line 
						data={this.state.chartData}
						options={{
							title: {
								display: true,
								text: 'Average Rainfall per month',
								fontSize: 20,
							},
							legend: {
								display: true,
								position: 'right',
							},
						}}
					/>
                    	<Line
						data={this.state.occudata}
						options={{
							title: {
								display: true,
								text: 'Average Rainfall per month',
								fontSize: 20,
							},
							legend: {
								display: true,
								position: 'right',
							},
						}}
					/>
				</div>
			</>
		);
	}
}
