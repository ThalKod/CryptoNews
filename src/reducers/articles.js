import { FECTH_ARTICLE } from "../actions/index";

export default (state = [], action)=>{
    switch(action.type){
        case FECTH_ARTICLE: 
            return [...action.articles];

        default:
            return state;
    }
}
