import React, { Component } from 'react';
import NewSingle from './NewSingle';
import Error from './Error';

class News extends Component {

  state = {
    news: [],
    error: false    
  };

getNews = async (values) => {
  // console.log(NewQuery)
      try {
       
        const url = `https://newsapi.org/v2/${this.props.news.type}?q=${values}&country=us&page=${this.props.news.page}&sortBy=popularity&apiKey=0d42dd3174a94b2e9d0fe5f90fe7ee47`;

        // console.log(url)
        let res = await fetch(url);
        let data = await res.json();
        // console.log(data)
        this.setState({
          news: data.articles

        });   

      } catch (error) {
          this.setState({
            error: true
          })
      } 
  };

  componentWillReceiveProps(nextProps) {
    const NextQuery = nextProps.search.query;
    this.getNews(NextQuery);
  }
  componentDidMount() {
    this.getNews('');
  }

  renderItems() {
    if(!this.state.error) {
      return this.state.news.map(item => (
        <NewSingle key={item.url} item={item} />
    ));
    } else {
      return <Error />
    }
    }
    
  render() {
    return (
      
      <div className="container">
      <h4>Top Headlines</h4>
          <em>app in development!</em>   
            <div className="row">
                {this.renderItems()}
            </div>
      </div>
    )
  }
}
export default News
