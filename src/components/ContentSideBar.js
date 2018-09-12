import React from "react";

export default class ContentSideBar extends React.Component{
    render(){
        return (
            <div className="content-sidebar">
                <div className="sidebar_inner">
                    <div className="widget-item">
                        <div class="w-header">
                            <div class="w-title">Popular News</div>
                            <div class="w-seperator"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}