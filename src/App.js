import React from 'react';
import Search from './Search.js';
import logo from './logo.jpg';
import './App.css';

function App() {
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
							<div className='col-xs-10'><input className='search' placeholder='e.g. Agile, Digital Enabler, Richard'/></div>
							<div className='col-xs-2'><button className='searchbtn' type="submit"><i className="fa fa-search"></i></button></div>
						</form>
					</div>
				</div>
				<Search />
      </header>
    </div>
  );
}

export default App;
