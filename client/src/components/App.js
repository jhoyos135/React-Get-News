import React, { Component } from 'react';
import './App.css';
import News from './News/News';
import logo from './Logo.png';
import Sidenews from './News/Sidenews';

class App extends Component {

  state = {
    news1: {
      type: 'everything'
    },
    news2: {
      type: 'top-headlines',
      singleQuery: ''
    },
    search: {
      query: ''
    },
    page: {
      number: 1
    }
  };

  searchNews = (input) => {
    input = this.query.value;
    if(input < 1) {
      this.setState({
        search: {
          query: 'trending'
        },
        page: {
          number: 1
        }
      });
    } else {
      this.setState({
        search: {
          query: input
        },
        page: {
          number: 1
        }
      });
    }
    document.querySelector('.prev').classList.add('disabled');
  };

  up = () => {
    let next = this.state.page.number
    this.setState({

      page: {
        number: next + 1
      }
    })
  };
  down = () => {
    let prev = this.state.page.number
    this.setState({

      page: {
        number: prev - 1
      }
    })
  }
  prev = () => {
    if(this.state.page.number !== 1) {
      this.down();
    }
    if(this.state.page.number === 1) {
      document.querySelector('.prev').classList.add('disabled');
      
    }
  }
  next = () => {
    document.querySelector('.prev').classList.remove('disabled');
    this.up()
  }

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
        page={this.state.page}
        
        />

      <ul className="pagination">
        <li className="disabled prev"
        onClick = {
          (e) => {
            e.preventDefault();
            this.prev()
          }
        }
        >
          <a href="#!"><i className="material-icons">chevron_left</i></a>
        </li>

      <li className="waves-effect next"
        onClick = {
          (e) => {
            e.preventDefault();
            this.next()
          }
        }
      >
          <a href="#!"><i className="material-icons">chevron_right</i></a>
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