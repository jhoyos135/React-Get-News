import React, { Component } from 'react';
import './App.css';
import News from './News/News';
import logo from './Logo.png';
import Sidenews from './News/Sidenews';

class App extends Component {

  state = {
    news1: {
      type: 'everything',
      page: 1
    },
    news2: {
      type: 'top-headlines',
      singleQuery: ''
    },
    search: {
      query: ''
    }
  };

  searchNews = (input) => {
    input = this.query.value;
    if(input < 1) {
      this.setState({
        search: {
          query: 'trending'
        }
      });
    } else {
      this.setState({
        search: {
          query: input
        }
      });
    }

    
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
          <em>app in development!</em>   
        </header>

      <div className="col s9 left_side">
        <News 
        news={this.state.news1}
        search={this.state.search}
        />

      <ul class="pagination">
        <li class="disabled prev">
          <a href="#!"><i class="material-icons">chevron_left</i></a>
        </li>

        <li class="waves-effect next">
          <a href="#!"><i class="material-icons">chevron_right</i></a>
        </li>
      </ul>

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