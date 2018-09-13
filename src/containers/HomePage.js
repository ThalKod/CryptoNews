import React from "react";
import Header from "../components/Header";
import { connect } from "react-redux";
import { startFetchHeadline, startFetchArticle} from "../actions";
import PageContent from "../components/PageContent";

class HomePage extends React.Component{

    componentDidMount = ()=>{
        this.props.fetchHeadline();
        this.props.fetchArticle();
    }


    render(){
        if(this.props.articles.length > 0 && this.props.headlines.length > 0){
            return (
                <div>
                    <Header />
                    <PageContent />
                </div>
            )
        }else{
            return <div>Loading...</div>
        }
    }
}

const mapDispatchToProps = (dispatch)=>({
    fetchHeadline: ()=> dispatch(startFetchHeadline()),
    fetchArticle: ()=> dispatch(startFetchArticle()),
});

const mapStateToProps = (state)=>({
    articles: state.articles.articles,
    headlines: state.articlesHeadline,
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);