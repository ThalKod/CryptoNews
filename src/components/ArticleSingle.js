import React from "react";
import moment from "moment";

export default class ArticleSingle extends React.Component{
    render(){
        return (
                <div className="post-box" style={{ backgroundImage: `url(${this.props.urlToImage})` }}>
                    <div className="post-overlay">
                        <p className="post-category" title="Title of blog post" rel="tag">Cryptocurrency</p>
                        <h3 className="post-title">{this.props.title}</h3>
                        <div className="post-meta">
                            <div className="post-meta-author-avatar">
                                <img alt="avatar" src="https://248qms3nhmvl15d4ne1i4pxl-wpengine.netdna-ssl.com/wp-content/themes/cryptocoinsnews/dist/images/logo.svg" className="avatar" height="24" width="24" />
                            </div>
                            <div className="post-meta-author-info">
                                <span className="post-meta-author-name">
                                    <a href="https://www.ccn.com" title="Posts by CCN" rel="author">{this.props.source.name}</a>
                                </span>
                                <span className="middot">·</span>
                                <span className="post-meta-date">
                                    <abbr className="published updated" title="Date">{moment(this.props.publishedAt).format(" D MMMM YYYY")}</abbr>
                                </span>
                            </div>
                        </div>
                    </div>
                    <a href={this.props.url} className="post-overlayLink"></a>
            </div>
        )
    }
}