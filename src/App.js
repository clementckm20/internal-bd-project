import React from 'react';
import Search from './Search.js';
import logo from './logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Type keywords to search for BD projets.
        </p>
				<form className="form-inline" action="action_page.php">
					<input className='search' placeholder='e.g. Agile, Digital Enabler, Richard'/>
				  <button className='searchbtn' type="submit"><i className="fa fa-search"></i></button>
				</form>
				<Search />
      </header>
    </div>
  );
}

export default App;
