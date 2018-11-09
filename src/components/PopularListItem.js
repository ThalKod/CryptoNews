import React from "react";
import moment from "moment";


export default (props)=>{
    return (
        <div className="extra-post-box">
            <a href={props.article.url} className="extra-post-link">
                <div className="post-image">
                    <span><img src={props.article.urlToImage} width="80" height="80" /></span>
                </div>
                <div className="post-title">
                    {props.article.title}
                    <span className="post-date">{moment(props.article.publishedAt).format("LL")}</span>
                </div>
            </a>
        </div>
    )
}
