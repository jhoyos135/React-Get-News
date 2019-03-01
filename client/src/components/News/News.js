import React, { Component } from 'react';
import NewSingle from './NewSingle';
import Error from './Error';

class News extends Component {

  state = {
    news: [],
    error: false
    
  };

getNews = async () => {
      try {
       
        const url = `https://newsapi.org/v2/${this.props.news.type}?q=${this.props.search.query}&language=en${this.props.news.page}&sortBy=popularity&apiKey=5e521ee186464149bdab88068f856c3c`;

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

  componentWillReceiveProps() {
    this.getNews()
  };
  componentDidMount() {
    this.getNews();
  }

  renderItems() {
    if(!this.state.error && this.getNews) {
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
      <h2>Top Headlines</h2>
          <em>app in development!</em>   
      <hr />
            <div className="row">
                {this.renderItems()}
            </div>
      </div>
    )
  }
}
export default News
