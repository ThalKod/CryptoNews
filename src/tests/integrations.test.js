import React from "react";
import { mount } from "enzyme";
import HomePage from "../containers/HomePage";
import { StaticRouter } from "react-router-dom";
import LoadingPage from "../components/LoadingPage";
import Header from "../components/Header";
import ContentBody from "../containers/ContentBody";
import Root from "../Root";
import moxios from "moxios"
import API_KEY from "../../api_key";



beforeEach(() => {
    moxios.install();
});

afterEach(() => {
    moxios.uninstall();
});

it("should render Loading icon while fetching news data", (done) => {
    const wrapped = mount(
        <Root>
            <StaticRouter context={{}}>
                <HomePage />
            </StaticRouter>
        </Root>);

    moxios.wait(() => {
        wrapped.update();
        expect(wrapped.find(LoadingPage).length).toEqual(1);
        done();
    })
});