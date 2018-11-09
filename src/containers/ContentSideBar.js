import React from "react";
import { connect } from "react-redux";

import PopularListItem from "../components/PopularListItem";

class ContentSideBar extends React.Component{
    render(){
        return (
            <div className="content-sidebar">
                <div className="sidebar_inner">
                    <div className="widget-item">
                        <div className="w-header">
                            <div className="w-title">Popular News</div>
                            <div className="w-seperator"></div>
                        </div>
                        {this.props.randomArticles.map((article, index)=>{
                            return <PopularListItem key={index} article={article} />
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