import React from 'react';
import './App.css';
import sample from './sample.jpg'

class App extends React.Component {
	constructor(props) {
  	super(props);
		this.state = {
		}
	}
  render() {
		return (
			<div>
				<p className='caption'>{this.props.result.length+' '}Result</p>
				<div className='result'>
				{this.props.result.length <= 1 ?  '' : this.props.result.map((ele,i)=> {
					return (
						<div key={i+'row'} className="row">
							<div className='card'>
								<div className='col-xs-8'>
									<div className='row'><div className='card-row'>File Name:<span className='card-element'>{ele.fields.filename}</span></div></div>
									<div className='row'><div className='card-row'>Author:<span className='card-element'>{ele.fields.author}</span></div></div>
									<div className='row'><div className='card-row'>Content:<span><i>{' ' + ele.fields.content}</i></span></div></div>
									<div className='row'><div className='card-row'>Location:<span>{' ' + ele.fields.location}</span></div></div>
								</div>
								<div className='col-xs-4'>
									<div className='row'><img src={sample} className="sample" alt="sample" /></div>
									<div className='row'><span className='card-footer'>{ele.fields.slides}</span></div>
									<div className='row'><span className='card-footer'>Created:{ele.fields.created}</span></div>
									<div className='row'><span className='card-footer'>Modified:{ele.fields.modified}</span></div>
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
