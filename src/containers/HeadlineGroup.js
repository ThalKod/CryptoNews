import React from "react";
import { connect } from "react-redux";
import ArticleSingle from "../components/ArticleSingle";

class HeadlineGroup extends React.Component{


    render(){
        return (
            <div className="main-highlight">
                <div className="highlight-carousel grid-posts">
                    <div className="owl-carousel">
                        <div className="grid-rows">
                            {
                                this.props.headline.slice(0,3).map((article, index)=>{
                                    if(index === 0){
                                        return (
                                            <div className="columns column-4">
                                                <ArticleSingle key={index}  {...article}  />
                                            </div>
                                        )
                                    }     
                                    return (
                                        <div className="columns column-2">
                                            <ArticleSingle key={index}  {...article}  />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>({
    headline:  state.articlesHeadline,
});

export default connect(mapStateToProps)(HeadlineGroup);