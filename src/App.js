import React from 'react';
import Search from './Search.js';
import logo from './logo.jpg';
import deloitte from './deloitte-white-logo.svg';
import './App.css';


class App extends React.Component {
	constructor(props) {
  	super(props);
		this.state = {
			keywords: '',
			result: [],
			// result: [{
			// 	fields: {
			// 		created: '',
			// 		author: '',
			// 		modified: '',
			// 		filename: '',
			// 		content: '',
			// 		location: '',
			// 		slide: '',
			// 	}
			// }]
		};
		this.handleChange = this.handleChange.bind(this);
		this.loadAllObjectsInfo = this.loadAllObjectsInfo.bind(this);
	}

	handleChange (evt) {
		const name = evt.target.name;
		const value = evt.target.value;
		this.setState({ [name]: value });
	}

	// headers set to be Content-Type because of type CORS which makes some headers restricted


	async loadAllObjectsInfo(evt, queryParams) {
		evt.preventDefault();
		const searchParams = new URLSearchParams({ q: queryParams});
		// console.log(searchParams.toString())
    const requestOptions = {
        method: 'GET',
        // headers: {
				// 		"Access-Control-Allow-Origin": "*",
		    //     "Access-Control-Allow-Headers": "Content-Type",
		    //     // "Access-Control-Allow-Methods": "GET",
				// 		'Content-Type': 'application/json',
        // },
    };

    let response = await fetch(`https://o2on8l1jcj.execute-api.ap-southeast-2.amazonaws.com/search/?${searchParams.toString()}&size=5000&cursor=initial`, requestOptions);

    let data = await response.json();
		console.log('Replied', data)
    this.setState({ result: data.hits.hit });
  }

	render() {
		// console.log(this.state)
		return (
			<div className="App">
				<div className='banner'>
					<img src={deloitte} className="App-logo" alt="logo" />
				</div>
				<header className="App-header">
					<h2 className='title'>Project Athena</h2>
					<p className='subtitle'>

					</p>
					<div className='row'>
						<div className='form-box'>
							<form className="form-inline" action="action_page.php">
								<div className='col-xs-10'><input name='keywords' onChange={(evt) => this.handleChange(evt)} className='search' placeholder=' Type keywords - e.g. agile, telstra, transformation'/></div>
								<div className='col-xs-2'><button onClick={(evt)=>this.loadAllObjectsInfo(evt, this.state.keywords)} className='searchbtn'><i className="fa fa-search"></i></button></div>
							</form>
						</div>
					</div>
				</header>
				<Search result={this.state.result} />
			</div>
		);
	}
}

export default App;
