import React, { Component } from 'react';
import NewSingle from './NewSingle';

class News extends Component {

  state = {
    news: []
  };

  componentDidMount = async () => {
  
      const url = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=0d42dd3174a94b2e9d0fe5f90fe7ee47';
      let res = await fetch(url);
      let data = await res.json();
      console.log(data)
      this.setState({
        news: data.articles
      })
  }

  renderItems() {
        return this.state.news.map(item => (
            <NewSingle key={item.id} item={item} />
        ));
    }
  render() {
    return (
      <div>
            <ul>
                {this.renderItems()}
            </ul>
      </div>
    )
  }
}

export default News
