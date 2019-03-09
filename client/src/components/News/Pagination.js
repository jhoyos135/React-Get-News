import React, { Component } from 'react'

import newsContext from '../contex/news-context';


class Pagination extends Component {

  static contextType = newsContext;
  _isMounted = false;

componentWillUnmount() {
    this._isMounted = false;
  };

  
  
  render() {
    return (
    <div>
        <ul className="pagination">
            <li className="disabled prev"
                onClick = {
                (e) => {
                    e.preventDefault();
                    this.context.prev();
                }
                }
                >
                <a href="#!"><i className="material-icons">chevron_left</i></a>
                </li>

            <li className="waves-effect next"
                onClick = {
                (e) => {
                    e.preventDefault();
                    this.context.next();
                }
                }
            >
                <a href="#!"><i className="material-icons">chevron_right</i></a>
            </li>
        </ul>
    </div>
    )
  }
}

export default Pagination
