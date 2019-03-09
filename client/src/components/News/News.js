import React, { Component } from 'react';
import NewSingle from './NewSingle';
import Error from './Error';
import Loader from './Loader';
import newsContext from '../contex/news-context';

class News extends Component {

  static contextType = newsContext;
  _isMounted = false;

  componentDidMount(){
    let page = this.context.page.number;
    let query = this.context.search.query;
    this.context.getNews(query, page);
  }
    componentWillUnmount() {
      this._isMounted = true;
    }

    runFun = () => {
      let page = this.context.page.number;
      let query = this.context.search.query;
      this.context.getNews(query,page)
    }


  renderItems() {
    let articles = this.context.news1.articles
    if(this.context.error) {
      return <Error />
    } else if(articles.length === 0 && !this.context.error) {
      return <Loader />
    } else {
      return articles.map(item => (
        <NewSingle key={item.url} item={item} />
    ));
      
    }
  
    }
    
  render() {
    return (
      
      <div className="container">
            <div className="row">
                {this.renderItems()}
            </div>
      </div>
    )
  }
}
export default News
