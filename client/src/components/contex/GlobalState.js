import React, { Component } from 'react';

import NewsContext from './news-context';

class GlobalState extends Component {
    _isMounted = false;

    state = {
        news1: {
          type: 'everything',
          articles: []
        },
        news2: {
          type: 'top-headlines',
          singleQuery: '',
          sidenews: []
        },
        search: {
          query: ''
        },
        page: {
          number: 1
        }
      };

      getNews = async (values, page) => {
        this._isMounted = true;
        // console.log(NewQuery)
            try {
             
              const url = `https://newsapi.org/v2/${this.state.news1.type}?q=${values}&sortBy=popularity&page=${page}&apiKey=5e521ee186464149bdab88068f856c3c`;
      
              // console.log(url)
              let res = await fetch(url);
              let data = await res.json();
              // console.log(data.articles)
              if(this._isMounted) {
                this.setState({
                  news1: {
                    articles: data.articles
                  },
        
                });   
              }
      
            } catch (error) {
                this.setState({
                  error: true
                })
            } 
        };

      getSideNews = async () => {
            
        try {
          const url = `https://newsapi.org/v2/${this.state.news2.type}?q=${this.state.news2.singleQuery}&country=us&apiKey=5e521ee186464149bdab88068f856c3c`;

          let res = await fetch(url);
          let data = await res.json();
          // console.log(data)
          this.setState({
            news2: {
              sidenews: data.articles
            },
          })  
        } catch (error) {
          this.setState({
            error: true
          })
        }
        }

      searchNews = (input) => {
        input = this.query.value;
        if(input < 1) {
          this.setState({
            search: {
              query: 'trending'
            },
            page: {
              number: 1
            }
          });
        } else {
          this.setState({
            search: {
              query: input
            },
            page: {
              number: 1
            }
          });
        }
        // document.querySelector('.prev').classList.add('disabled');
      };
    
      up = () => {
        let next = this.state.page.number
        // let search = document.querySelector('#search').value;
        // if(search === '') {
        //   this.setState({
        //     search: {
        //       query: 'trending'
        //     },
        //     page: {
        //       number: next + 1
        //     }
        //   })
        // };
        this.setState({
          page: {
            number: next + 1
          }
        })
    
      };
      down = () => {
        let prev = this.state.page.number
        this.setState({
          page: {
            number: prev - 1
          }
        })
      };
      prev = () => {
        if(this.state.page.number !== 1) {
          this.down();
        }
        if(this.state.page.number === 1) {
          // document.querySelector('.prev').classList.add('disabled');
        }
      }
      next = () => {
        // document.querySelector('.prev').classList.remove('disabled');
        this.up()
      }

  render() {
    return (
        <NewsContext.Provider
            value={{
                news1: this.state.news1,
                news2: this.state.news2,
                getNews: this.getNews,
                page: this.state.page,
                search: this.state.search,
                getSideNews: this.getSideNews,
                searchNews: this.searchNews,
                prev: this.prev,
                next: this.next
            }}
        >
            {this.props.children}
        </NewsContext.Provider>
    )
  }
}

export default GlobalState
