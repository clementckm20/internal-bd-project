import React from 'react';
import './App.css';
import sample from './sample.jpg'

class App extends React.Component {
	constructor(props) {
  	super(props);
		this.state = {
			result: {
				hits: {
					hit: [{
						fields: {
							proposal_talking_deck: 'test'
						}
					}]
				}
			}
		}
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

  render() {
		console.log(this.state)
		const test_arr = [0,1,2,3,4,5]
		return (
			<div>
				<p className='caption'>Result</p>
				<div className='result'>
				{ test_arr.map((ele)=> {
					return (
						<div className="row">
							<div className='card'>
								<div className='col-xs-8'>
									<div className='row'><div className='card-row'>File Name:<span className='card-element'>{'ANZ '}{this.state.result.hits.hit[0].fields.proposal_talking_deck}</span></div></div>
									<div className='row'><div className='card-row'>Categories:<span className='card-element'>{'Op Model, Transformation'}</span></div></div>
									<div className='row'><div className='card-row'>Industry:<span className='card-element'>{'Banking'}</span></div></div>
									<div className='row'><div className='card-row'>Owner:<span className='card-element'>{'David Williams'}</span></div></div>
									<div className='row'><div className='card-row'>Client:<span className='card-element'>{'ANZ'}</span></div></div>
									<div className='row'><div className='card-row'>File Path:<span className='card-element'>{'/Agile/TransformationDeck'}</span></div></div>
								</div>
								<div className='col-xs-4'>
									<div className='row'><img src={sample} className="sample" alt="sample" /></div>
									<div className='row'><span className='card-footer'>Number of slides: 12</span></div>
									<div className='row'><span className='card-footer'>Created on 12-2-2019</span></div>
								</div>
							</div>
						</div>
					)
				})}
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
