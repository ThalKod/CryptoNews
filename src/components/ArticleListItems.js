import React from "react";

export default class ArticleListItems extends React.Component {
    render(){
        return(
            <div className="timeline-item">
                <div class="timeline-left">
                    <div class="timeline-left-wrapper">
                        <a href={this.props.article.url} class="timeline-category" data-zebra-tooltip title="CryptoCurrency"><i class="material-icons">&#xE894;</i></a>
                        <span class="timeline-date">3 min ago</span>
                    </div>
                </div>
                <div class="timeline-right">
                    <div class="timeline-post-image">
                        <a href={this.props.article.url}>
                            <img src={this.props.article.urlToImage} width="260" />
                        </a>
                    </div>
                    <div class="timeline-post-content">
                        <a class="timeline-category-name">CryptoCurrency</a>
                        <a href={this.props.article.url}>
                            <h3 class="timeline-post-title">{this.props.article.title}</h3>
                        </a>
                        <div class="timeline-post-info">
                            <a href="https://www.ccn.com/" class="author">{this.props.article.source.name}</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}