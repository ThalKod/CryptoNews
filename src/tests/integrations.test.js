import React from "react";
import { mount } from "enzyme";
import HomePage from "../containers/HomePage";
import { StaticRouter } from "react-router-dom";
import LoadingPage from "../components/LoadingPage";
import Header from "../components/Header";
import PageContent from "../components/PageContent";
import ContentBody from "../containers/ContentBody";
import ArticleListItems from "../components/ArticleListItems";
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

        wrapped.unmount();
    })
});

it("should render the app correctly", (done) => {

    const wrapped = mount(
        <Root>
            <StaticRouter context={{}}>
                <HomePage />
            </StaticRouter>
        </Root>);

    moxios.stubRequest(`https://newsapi.org/v2/top-headlines?sources=crypto-coins-news&apiKey=${API_KEY}`, {
        status: 200,
        response: { 
            articles: [
                {
                "source": {
                "id": "crypto-coins-news",
                "name": "Crypto Coins News"
                },
                "author": null,
                "title": "Bitcoin Cash Community is Working to Kick CSW Out: Billionaire Jihan Wu",
                "description": "Jihan Wu, the billionaire co-founder of Bitmain, has said that the Bitcoin Cash community is working together to kick Craig Steven Wright out.",
                "url": "https://www.ccn.com/bitcoin-cash-community-is-working-to-kick-csw-out-billionaire-jihan-wu/",
                "urlToImage": "https://www.ccn.com/wp-content/uploads/2018/11/craig-wright-nchain-bch.jpg",
                "publishedAt": "2018-11-09T14:47:47Z",
                "content": "Jihan Wu, the billionaire co-founder of Bitmain, a cryptocurrency conglomerate valued at $15 billion, has said that the Bitcoin Cash community is working together to kick Craig Steven Wright out of the community. The whole BCH community are working together t… [+3177 chars]"
                }
            ]
        }
    });

    moxios.stubRequest(`https://newsapi.org/v2/everything?sources=crypto-coins-news&apiKey=${API_KEY}`, {
        status: 200,
        response: { 
            articles: [
                {
                "source": {
                "id": "crypto-coins-news",
                "name": "Crypto Coins News"
                },
                "author": null,
                "title": "Bitcoin Cash Community is Working to Kick CSW Out: Billionaire Jihan Wu",
                "description": "Jihan Wu, the billionaire co-founder of Bitmain, has said that the Bitcoin Cash community is working together to kick Craig Steven Wright out.",
                "url": "https://www.ccn.com/bitcoin-cash-community-is-working-to-kick-csw-out-billionaire-jihan-wu/",
                "urlToImage": "https://www.ccn.com/wp-content/uploads/2018/11/craig-wright-nchain-bch.jpg",
                "publishedAt": "2018-11-09T14:47:47Z",
                "content": "Jihan Wu, the billionaire co-founder of Bitmain, a cryptocurrency conglomerate valued at $15 billion, has said that the Bitcoin Cash community is working together to kick Craig Steven Wright out of the community. The whole BCH community are working together t… [+3177 chars]"
                }
            ]
        }
    });


    moxios.wait(() => {
        wrapped.update();
        expect(wrapped.find(Header).length).toEqual(1);
        expect(wrapped.find(PageContent).length).toEqual(1);

        const cBody =  wrapped.find(ContentBody);
        expect(cBody.find(ArticleListItems).length).toEqual(1);
        done();

        wrapped.unmount();
    })

});

