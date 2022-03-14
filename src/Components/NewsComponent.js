// import React, { Component } from 'react'
// import NewsItem from './NewsItem'
// import Spinner from './Spinner';
// import PropTypes from 'prop-types'
// import InfiniteScroll from "react-infinite-scroll-component";


// export default class newsComponent extends Component {

//     article=[];

//     static defaultProps = {
//         country : 'in',
//         pageSize : 8,
//         category : 'general'
//     }

//     static propTypes = {
//         country : PropTypes.string,
//         pageSize : PropTypes.number,
//         category : PropTypes.string
//     }

//     constructor(){
//         super();
//         this.state={
//             article : this.article,
//             totalResults: 0,
//             page: 1,
//             loading : true
//         }
      
//     }

//     async updateNews(){
//         this.props.setProgress(10);
//         let data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=2c890cef818a4c1fadf3114ff1de0c68&page=${this.state.page}&pageSize=${this.props.pageSize}`);
//         this.setState({loading:true});
//         this.props.setProgress(50);
//         // let data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&category=${this.props.category}&apiKey=2c890cef818a4c1fadf3114ff1de0c68`);
//         let response = await data.json();
//         this.props.setProgress(70);
//         console.log(response);
//         this.setState({article:response.articles , totalResults:response.totalResults,loading:false });
//         console.log(this.state.page);
//         this.props.setProgress(100);
//     }


//     // function to fetch news from api
//     async componentDidMount(){
//         // try{
//         // let data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=2c890cef818a4c1fadf3114ff1de0c68&pageSize=${this.props.pageSize}`);
//         // this.setState({loading:true});
//         // // let data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2c890cef818a4c1fadf3114ff1de0c68`);
//         // let response = await data.json();
//         // console.log(response);
//         // this.setState({article:response.articles , totalResults:response.totalResults });
//         // this.setState({article:response.articles,loading:false});
//         // console.log(this.state.page);
//         // }catch(error){
//         //     console.log('ohh '+ error);
//         // }
//         this.updateNews();
//     }

//     // nextClicked=async () => {
       
//     //     if(this.state.page>Math.ceil(this.state.totalResults/this.state.article.length)){

//     //     }else{
//     //     // try{    
//     //     // let data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=2c890cef818a4c1fadf3114ff1de0c68&page=${this.state.page+1}&pageSize=${this.props.pageSize}`);
//     //     // this.setState({loading:true});
//     //     // // let data = await fetch(`https://newsapi.org/v2/everything?q=tesla&from=2022-02-05&sortBy=publishedAt&apiKey=2c890cef818a4c1fadf3114ff1de0c68&page=1&pageSize=${this.props.pageSize}`);
//     //     // let response = await data.json();
//     //     // this.setState({article:response.articles, page:this.state.page+1,loading:false});
//     //     // console.log(this.state.page);
//     //     // }catch(error){
//     //     //     console.log('ohh '+ error);
//     //     // }    
//     //     this.setState({page:this.state.page+1});
//     //     this.updateNews();

//     //     }
//     // }
 

    
//     // prevClicked=async () => {
//     //     if(this.state.page>0){
//     //         // try{
//     //         // this.setState({loading:true});
//     //         // let data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=2c890cef818a4c1fadf3114ff1de0c68&page=${this.state.page-1}&pageSize=${this.props.pageSize}`);
//     //         // this.setState({loading:true});
//     //         // // let data = await fetch(`https://newsapi.org/v2/everything?q=tesla&from=2022-02-05&sortBy=publishedAt&apiKey=2c890cef818a4c1fadf3114ff1de0c68&page=1&pageSize=${this.props.pageSize}`);
//     //         // let response = await data.json();
//     //         // this.setState({article:response.articles, page:this.state.page-1,loading:false});
//     //         // console.log(this.state.page);
//     //         // }catch(error){
//     //         //     console.log('ohh '+ error);
//     //         // }    
//     //         this.setState({page:this.state.page-1});
//     //         this.updateNews();

//     //     }else{

//     //     }
//     // }

//     fetchMoreData = async ()=> {
//         this.setState({page:this.state.page+1});
//         let data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=2c890cef818a4c1fadf3114ff1de0c68&page=${this.state.page}&pageSize=${this.props.pageSize}`);
//         // let data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&category=${this.props.category}&apiKey=2c890cef818a4c1fadf3114ff1de0c68`);
//         let response = await data.json();
//         console.log(response);
//         this.setState({article:this.state.article.concat(response.articles) , totalResults:response.totalResults});
//         console.log(this.state.page);
//     }

//   render() {
 
//     return (
//             <>
//             <h1 className="text-center">News Monkey- Top Headlines</h1>
//              {this.state.loading && <Spinner/>}
//              <InfiniteScroll
//                 dataLength={this.state.article.length}
//                 next={this.fetchMoreData}
//                 hasMore={this.state.article.length!=this.state.totalResults}
//                 loader={<Spinner/>}
//             >
//         <div className='container my-3' >      
//          <div className='row' >
         
//             {this.state.article.map((element)=>{
//                 return <div className="col-md-4" key={element.url}  style={{height:"600px",overflow:"auto"}}>
//                         <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
//                         </div>
                        
//             })}
//             </div>
//          </div>      
//            </InfiniteScroll> 
//             {/* <div className="d-flex justify-content-between">
//             <button disabled={this.state.page<=1} type="button" onClick={this.prevClicked} className="btn btn-dark">&larr; Previous</button>
//             <button disabled={this.state.page===Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" onClick={this.nextClicked} className="btn btn-dark">Next &rarr;</button>
//             </div> */}
         
//         </>
//     ) 
//   }
// }


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

