import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import Root from "./Root";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import 'react-dates/initialize';
import "react-dates/lib/css/_datepicker.css";


const jsx = (
    <Root>
        <AppRouter />
    </Root>
);

ReactDOM.render( jsx, document.getElementById("app"));

