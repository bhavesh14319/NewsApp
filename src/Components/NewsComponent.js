
// function based news componen

import React,{useEffect,useState} from 'react'
import Spinner from './Spinner';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const NewsComponent=(props) => {
    const [article,setArticle] = useState([]);
    const [totalResults,setTotalResults] = useState(0);
    let [page,setPage] = useState(1);
    const [loading,setLoading] = useState(true);

const updateNews= async ()=> {
        props.setProgress(10);
        setLoading(true);
        let data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=2c890cef818a4c1fadf3114ff1de0c68&page=${page}&pageSize=${props.pageSize}`);
        props.setProgress(50);
        // let data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&category=${this.props.category}&apiKey=2c890cef818a4c1fadf3114ff1de0c68`);
        let response = await data.json();
        props.setProgress(70);
        console.log(response);
        setArticle(response.articles);
        setTotalResults(response.totalResults);
        // this.setState({article:response.articles , totalResults:response.totalResults,loading:false });
        console.log(page);
        setLoading(false);
        props.setProgress(100);
}

useEffect(()=>{
    updateNews();
},[]);

const fetchMoreData = async ()=> {
    console.log(page);
    setPage(page=page+1);
    console.log(page);
    let data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=2c890cef818a4c1fadf3114ff1de0c68&page=${page}&pageSize=${props.pageSize}`);
    // let data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&category=${this.props.category}&apiKey=2c890cef818a4c1fadf3114ff1de0c68`);
    let response = await data.json();
    console.log(response);
    setArticle(article.concat(response.articles));
    setTotalResults(response.totalResults);
    // this.setState({article:this.state.article.concat(response.articles) , totalResults:response.totalResults});
    
}




  return (
    <div>
        <h1 className="text-center " style={{marginTop:"80px"}}>News Monkey- Top Headlines</h1>
            {loading && <Spinner/>}
            <InfiniteScroll
                dataLength={article.length}
                next={fetchMoreData}
                hasMore={article.length!==totalResults}
                loader={<Spinner/>}
            >
        <div className='container my-3' >      
            <div className='row' >        
                {article.map((element)=>{
                return <div className="col-md-4" key={element.url}  style={{height:"600px",overflow:"auto"}}>
                        <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                        </div>
                        
            })}
            </div>
         </div>      
        </InfiniteScroll> 
    </div>
  )
}

NewsComponent.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

NewsComponent.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default NewsComponent











//   return (
//    <>   
    

      
    
//  </>  

//   )
// }


// export default NewsComponent

