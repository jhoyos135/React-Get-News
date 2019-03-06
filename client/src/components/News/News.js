import React, { Component } from 'react';
import NewSingle from './NewSingle';
import Error from './Error';
import Loader from './Loader';

class News extends Component {

  state = {
    news: [],
    error: false
  };

  _isMounted = false;

getNews = async (values, page) => {
  this._isMounted = true;
  // console.log(NewQuery)
      try {
       
        const url = `https://newsapi.org/v2/${this.props.news.type}?q=${values}&sortBy=popularity&page=${page}&apiKey=5e521ee186464149bdab88068f856c3c`;

        // console.log(url)
        let res = await fetch(url);
        let data = await res.json();
        // console.log(data)
        if(this._isMounted) {
          this.setState({
            news: data.articles
  
          });   
        }

      } catch (error) {
          this.setState({
            error: true
          })
      } 
  };

  componentWillReceiveProps(nextProps) {
    const NextQuery = nextProps.search.query;
    const page = nextProps.page.number;
    this.getNews(NextQuery, page);
  }
  componentDidMount() {
    this._isMounted = true;
    this.getNews('trending', 1);
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  renderItems() {
    if(this.state.error) {
      return <Error />
    } else if(this.state.news.length === 0 && !this.state.error) {
      return <Loader />
    } else {
      return this.state.news.map(item => (
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
