import React, { Component } from 'react';
import NewSingle from './NewSingle';

class News extends Component {

  state = {
    news: []
  };

  componentDidMount = async () => {
  
      const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&language=en${this.props.news.page}&apiKey=0d42dd3174a94b2e9d0fe5f90fe7ee47`;

      let res = await fetch(url);
      let data = await res.json();
      console.log(data)
      this.setState({
        news: data.articles
      })
  }

  renderItems() {
        return this.state.news.map(item => (
            <NewSingle key={item.url} item={item} />
        ));
    }
  render() {
    return (
      
      <div className="container">
      <hr />
            <div className="row">
                {this.renderItems()}
            </div>
      </div>
    )
  }
}

export default News
