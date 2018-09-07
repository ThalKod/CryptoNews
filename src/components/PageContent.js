import React from "react";

import HeadlineGroup from "./HeadlineGroup";

export default class PageContent extends React.Component{
    
    render(){
        return (
            <div className="main-container">
                Page Content here
                <HeadlineGroup />
            </div>
        ) 
    }
}