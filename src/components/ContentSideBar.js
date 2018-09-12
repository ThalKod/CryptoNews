import React from "react";
import { connect } from "react-redux";

import PopularListItem from "./PopularListItem";

class ContentSideBar extends React.Component{
    render(){
        return (
            <div className="content-sidebar">
                <div className="sidebar_inner">
                    <div className="widget-item">
                        <div class="w-header">
                            <div class="w-title">Popular News</div>
                            <div class="w-seperator"></div>
                        </div>
                        {this.props.randomArticles.map((article)=>{
                            return <PopularListItem article={article} />
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    const articles = state.articles.articles;
    const randomArticles = [];

    for(let i = 0; i < 3; i++){
        const rn = Math.floor(Math.random()*articles.length);
        randomArticles.push(articles[rn]);
    }

    return { randomArticles };
};

export default connect(mapStateToProps)(ContentSideBar);