import { FECTH_ARTICLE, GET_ARTICLE, NEXT_ } from "../actions/index";

export default (state = {articles: [], lastIndex: 0, toShow:[] }, action)=>{
    switch(action.type){
        case FECTH_ARTICLE: 
            console.log("Fetch_article: ",{ ...state, articles: action.articles });
            return { ...state, articles: action.articles };

        case GET_ARTICLE: 
            console.log("GET_ARTICLE", { ...state, toShow: state.articles.slice(0,10), lastIndex: 10 });
            return { ...state, toShow: state.articles.slice(0,10), lastIndex: 10}

        case NEXT_: 
            // console.log("NEXT_", { ...state, toShow: state.toShow.concat(state.articles.slice(state.lastIndex + 1, state.lastIndex + 10)), lastIndex: state.lastIndex + 10 });
            return { ...state, toShow: state.toShow.concat(state.articles.slice(state.lastIndex + 1, state.lastIndex + 10)), lastIndex: state.lastIndex + 10 }

        default:
            return state;
    }
}
