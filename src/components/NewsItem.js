import React, { Component } from 'react'

export class NewsItem extends Component {
  

  render() {
    let {title, description, imageurl, newsUrl, author, date, source} = this.props;
    return (
      <div className = "my-3">
        <div className="card" style={{width: "18rem"}}>
          <img src= {!imageurl ? "https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg": imageurl} className="card-img-top" alt='...'/>
          <div className="card-body">
            <h5 className="card-title">{title}<span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger " style={{left:'90%', zIndex: '1'}}> {source}
            </span></h5>
            <p className="card-text">{description}...</p>
            <a href= {newsUrl} className="btn btn-sm btn btn-primary">Read More</a>
            <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toUTCString()} </small></p>
          </div>
        </div>
      </div>
    )
  }  
}

export default NewsItem
