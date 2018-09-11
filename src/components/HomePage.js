import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { startFetchHeadline, startFetchArticle, getArticle, nextArticles } from "../actions/index";
import PageContent from "./PageContent";

class HomePage extends React.Component{

    componentDidMount = ()=>{
        this.props.fetchHeadline();
        this.props.fetchArticle();
    }

    render(){
        return (
            <div>
                <Header />
                <PageContent />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch)=>({
    fetchHeadline: ()=> dispatch(startFetchHeadline()),
    fetchArticle: ()=> dispatch(startFetchArticle())
});

export default connect(null, mapDispatchToProps)(HomePage);