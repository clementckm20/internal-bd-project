import React from 'react';
import Search from './Search.js';
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

    let response = await fetch(`https://o2on8l1jcj.execute-api.ap-southeast-2.amazonaws.com/search/?${searchParams.toString()}&size=100&cursor=initial&highlight.content=%7B%27%27%7D`, requestOptions);

    let data = await response.json();
		console.log('Replied', data)
    this.setState({ result: data.hits.hit });

  }

	render() {
		// console.log(this.state)
		return (
			<div className="App">
				<header className="App-header">
					<h1>Project Athena</h1>
					<p className='caption'>
						Enter keywords below to search for Deloitte assets
					</p>
					<div className='row'>
						<div className='form-box'>
							<form id='searchBox' className="form-inline" action="action_page.php">
								<div className='col-xs-10'><input name='keywords' onChange={(evt) => this.handleChange(evt)} className='search' placeholder='e.g. Agile, Workday, Art of the Possible'/></div>
								<div className='col-xs-2'><button onClick={(evt)=>this.loadAllObjectsInfo(evt, this.state.keywords)} className='searchbtn'><i className="fa fa-search"></i></button></div>
							</form>
						</div>
					</div>
					<Search result={this.state.result} />
				</header>
			</div>
		);
	}
}

export default App;
