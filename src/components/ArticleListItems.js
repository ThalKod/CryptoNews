import React from "react";
import moment from "moment";


export default (props)=>{
    return (
        <div className="timeline-item">
        <div className="timeline-left">
            <div className="timeline-left-wrapper">
                <a href={props.article.url} className="timeline-category" data-zebra-tooltip title="CryptoCurrency"><i className="material-icons">&#xE894;</i></a>
                <span className="timeline-date">{moment(props.article.publishedAt).startOf('hour').fromNow()}</span>
            </div>
        </div>
        <div className="timeline-right">
            <div className="timeline-post-image">
                <a href={props.article.url}>
                    <img src={props.article.urlToImage} width="260" />
                </a>
            </div>
            <div className="timeline-post-content">
                <a className="timeline-category-name">CryptoCurrency</a>
                <a href={props.article.url}>
                    <h3 className="timeline-post-title">{props.article.title}</h3>
                </a>
                <div className="timeline-post-info">
                    <a href="https://www.ccn.com/" className="author">{props.article.source.name}</a>
                </div>
            </div>
        </div>
    </div>
    )
}