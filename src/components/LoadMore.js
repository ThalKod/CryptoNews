import React from "react";

export default ({next})=>{
    return (
        <div className="load-more">
            <button onClick={()=> next()} className="load-more-button material-button" type="button">
                <i className="material-icons">&#xE5D5;</i>
                <span>Load More</span>
            </button>
        </div>
    )
}