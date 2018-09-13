import React from "react";
import { Link } from "react-router-dom";

export default class NotFoundPage extends React.Component{
    render(){
        return (
            <div class="main-container">
                <div class="error-container">
                    <div class="error-code">
                        404
                    </div>
                    <h1>Sorry, but nothing exists here.</h1>
                    <Link to="/">
                        <a class="go-home-link">Go back</a>
                    </Link>
                </div>
            </div>
        )
    }
}