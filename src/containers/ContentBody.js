import React from "react";
import { connect } from "react-redux";

import ArticleListItems from "../components/ArticleListItems";
import LoadMore from "../components/LoadMore";
import { getArticle, nextArticles } from  "../actions";

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
                    <div className="timeline-items">
                        {this.props.articles.map((article, index)=>{
                            return <ArticleListItems key={index} article={article} />
                        })}
                    </div>
                    <LoadMore next={()=> this.props.getNext()} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state)=>({
    articles: state.articles.toShow,
});

const mapDispatchToProps = (dispatch)=>({
    getArticle: ()=> dispatch(getArticle()),
    getNext: ()=> dispatch(nextArticles()),

});

export default connect(mapStateToProps, mapDispatchToProps)(ContentBody);
