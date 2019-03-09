import React, { Component } from 'react';
import axios from 'axios';

import NewsContext from './news-context';

class GlobalState extends Component {

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
          query: 'trending'
        },
        page: {
          number: 1
        }
      };

      getNews = async (values, page) => {
        // console.log(NewQuery)
            try {
             
              const url = `https://newsapi.org/v2/everything?q=${values}&sortBy=popularity&page=${page}&apiKey=5e521ee186464149bdab88068f856c3c`;
              console.log(url)
              
                      
              console.log('running')
              let res = await fetch(url);
              let data = await res.json();
              let articles = data.articles;
              // console.log(data.articles)
              
              this.setState({
                news1: {
                  articles: articles
                 }
              })

             
                   
      
            } catch (error) {
                this.setState({
                  error: true
                })
            } 
        };

        

        update = () => {
          
        }

      getSideNews = async () => {
            
        try {
          const url = `https://newsapi.org/v2/${this.state.news2.type}?q=${this.state.news2.singleQuery}&country=us&apiKey=5e521ee186464149bdab88068f856c3c`;

          let res = await fetch(url);
          let data = await res.json();
          // console.log(url)
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
          
          document.querySelector('.prev').classList.add('disabled');
        };
    
      up = () => {
        let next = this.state.page.number;
        let query = this.state.search.query;
    
        // let search = document.querySelector('#search').value;
        if(query === '') {
          this.setState({
            search: {
              query: 'trending'
            },
            page: {
              number: next + 1
            }
          })
         
        }else {
          this.setState({
            page: {
              number: next + 1
            }
          })
        }        
        document.querySelector('.prev').classList.remove('disabled');
        

      };
      down = () => {
        let prev = this.state.page.number;
        let page = this.state.page.number;
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
          document.querySelector('.prev').classList.add('disabled');
        }
      }
      next = () => {
        this.up();
      }
      

      componentDidUpdate(...nextState) {
        process.nextTick( () => {
          let page = nextState[1].page.number;
          let query = nextState[1].search.query;
          this.getNews(query, page)
        })
        }

  render() {
    return (
        <NewsContext.Provider
            value={{
                news1: this.state.news1,
                news2: this.state.news2,
                page: this.state.page,
                search: this.state.search,
                getNews: this.getNews,
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
