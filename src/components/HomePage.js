import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { startFetchHeadline } from "../actions/index";
import PageContent from "./PageContent";

class HomePage extends React.Component{

    componentDidMount = ()=>{
        this.props.fetchHeadline();
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
});

export default connect(null, mapDispatchToProps)(HomePage);