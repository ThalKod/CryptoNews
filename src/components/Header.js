import React from "react";
import { Link } from "react-router-dom";

export default class Header extends React.Component{
    render(){
        return(
            <header class="header">
                <div class="header-wrapper">

                    <div class="logo-box">
                        <h1>    
                            <Link to="/">
                                Crypto News
                            </Link>
                        </h1>
                    </div>

                </div>
	        </header>
        )
    }
}