import React from 'react';

const Singleside = ({item}) => {
  return (
    <div>
      <div>
          <div className="divider"></div>
            <a href={item.url} target="_blank">
                <div className="section">
                <h5>{item.source.name}</h5>
                <p>{item.title}</p>
                </div>
            </a>
      </div>
    </div>
  )
}

export default Singleside
