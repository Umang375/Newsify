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

  handlePrev = async()=>{
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=4f09fa38293646928aece10b852f5bbd&page=${this.state.page - 1}`;
    let data =  await fetch(url);
    let parsedData = await data.json();
    console.log (parsedData);
    this.setState({articles: parsedData.articles,
    page: this.state.page - 1})
  }

  handleNext = async()=>{
    console.log("Next");
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=4f09fa38293646928aece10b852f5bbd&page=${this.state.page + 1}`;
    let data =  await fetch(url);
    let parsedData = await data.json();
    console.log (parsedData);
    this.setState({articles: parsedData.articles,
    page: this.state.page + 1})
  }


  render() {
    return (
      <div className='container my-3'>
        <h1>Your Daily Shorts</h1>
        <div className="row">
          {this.state.articles.map((element)=>{ 
            return <div className="col-md-4" key={element.url}>
              <NewsItem title = {element.title} description= {element.description?element.description.slice(0,88):""} imageurl = {element.urlToImage} newsUrl = {element.url} />
            </div>
          })}
          <div className="container d-flex justify-content-between">
          <button type="button" class="btn btn-dark" onClick={this.handlePrev}> &larr; Pervious</button>
          <button type="button" class="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
          </div>
          </div>
      </div>
    )
  }
}

export default News
