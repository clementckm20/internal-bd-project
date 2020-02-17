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
		for (var i=0; i<this.props.result.length; i++){
			var field_obj = this.props.result[i].fields
			field_obj["preview"] = <img className='preview-image' src={process.env.PUBLIC_URL + 'images/'+this.props.result[i].fields.filename + '-' + this.props.result[i].fields.slide+'.jpg'}/>
			result_arr.push(field_obj)
		}

		const columns = [{
		  dataField: 'preview',
		  text: 'Preview',
			headerStyle: { fontSize: '14px', fontStyle: 'Open Sans', overflowWrap: 'break-word', width: '20%' }
		},{
		  dataField: 'filename',
		  text: 'File Name',
			sort: true,
			filter: textFilter({
				placeholder: 'Filename'
			}),
			headerStyle: { fontSize: '14px', fontStyle: 'Open Sans', overflowWrap: 'break-word', width: '10%' }
		},{
			dataField: 'content',
			text: 'Content',
			filter: textFilter({
				placeholder: 'Any words'
			}),
			headerStyle: { fontSize: '14px', width: '20%', fontStyle: 'Open Sans'}
		},{
		  dataField: 'author',
		  text: 'Author',
			filter: textFilter({
				placeholder: 'Author'
			}),
			sort: true,
			headerStyle: { fontSize: '14px', width: '10%', fontStyle: 'Open Sans' }
		},{
		  dataField: 'created',
		  text: 'Created',
			sort: true,
			filter: dateFilter({
    		delay: 600,
    		withoutEmptyComparatorOption: true,
    		style: { display: 'inline-grid' },
		    comparatorStyle: { width: '50%'},
		    dateStyle: { margin: '0px', width: '100%', fontSize: '12px' },
			}),
			headerStyle: { fontSize: '14px', fontStyle: 'Open Sans' }
		},{
		  dataField: 'modified',
		  text: 'Modified',
			sort: true,
			filter: dateFilter({
    		delay: 600,
    		withoutEmptyComparatorOption: true,
    		style: { display: 'inline-grid' },
		    comparatorStyle: { width: '50%'},
		    dateStyle: { margin: '0px', width: '100%', fontSize: '12px' },
			}),
			headerStyle: { fontSize: '14px', fontStyle: 'Open Sans' }
		},{
			dataField: 'slide',
		  text: 'Slide No.',
			sort: true,
			headerStyle: { fontSize: '14px', width: '4%', overflowWrap: 'break-word', fontStyle: 'Open Sans' }
		},{
			dataField: 'location',
			text: 'Location',
			filter: textFilter({
				placeholder: 'Folder name'
			}),
			headerStyle: { fontSize: '14px', width: '10%', fontStyle: 'Open Sans' }
		}];

		return (
			<div>
				<div className='result'>
					<div className='col-xs-12'>
						{this.props.result.length <= 1 ? '' :
							<div>
							<p className='caption'>{this.props.result.length+' '}Results</p>
							<BootstrapTable
								keyField='id'
								data={ result_arr }
								columns={ columns }
								pagination={ paginationFactory() }
								filter={ filterFactory() }
								rowStyle={{ fontSize: '12px', color: 'black', overflowWrap: 'break-word', fontStyle: 'Open Sans' }}
							/>
						</div>}
					</div>
				</div>
			</div>
		);
  }
}


export default App;
