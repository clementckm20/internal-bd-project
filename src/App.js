import React from 'react';
import Search from './Search.js';
import logo from './logo.jpg';
import './App.css';


class App extends React.Component {
	constructor(props) {
  	super(props);
		this.state = {
			keywords: '',
			result: [{
				fields: {
					proposal_talking_deck: 'test'
				}
			}]
		};
		this.handleChange = this.handleChange.bind(this);
		this.loadAllObjectsInfo = this.loadAllObjectsInfo.bind(this);
		this.parseQuery = this.parseQuery.bind(this);
	}

	handleChange (evt) {
		const name = evt.target.name;
		const value = evt.target.value;
		this.setState({ [name]: value });
	}

	parseQuery(queryString) {
	    var query = {};
	    var pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
	    for (var i = 0; i < pairs.length; i++) {
	        var pair = pairs[i].split('=');
	        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
	    }
	    return query;
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

    let response = await fetch(`https://o2on8l1jcj.execute-api.ap-southeast-2.amazonaws.com/search/?${searchParams.toString()}`, requestOptions);

    let data = await response.json();
    this.setState({ result: data.hits.hit });
  }

	render() {
		console.log(this.state)
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p className='caption'>
						Type keywords to search for BD projets.
					</p>
					<div className='row'>
						<div className='form-box'>
							<form className="form-inline" action="action_page.php">
								<div className='col-xs-10'><input name='keywords' onChange={(evt) => this.handleChange(evt)} className='search' placeholder='e.g. Agile, Digital Enabler, Richard'/></div>
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
