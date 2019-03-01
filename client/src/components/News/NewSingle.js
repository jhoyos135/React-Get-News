import React from 'react'

const NewSingle = ({item}) => {
  return (
    <div className="col s12 m12 l6 custom_cards">
        <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          
          <img className="activator custom_img" src={item.urlToImage} />
          
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4" style={{fontSize:"18px"}}><i className="material-icons right">more_vert</i>
          {item.title}
          </span>
          <p> {item.source.name} </p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">{item.title}<i className="material-icons right">close</i></span>
          <p>{item.content}</p>
          <p><a href={item.url} target="_blank">LINK TO FULL ARTICLE</a></p>
          
        </div>
      </div>
    </div>

    
  )
};

export default NewSingle

