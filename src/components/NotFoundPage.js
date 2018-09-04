import React from "react";
import { Link } from "react-router-dom";

export default class NotFoundPage extends React.Component{
    render(){
        return (
            <div>
                <p>404 - No Found Page</p>
                <Link to="/">
                    <a>Homepage</a>
                </Link>
            </div>
            
        )
    }
}