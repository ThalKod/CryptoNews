import React from "react";

export default ({next})=>{
    return (
        <div class="load-more">
            <button onClick={()=> next()} class="load-more-button material-button" type="button">
                <i class="material-icons">&#xE5D5;</i>
                <span>Load More</span>
            </button>
        </div>
    )
}