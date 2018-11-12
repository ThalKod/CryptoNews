import axios from "axios";

export const FETCH_HEADLINE = "FETCH_HEADLINE";
export const FECTH_ARTICLE = "FETCH_ARTICLE";
export const GET_ARTICLE = "GET_ARTICLE";
export const NEXT_ = "NEXT";


const fetchHeadline = (headlines)=>({
    type: FETCH_HEADLINE,
    headlines
});

const fetchArticle = (articles)=>({
    type: FECTH_ARTICLE,
    articles
}); 

export const getArticle = (articles)=>({
    type: GET_ARTICLE,
});

export const nextArticles = ()=>({
    type: NEXT_,
});

export const startFetchHeadline = ()=>{
    const HEADLINE_URL = `https://newsapi.org/v2/top-headlines?sources=crypto-coins-news&apiKey=${process.env.API_KEY || "c8ef108467b646219b3b8c85488ab725"}`;

    return (dispatch)=>{
        return axios.get(HEADLINE_URL).then((data)=>{
            dispatch(fetchHeadline(data.data.articles));
        });
    }
}

export const startFetchArticle = ()=>{

    const ARTICLE_URL = `https://newsapi.org/v2/everything?sources=crypto-coins-news&apiKey=${process.env.API_KEY || "c8ef108467b646219b3b8c85488ab725"}`;

    return (dispatch)=>{
        return axios.get(ARTICLE_URL).then((data)=>{
            dispatch(fetchArticle(data.data.articles))
        });
    }

}
