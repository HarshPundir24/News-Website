import React from 'react'

const NewsItem= (props)=>{
        return (
            <div>
                <div className="card">
                    <img src={props.imageUrl} className="card-img-top" alt="..." />
                    <div style={{display:'flex', justifyContent:'flex-end', position:'absolute', right:'0'}}>
                    <span className="badge rounded-pill bg-danger">
                        {props.source}
                       </span>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.description}</p>
                        <p className="card-text"><small className="text-success">By {props.author ? props.author : 'Unknown'} on {new Date(props.date).toGMTString()}</small></p>
                        <a href={props.newsurl} className="btn btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        )
}

export default NewsItem;