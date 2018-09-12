import React from "react";
import { connect } from "react-redux";

import ArticleListItems from "./ArticleListItems";
import { getArticle } from  "../actions/index";

class ContentBody extends React.Component{


    componentDidMount = ()=>{
        this.props.getArticle();
    }


    render(){
        
        return (
            <div className="content-body">
                <div className="content-timeline">
                    <div class="post-list-header">
                        <span class="post-list-title">Latest News</span>
                    </div>
                </div>
                {this.props.articles.map((article, index)=>{
                    return <ArticleListItems key={index} article={article} />
                })}
            </div>
        );
    }
}

const mapStateToProps = (state)=>({
    articles: state.articles.toShow,
});

const mapDispatchToProps = (dispatch)=>({
    getArticle: ()=> dispatch(getArticle()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContentBody);
