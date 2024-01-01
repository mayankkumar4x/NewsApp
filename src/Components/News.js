import React, { useEffect,useState } from 'react'

import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

const News=(props)=>{
 const [articles,setArticles]=useState([])
 const [loading,setLoading]=useState(true)
 const [page,setPage]=useState(1)
 const [totalResults,setTotalResults]=useState(0)

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  

  

  const update=async()=> {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=e4ac901088be431da066739fd5dd2fbc&page=${page}&pagesize=${props.pageSize}`;
    props.setProgress(30);
    setLoading(false)
    let data = await fetch(url);
    props.setProgress(60);
    let parsedata = await data.json();
    props.setProgress(80);
    console.log(parsedata);
    setArticles(parsedata.articles)
    setTotalResults(parsedata.totalResults)
    setLoading(true);
    props.setProgress(100);
  }
  useEffect(()=>{
     document.title = `${capitalizeFirstLetter(props.category)} - NewsApp`;
  update();
  },[])
  
  const prevfun = async () => {
   
    setPage(--page)
    update();
  }
  const nextfun = async () => {
   setPage(++page)
    update();
  }
  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=e4ac901088be431da066739fd5dd2fbc&page=${page+1}&pagesize=${props.pageSize}`;
    setPage(page+1)

    let data = await fetch(url);
    let parsedata = await data.json();
    // console.log(parsedata);
    setArticles(articles.concat(parsedata.articles))
    setTotalResults(parsedata.totalResults)
  };
 
    return (<>
      <h2 className='text-center' style={{ margin: '70px 0px' }}>Top {capitalizeFirstLetter(props.category)} Headlines</h2>
      {!loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        {/* {items.map((i, index) => (
            <div style={style} key={index}>
            div - #{index}
            </div>
          ))} */}
        <div className='container my-3'>
          <div className='row'>
            {articles.map((element) => {
              return (<div className='col-md-4' key={element.url}>
                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url} author={element.author} publishedAt={element.publishedAt} name={element.source.name} />
              </div>);
            })}
          </div></div>
      </InfiniteScroll>
      {/* <div className="d-flex justify-content-between">
          <button disabled={page==1} type="button" className="btn btn-dark" onClick={prevfun}>&larr;Previous</button>
          <button type="button" disabled={page+1 > Math.ceil(totalResults/props.pageSize)} className="btn btn-dark" onClick={nextfun}>Next&rarr;</button>
        </div> */}


      {/* <div className='col-md-4'>
            <NewsItem title="mytitile" description="mydescription" imageUrl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg"/>
        </div> */}


    </>)
  
      }
News.defaultProps = {
  country: 'in',
  pageSize: 9,
  category: 'general',
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}
export default News
