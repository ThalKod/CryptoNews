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
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch)=>({
    fetchHeadline: ()=> dispatch(startFetchHeadline())
});

export default connect(null, mapDispatchToProps)(HomePage);