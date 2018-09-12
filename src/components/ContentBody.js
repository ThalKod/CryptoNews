import React from "react";

import ArticleListItems from "./ArticleListItems";

export default class ContentBody extends React.Component{
    render(){
        return (
            <div className="content-body">
                <div className="content-timeline">
                    <div class="post-list-header">
                        <span class="post-list-title">Latest News</span>
                    </div>
                    <ArticleListItems />
                </div>
            </div>
        )
    }
}