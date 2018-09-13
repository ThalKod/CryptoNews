import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import NotFoundPAge from "../components/NotFoundPage";
import HomePage from "../containers/HomePage";

export const history  = createHistory();

const AppRouter = () =>(
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" component={HomePage} exact={true}/>
                <Route component={NotFoundPAge}/>
            </Switch>
        </div>
    </Router>
)

export default AppRouter;