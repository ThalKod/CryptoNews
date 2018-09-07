import axios from "axios";

export const FETCH_HEADLINE = "FETCH_HEADLINE";

const API_KEY = "c8ef108467b646219b3b8c85488ab725";

const fetchHeadline = (articles)=>({
    type: FETCH_HEADLINE,
    articles
});


export const startFetchHeadline = ()=>{
    const HEADLINE_URL = `https://newsapi.org/v2/top-headlines?sources=crypto-coins-news&apiKey=${API_KEY}`;

    return (dispatch)=>{
        return axios.get(HEADLINE_URL).then((data)=>{
            dispatch(fetchHeadline(data.data.articles));
        });
    }
}
