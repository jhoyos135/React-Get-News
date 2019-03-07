import React, { Component } from 'react'

import newsContext from '../contex/news-context';


class Nav extends Component {

  static contextType = newsContext;


  render() {
    return (
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
    )
  }
}

export default Nav
