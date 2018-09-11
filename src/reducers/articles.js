import { FECTH_ARTICLE } from "../actions/index";

export default (state = {articles: [], lastIndex: 0, toShow:[] }, action)=>{
    switch(action.type){
        case FECTH_ARTICLE: 
            return {articles: action.articles, ...state };

        case GET_ARTICLE: 
            return {...state, toShow: action.articles.slice(0,10), lastIndex: 10}

        case NEXT_: 
            return { ...state, toShow: toShow.concat(action.articles.slice(lastIndex + 1, lastIndex + 10)) }

        default:
            return state;
    }
}
