import { FETCH_HEADLINE } from "../actions/index";

export default (state = [], action)=>{
    switch(action.type){
        case FETCH_HEADLINE:
            return [...action.articles];

        default: 
            return state;
    }
};