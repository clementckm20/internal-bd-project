import React from 'react';
import './App.css';
// import sample from '/Users/clemchan/OneDrive - Deloitte (O365D)/Documents/smart_bd/internal-bd-project-master/public/images/sample.jpg'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter, dateFilter, numberFilter } from 'react-bootstrap-table2-filter';

class App extends React.Component {
	constructor(props) {
  	super(props);
		this.state = {
		}
	}
  render() {
		var result_arr = []
		console.log(this.props.result)
		for (var i=0; i<this.props.result.length; i++){
			var field_obj = this.props.result[i].fields
			field_obj["preview"] = <img className='preview-image' src={process.env.PUBLIC_URL + 'images/'+this.props.result[i].fields.filename + '-' + this.props.result[i].fields.slide+'.jpg'}/>
			result_arr.push(field_obj)
		}

		const columns = [{
		  dataField: 'preview',
		  text: 'Preview',
			headerStyle: { fontSize: '12px', overflowWrap: 'break-word' }
		},{
		  dataField: 'filename',
		  text: 'File Name',
			sort: true,
			filter: textFilter(),
			headerStyle: { fontSize: '12px', overflowWrap: 'break-word' }
		},{
		  dataField: 'created',
		  text: 'Created',
			sort: true,
			filter: dateFilter({
    		delay: 600,
    		withoutEmptyComparatorOption: true,
    		style: { display: 'inline-grid' },
		    comparatorStyle: { width: '50%'},
		    dateStyle: { margin: '0px', width: '100%' },
			}),
			headerStyle: { fontSize: '12px' }
		},{
		  dataField: 'modified',
		  text: 'Modified',
			sort: true,
			filter: dateFilter({
    		delay: 600,
    		withoutEmptyComparatorOption: true,
    		style: { display: 'inline-grid' },
		    comparatorStyle: { width: '50%'},
		    dateStyle: { margin: '0px', width: '100%' },
			}),
			headerStyle: { fontSize: '12px' }
		},{
		  dataField: 'author',
		  text: 'Author',
			filter: textFilter(),
			sort: true,
			headerStyle: { fontSize: '12px' }
		},{
			dataField: 'slide',
		  text: 'Slide Number',
			filter: textFilter(),
			sort: true,
			headerStyle: { fontSize: '12px' }
		},{
			dataField: 'content',
			text: 'Content',
			filter: textFilter(),
			headerStyle: { fontSize: '12px' }
		},{
			dataField: 'location',
			text: 'Location',
			filter: textFilter(),
			headerStyle: { fontSize: '12px' }
		}];

		return (
			<div>
			<br />
				<p className='caption'>{this.props.result.length+' '}Results</p>
				<div className='result'>
					<div className='col-xs-12'>
						{this.props.result.length <= 1 ? '' :
							<BootstrapTable
								keyField='id'
								data={ result_arr }
								columns={ columns }
								pagination={ paginationFactory() }
								filter={ filterFactory() }
								rowStyle={{ fontSize: '10px'}}
							/>}
					</div>
				{/**this.props.result.length <= 1 ?  '' : this.props.result.map((ele,i)=> {
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
									<div className='row'><span className='card-footer'>Slide Number:{ele.fields.slide}</span></div>
									<div className='row'><span className='card-footer'>Created:{ele.fields.created}</span></div>
									<div className='row'><span className='card-footer'>Modified:{ele.fields.modified}</span></div>
								</div>
							</div>
						</div>
					)
				})**/}
				</div>
			</div>
		);
  }
}


export default App;
