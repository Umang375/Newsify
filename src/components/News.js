import React, { Component } from 'react'
import LoadSpin from './LoadSpin';
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
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=4f09fa38293646928aece10b852f5bbd&page=1&pageSize=${this.props.pageSize}`;
    let data =  await fetch(url);
    let parsedData = await data.json();
    console.log (parsedData);
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
  } 

  handlePrev = async()=>{
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=4f09fa38293646928aece10b852f5bbd&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    let data =  await fetch(url);
    let parsedData = await data.json();
    console.log (parsedData);
    this.setState({articles: parsedData.articles,
    page: this.state.page - 1})
  }

  handleNext = async()=>{
      console.log("Next");
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=4f09fa38293646928aece10b852f5bbd&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      let data =  await fetch(url);
      let parsedData = await data.json();
      console.log (parsedData);
      this.setState({articles: parsedData.articles,
      page: this.state.page + 1})
  }


  render() {
    return (
      <div className='container my-3'>
         <h1 className='text-center'>Your Daily Shorts</h1>
         <LoadSpin/>
        <div className="row">
          {this.state.articles.map((element)=>{ 
            return <div className="col-md-4" key={element.url}>
              <NewsItem title = {element.title} description= {element.description?element.description.slice(0,88):""} imageurl = {element.urlToImage} newsUrl = {element.url} />
            </div>
          })}
          <div className="container d-flex justify-content-between">
          <button disabled = {this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrev}> &larr; Pervious</button>
          <button disabled = {this.state.page + 1 > Math.ceil(this.state.totalResults/20)} type="button" className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
          </div>
          </div>
      </div>
    )
  }
}

export default News
