import React from 'react';

export default React.createContext({
    news1: {
      type: 'everything'
    },
    news2: {
      type: 'top-headlines',
      singleQuery: ''
    },
    search: {
      query: ''
    },
    page: {
      number: 1
    },
    searchNews: input => {},
    getNews: (values, page) => {},
    up: () => {},
    down: () => {},
    prev: () => {},
    next: () => {}
});