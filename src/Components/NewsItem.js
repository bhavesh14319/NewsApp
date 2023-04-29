import React from "react";
import download from "./download.png";




function NewsItem(props) {
  let { title, description, imageUrl, url, author, date ,source} = props;
     return (
       <div className="my-3">
        
         <div
           className="card"
         >
           <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>  
             <span className="badge rounded-pill bg-danger" >
           {source}
         </span>
         </div>
          <img
            src={imageUrl ? imageUrl : download}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {author === null ? "unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-primary btn-dark"
            >
              Read More..
            </a>       
          </div>
        </div>
      </div>
  )
}

export default NewsItem

