import React, { Component } from 'react';
import './App.css';
import News from './News/News';
import logo from './Logo.png';
import Sidenews from './News/Sidenews';

class App extends Component {

  state = {
    news1: {
      type: 'top-headlines',
      page: 1
    },
    news2: {
      type: 'everything',
      singleQuery: 'q=trending'
    },
    search: {
      query: ''
    }
  };

  searchNews = (input) => {
    input = this.query.value;
    this.setState({
      search: {
        query: input
      }
    });
    
  };

  render() {
    
    return (
      <div className="App container-fluid">

      <div className="navbar-fixed">
  <nav>
    <div className="nav-wrapper indigo">
      <form>
        <div className="input-field">
          <input id="search" type="search" 
          ref = {input => this.query = input}
          placeholder="What news are you looking for?"
          onChange={
            (e) => {
              e.preventDefault()
              this.searchNews();
              
            }
          }
           />

          <label className="label-icon" for="search"><i className="material-icons">search</i></label>
          <i className="material-icons close">close</i>
          
        </div>
      </form>
    </div>
  </nav>
      </div>

      <div className="row">
        <header>
          <h1>
            <a href="http://juliandhoyos.com" target='_blank'><img src={logo} alt=""/>
            </a>
            Get News
          </h1>
        </header>
        <hr />
        <div className="col s9">
        <News 
        news={this.state.news1}
        search={this.state.search}
        />
        </div>
        
        <div className="col s3">
          <Sidenews 
          news={this.state.news2} 
          />
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
    );
  }
}

export default App;