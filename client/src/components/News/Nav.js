import React, { Component } from 'react'

import newsContext from '../contex/news-context';

class Nav extends Component {

  static contextType = newsContext;

  handleChange = (event) => {
    const text = event.target.value;
    this.context.searchNews(text)
  }

  render() {
    return (
        <nav>
        <div className="nav-wrapper indigo">
          <form>
            <div className="input-field">
              <input id="search" type="search" 
              placeholder="What news are you looking for?"
              onChange={this.handleChange} value={this.props.value}
               />
    
              <label className="label-icon" for="search"><i className="material-icons">search</i></label>
              <i className="material-icons close">close</i>
              
            </div>
          </form>
        </div>
      </nav>
    )
  }
}

export default Nav
