import React, { useState,useEffect } from 'react'
import NewsItem from './NewsItem'
import propTypes from 'prop-types'
import Spinner from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component'

const News = (props)=>{
    const [articles,setarticles] = useState([ ]);
    const [loading,setloading] = useState(true);
    const [page,setpage] = useState(1);
    const [totalResults,settotalResults] = useState(0);


    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const  updateNews = async()=> {
        props.setprogress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pagesize=${props.pagesize}`
        setloading(true)
        let data = await fetch(url);
        props.setprogress(30)
        let parseData = await data.json();
        props.setprogress(50)
        setarticles(parseData.articles)
        settotalResults(parseData.totalResults)
        setloading(false)
        props.setprogress(100)
    }

    useEffect(()=>{
        updateNews();
       // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

   const fetchMoreData = async()=>{
        setpage(page + 1,async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pagesize=${props.pagesize}`
        let data = await fetch(url);
        let parseData = await data.json();
        setarticles(articles.concat(parseData.articles))
        settotalResults(parseData.totalResults)
        });
    }

        return (
            <div >
                <div className="text-center"><h1>Yesterday_News Top {capitalize(props.category)} Headline</h1></div>
                {loading && <Spinner/>}
                <InfiniteScroll 
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner/>}
                    >
                    <div className="container">    
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4 my-3" key={element.url}>
                                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage}
                                    newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    </div>
                    </InfiniteScroll>
            </div>
        )
}

News.defaultProps = {
    country: "in",
    category: "general",
    pagesize: 6
}
News.propTypes = {
    country: propTypes.string,
    category: propTypes.string,
    pagesize: propTypes.number
}

export default News;