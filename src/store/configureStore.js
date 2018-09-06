import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import articlesHeadlineReducer from "../reducers/articles_headline";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () =>{
    // store creation
    const store = createStore(
        combineReducers({
            articlesHeadline: articlesHeadlineReducer,
        }),
        composeEnhancers(applyMiddleware(thunk))
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
};
