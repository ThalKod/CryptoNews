import React from "react";

export default class ArticleSingle extends React.Component{
    render(){
        return (
            <div class="columns column-4">
                <div class="post-box" style={{ backgroundImage: this.props.urlToImage }}>
                    <div class="post-overlay">
                        <a href="#" class="post-category" title="Title of blog post" rel="tag">Technology</a>
                        <h3 class="post-title">{this.props.title}</h3>
                        <div class="post-meta">
                            <div class="post-meta-author-avatar">
                                <img alt="avatar" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" class="avatar" height="24" width="24" />
                            </div>
                            <div class="post-meta-author-info">
                                <span class="post-meta-author-name">
                                    <a href="#" title="Posts by John Doe" rel="author">{this.props.source.name}</a>
                                </span>
                                <span class="middot">·</span>
                                <span class="post-meta-date">
                                    <abbr class="published updated" title="December 4, 2017">12 November 2018</abbr>
                                </span>
                            </div>
                        </div>
                    </div>
                    <a href="#" class="post-overlayLink"></a>
                </div>
         </div>
        )
    }
}