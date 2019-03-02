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
        const url = `https://newsapi.org/v2/${this.props.news.type}?q=${this.props.news.singleQuery}&language=en&apiKey=5e521ee186464149bdab88068f856c3c`;

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
      <h4>Trending</h4>
            <div className="row">
                {this.renderItems()}
            </div>
      </div>
    )
  }
}

export default News
