import React from "react";

import HeadlineGroup from "../containers/HeadlineGroup";
import MainContent from "./MainContent";

export default class PageContent extends React.Component{
    
    render(){
        return (
            <div className="main-container">
                <HeadlineGroup />
                <MainContent />
            </div>
        ) 
    }
}