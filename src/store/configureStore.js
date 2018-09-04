import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import authReducer from "../reducers/auth";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () =>{
    // store creation
    const store = createStore(
        combineReducers({
            auth: authReducer,
        }),
        composeEnhancers(applyMiddleware(thunk))
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
};
