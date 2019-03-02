import React from 'react';

const Singleside = ({item}) => {
  return (
      <div>
            <a href={item.url} target="_blank">
                <div className="section">
                <h5>{item.source.name}</h5>
                <p>{item.title}</p>
                </div>
            </a>
            <hr />
      </div>
  )
}

export default Singleside
