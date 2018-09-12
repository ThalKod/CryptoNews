import React from "react";
import moment from "moment";


export default (props)=>{
    return (
        <div className="extra-post-box">
            <a href={props.article.url} class="extra-post-link">
                <div class="post-image">
                    <span><img src={props.article.urlToImage} width="80" height="80" /></span>
                </div>
                <div class="post-title">
                    {props.article.title}
                    <span class="post-date">{moment(props.article.publishedAt).format("LL")}</span>
                </div>
            </a>
        </div>
    )
}
