import React, { Component } from 'react'
import NewsItem from './NewsItem'


export class News extends Component {
 
 
  constructor(){
    super();
    this.state={
      articles: [],
      loading: false,
      page: 1
    }
  }

  async componentDidMount() {
    console.log("compnent");
    let url = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=4f09fa38293646928aece10b852f5bbd';
    let data =  await fetch(url);
    let parsedData = await data.json();
    console.log (parsedData);
    this.setState({articles: parsedData.articles})
  } 

  render() {
    return (
      <div className='container my-3'>
        <h1>Your Daily Shorts</h1>
        <div className="row">
          {this.state.articles.map((element)=>{ 
            return <div className="col-md-4" key={element.url}>
              <NewsItem title = {element.title?element.title.slice(0,45):""} description= {element.description?element.description.slice(0,88):""} imageurl = {element.urlToImage} newsUrl = {element.url} />
            </div>
          })}
          
          </div>
      </div>
    )
  }
}

export default News
