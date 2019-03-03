import React, { Component } from 'react';
import Singleside from './Singleside';
import Error from './Error';

class News extends Component {

  state = {
    sidenews: [],
    error: false
  };

  componentDidMount = async () => {

      try {
        const url = `https://newsapi.org/v2/${this.props.news.type}?q=${this.props.news.singleQuery}&language=en&apiKey=0d42dd3174a94b2e9d0fe5f90fe7ee47`;

        let res = await fetch(url);
        let data = await res.json();
        // console.log(data)
        this.setState({
          sidenews: data.articles
        })  
      } catch (error) {
        this.setState({
          error: true
        })
      }
  }

  renderItems() {
      if(!this.state.error) {
        return this.state.sidenews.map(item => (
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
