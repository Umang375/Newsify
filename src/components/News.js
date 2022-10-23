import React, { useEffect, useState } from 'react'
import LoadSpin from './LoadSpin';
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News =(props)=> {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    // document.title = `${capitalizeFirstLetter(props.category)}  - Top Headlines`;

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updateNews = async() =>{
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=4f09fa38293646928aece10b852f5bbd&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data =  await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(50);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  }

  useEffect(() => {
    updateNews();
  }, [])
  
 const fetchMoreData = async()=>{
    setPage(page + 1);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    let data =  await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  }
    return (
      <>
         <h1 className='text-center my-5'>Your Daily Shorts from {capitalizeFirstLetter(props.category)}</h1>
         {loading && <LoadSpin/>}
         <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<LoadSpin/>}
        > 
        <div className="container my-3">
          
          <div className="row">
            {!loading && articles.map((element)=>{ 
              return <div className="col-md-4" key={element.url}>
                <NewsItem title = {element.title} description= {element.description?element.description.slice(0,88):""} imageurl = {element.urlToImage} newsUrl = {element.url} author= {element.author} date = {element.publishedAt} source = {element.source.name}/>
              </div>
            })}
          </div>
        </div>
        </InfiniteScroll>
      </>
    )
  }

export default News

News.defaultProps = {
  country: 'in',
  pageSize: 6,
  category: 'general'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}