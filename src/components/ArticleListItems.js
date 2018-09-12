import React from "react";
import moment from "moment";


export default (props)=>{
    return (
        <div className="timeline-item">
        <div class="timeline-left">
            <div class="timeline-left-wrapper">
                <a href={props.article.url} class="timeline-category" data-zebra-tooltip title="CryptoCurrency"><i class="material-icons">&#xE894;</i></a>
                <span class="timeline-date">{moment(props.article.publishedAt).startOf('hour').fromNow()}</span>
            </div>
        </div>
        <div class="timeline-right">
            <div class="timeline-post-image">
                <a href={props.article.url}>
                    <img src={props.article.urlToImage} width="260" />
                </a>
            </div>
            <div class="timeline-post-content">
                <a class="timeline-category-name">CryptoCurrency</a>
                <a href={props.article.url}>
                    <h3 class="timeline-post-title">{props.article.title}</h3>
                </a>
                <div class="timeline-post-info">
                    <a href="https://www.ccn.com/" class="author">{props.article.source.name}</a>
                </div>
            </div>
        </div>
    </div>
    )
}