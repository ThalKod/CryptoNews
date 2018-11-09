import React from "react";
import { Link } from "react-router-dom";

export default class Header extends React.Component{
    render(){
        return(
            <header className="header">
                <div className="header-wrapper">

                    <div className="logo-box">
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