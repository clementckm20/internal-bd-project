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
		return (
			<div>
				<p>Result</p>
				<div className='result'>
					<div className='card'>
						<img src={sample} className="sample" alt="sample" />
						<div className='card-first'>12 slides</div>
						<div className='card-element'>File Name:<span>{'ANZ '} {this.state.result.hits.hit[0].fields.proposal_talking_deck}</span></div>
						<div className='card-element'>Categories:<span>{'Op Model, Transformation'}{this.state.result.hits.hit[0].fields.proposal_talking_deck}</span></div>
						<div className='card-element'>Industry: <span>Banking</span></div>
						<div className='card-element'>Owner:<span>David Williams</span></div>
						<div className='card-element'>Client</div>

						<div className='card-element'>File Path:<span>/Agile/TransformationDeck</span></div>
						<div className='card-last'><span>12-2-2019</span></div>

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
