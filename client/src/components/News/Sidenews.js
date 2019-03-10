import React, { Component } from 'react';
import Singleside from './Singleside';
import Error from './Error';
import newsContext from '../contex/news-context';

class News extends Component {
  static contextType = newsContext;

  componentDidMount() {
    this.context.getSideNews();
  }

  renderItems() {
    let articles = this.context.news2.sidenews
      if(!this.context.error) {
        return articles.map(item => (
          <Singleside key={item.url} item={item} />
      ));
      } else {
        return <Error />
      }
    }
  render() {
    return (
      
      <div className="container">
      <h4>Top Headlines</h4>
            <div className="row">
                {this.renderItems()}
            </div>
      </div>
    )
  }
}

export default News
