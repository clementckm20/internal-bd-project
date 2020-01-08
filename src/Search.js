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
				<p className='caption'>Result</p>
				<div className='result'>
				{this.props.result.length <= 1 ?  '' : this.props.result.map((i,ele)=> {
					return (
						<div key={i+'row'} className="row">
							<div key={i+'card'} className='card'>
								<div key={i+'card-left'}className='col-xs-8'>
									<div key={i+'file'} className='row'><div className='card-row'>File Name:<span className='card-element'>{this.props.result[ele].fields.filename}</span></div></div>
									<div key={i+'author'} className='row'><div className='card-row'>Author:<span className='card-element'>{this.props.result[ele].fields.author}</span></div></div>
									<div key={i+'content'} className='row'><div className='card-row'>Content:<span><i>{' ' + this.props.result[ele].fields.content}</i></span></div></div>
									<div key={i+'location'} className='row'><div className='card-row'>Location:<span>{' ' + this.props.result[ele].fields.location}</span></div></div>
								</div>
								<div key={i+'card-right'} className='col-xs-4'>
									<div key={i+'img'} className='row'><img src={sample} className="sample" alt="sample" /></div>
									<div key={i+'slides'} className='row'><span className='card-footer'>{this.props.result[ele].fields.slides}</span></div>
									<div key={i+'created'} className='row'><span className='card-footer'>Created:{this.props.result[ele].fields.created}</span></div>
									<div key={i+'modified'} className='row'><span className='card-footer'>Modified:{this.props.result[ele].fields.modified}</span></div>
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
