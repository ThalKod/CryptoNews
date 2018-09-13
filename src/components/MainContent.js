import React from "react";

import ContentBody from "../containers/ContentBody";
import ContentSideBar from "../containers/ContentSideBar";

export default class MainContent extends React.Component{
    render(){
        return (
            <div className="main-content">
                <div className="main-content-wrapper">
                    <ContentBody />
                    <ContentSideBar />
                </div>
            </div>
        )
    }
}