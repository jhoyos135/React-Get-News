import React, { Component } from 'react';
import './App.css';
import News from './News/News';
import logo from './Logo.png';
import Sidenews from './News/Sidenews';
import Pagination from './News/Pagination';
import Nav from './News/Nav';
import GlobalState from './contex/GlobalState';


class App extends Component {

  render() {
    
    return (

      <GlobalState>
      
      <div className="App container-fluid">

      <div className="navbar-fixed">
       <Nav />
      </div>

      <div className="row">
        <header>
          <h1>
            <a href="http://juliandhoyos.com" target='_blank'><img src={logo} alt=""/>
            </a>
            Get News
          </h1>
          <em>app in development!</em>   
        </header>

      <div className="col s12 m9 left_side">
            <Pagination />
            <News/>
      </div>
        
      <div className="col s12 m3">
            <Sidenews />
      </div>
      </div>

      <footer className="page-footer indigo">
        <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col m12">
              <a href="http://juliandhoyos.com" target="_blank">Develop by Julian H.</a>
            </div>
          </div>
        </div>
        </div>
        
      </footer>

      </div>

      </GlobalState>

    );
  }
}

export default App;