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
				<p className='resultcount'>{this.props.result.length+' '}Results</p>
				<div id='result' className='result'>
				{this.props.result.length <= 1 ?  '' : this.props.result.map((ele,i)=> {
					return (
						<div key={i+'row'} className="row">
							<div className='card'>
								<div className='col-xs-8'>
									<div className='row'><div className='card-row'><strong>File Name:</strong><a href={'file:/' + ele.fields.location + '/' + ele.fields.filename}><span>{' ' + ele.fields.filename}</span></a></div></div>
									<div className='row'><div className='card-row'><strong>Author:</strong><span>{' ' + ele.fields.author}</span></div></div>
									<div className='row'><div className='card-row'><strong>Content:</strong><span>{' ' + ele.fields.content}</span></div></div>
									<div className='row'><div className='card-row'><strong>Location:</strong><span>{' ' + ele.fields.location}</span></div></div>
								</div>
								<div className='col-xs-4'>
									<div className='row'><img src={sample} className="sample" alt="sample" /></div>
									<div className='row'><span className='card-footer'>Slide Number:{ele.fields.slide}</span></div>
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


export default App;
