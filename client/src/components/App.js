import React, { Component } from 'react';
import './App.css';
import News from './News/News';

class App extends Component {

  state = {
    news1: {
      type: 'top-headlines',
      query: `q=korea`,
      page: `&page=1`
    }
  };

  render() {
    return (
      <div className="App">

      <nav>
    <div className="nav-wrapper indigo">
      <form>
        <div className="input-field">
          <input id="search" type="search" required placeholder="What Category are you looking for?" />
          <label className="label-icon" for="search"><i className="material-icons">search</i></label>
          <i className="material-icons">close</i>
        </div>
      </form>
     
    </div>
  </nav>
  <h1>Top Headlines</h1>
  <em>app in development!</em>
       <News news={this.state.news1} />
     
       
      </div>
    );
  }
}

export default App;
