import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { startFetchHeadline } from "../actions/index";

class HomePage extends React.Component{

    componentDidMount = ()=>{
        this.props.fetchHeadline();
    }

    render(){
        return (
            <div>
                <Header />
                <div className="main-container">
                    {this.props.headline.slice(0,3).map((article)=>{
                        return <p>{article.title}</p>
                    })}
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch)=>({
    fetchHeadline: ()=> dispatch(startFetchHeadline()),
});

const mapStateToProps = (state)=>({
    headline: state.articlesHeadline
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);