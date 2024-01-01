import React  from 'react'
const NewsItem=(props)=> {
  
    let { title, description, imageUrl,url,author,publishedAt,name } =  props;
    return (
      <div>
        <div className="card">
          <img src={imageUrl ? imageUrl : "https://placeholder.com/100x54" } className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(publishedAt).toGMTString()}</small></p>
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"90%", zIndex:1
            }}>{name}</span>
            <a href={url} target="_black" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  
}
export default NewsItem
