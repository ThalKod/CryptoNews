import React from "react";

import ContentBody from "./ContentBody";
import ContentSideBar from "./ContentSideBar";

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