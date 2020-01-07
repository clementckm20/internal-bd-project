import React from 'react';
import './App.css';

//


// var params = {
//   query: 'david'
// };
// var nextItems = [];
// csd.search(params, function (err, data) {
//   if (err) console.log(err, err.stack); // an error occurred
//   else { // successful response
//     console.log(JSON.stringify(data));
//     nextItems = data.hits.hit;
//   }
// });

class App extends React.Component {
	constructor(props) {
  	super(props);
	  this.loadAllObjectsInfo = this.loadAllObjectsInfo.bind(this);
	}

	async loadAllObjectsInfo(endpoint) {
		// headers set to be Content-Type because of type CORS which makes some headers restricted
    const requestOptions = {
        method: 'GET',
        // headers: {
				// 		"Access-Control-Allow-Origin": "*",
		    //     "Access-Control-Allow-Headers": "Content-Type",
		    //     // "Access-Control-Allow-Methods": "GET",
				// 		'Content-Type': 'application/json',
        // },
    };
		const q= 'david'
    let response = await fetch(`https://o2on8l1jcj.execute-api.ap-southeast-2.amazonaws.com/search/?q=${q}`, requestOptions);

    let data = await response.json();
    this.setState({ [endpoint]: data });
  }

  componentDidMount (){
		//Api calls
    this.loadAllObjectsInfo('result')
  }

	// componentDidMount(){

		// const AWS = require('aws-sdk/dist/aws-sdk-full.js');
		// AWS.config.update({accessKeyId: 'AKIAIHIPPINCCOD4VXMQ', secretAccessKey:'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'});
		// AWS.config.update({region: 'ap-southeast-2'}); // say us-west-1
		// console.log(AWS)
		//
		// var cloudsearch = new AWS.CloudSearchDomain({ apiVersion: '2013-01-01',endpoint: 'http://search-smart-bd-l5x24yxnt34i22nqehrekmp2qi.ap-southeast-2.cloudsearch.amazonaws.com' });
		// console.log(cloudsearch)

		// var csd = new AWS.CloudSearchDomain({endpoint: 'http://search-smart-bd-l5x24yxnt34i22nqehrekmp2qi.ap-southeast-2.cloudsearch.amazonaws.com'});
		// console.log(csd)
	// }
  render() {
		console.log(this.state)
		return (
			<div>
				<p>Result</p>
				<div className='result'>
					<div className='card'>
						<div className='card-element'>Proposal</div>
						<div className='card-element'>Categories</div>
						<div className='card-element'>Industry</div>
						<div className='card-element'>Owner</div>
						<div className='card-element'>Client</div>
						<div className='card-element'>Number of Slides</div>
						<div className='card-element'>File Path</div>
						<div className='card-element'>Date</div>

					</div>
				</div>
			</div>
		);
  }
}

//
// function App() {
//   return (
//     <div>
//       <p>Result</p>
// 			<div className='result'>
// 				<div className='card'>
// 					<div className='card-element'>Proposal</div>
// 					<div className='card-element'>Categories</div>
// 					<div className='card-element'>Industry</div>
// 					<div className='card-element'>Owner</div>
// 					<div className='card-element'>Client</div>
// 					<div className='card-element'>Number of Slides</div>
// 					<div className='card-element'>File Path</div>
// 					<div className='card-element'>Date</div>
//
// 				</div>
// 			</div>
//     </div>
//   );
// }

export default App;
