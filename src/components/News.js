import React, { Component } from 'react'
import LoadSpin from './LoadSpin';
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'


export class News extends Component {
 static defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general'
 }

 static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props){
    super(props);
    this.state={
      articles: [],
      loading: false,
      page: 1
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)}  - Top Headlines`;
  }

  async updateNews(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4f09fa38293646928aece10b852f5bbd&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data =  await fetch(url);
    let parsedData = await data.json();
    console.log (parsedData);
    this.setState({articles: parsedData.articles, 
      totalResults: parsedData.totalResults,
      loading: false})
  }

  async componentDidMount() {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4f09fa38293646928aece10b852f5bbd&page=1&pageSize=${this.props.pageSize}`;
    // let data =  await fetch(url);
    // let parsedData = await data.json();
    // console.log (parsedData);
    // this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
    this.updateNews();
  } 

  handlePrev = async()=>{
    // console.log("Previous");
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4f09fa38293646928aece10b852f5bbd&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading: true});
    // let data =  await fetch(url);
    // let parsedData = await data.json();
    // console.log (parsedData);
    // this.setState({
    //   articles: parsedData.articles,
    //   page: this.state.page - 1,
    //   loading: false
    // })
    this.setState({page: this.state.page - 1})
    this.updateNews();
  }

  handleNext = async()=>{
    console.log("Next");
    // if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/20))){
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4f09fa38293646928aece10b852f5bbd&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //     this.setState({loading: true});
    //     let data =  await fetch(url);
    //     let parsedData = await data.json();
    //     console.log (parsedData);
    //     this.setState({
    //       articles: parsedData.articles,
    //       page: this.state.page + 1,
    //       loading: false
    //   })
    // }
    this.setState({page: this.state.page + 1});
    this.updateNews();
  }


  render() {
    return (
      <div className='container my-3'>
         <h1 className='text-center'>Your Daily Shorts from {this.capitalizeFirstLetter(this.props.category)}</h1>
         {this.state.loading && <LoadSpin/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element)=>{ 
            return <div className="col-md-4" key={element.url}>
              <NewsItem title = {element.title} description= {element.description?element.description.slice(0,88):""} imageurl = {element.urlToImage} newsUrl = {element.url} author= {element.author} date = {element.publishedAt} source = {element.source.name}/>
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
