import * as React from "react";
import { useCss } from "react-use";
import { useCssGlobalContext } from "../Base/Context/CssGlobalContext/CssGlobalContext";
import { Route } from 'react-router-dom';
import CartDetail from "./Cart/CartDetail";
import Account from "./Account/Account";
import Order from "./Order/Order";
import Home from "./Home/Home";
import ProductSearchResult from "./Product/ProductSearchResult/ProductSearchResult";

const Content: React.FunctionComponent<{}> = (props: {}) => {

    const cssGlobal = useCssGlobalContext();

    const className = useCss({
        // using below, change stacking order, so Header need to use z-index
        //position: "relative",
        //top: cssGlobal.headerHeight, 

        marginTop: cssGlobal.headerHeight,
        display: "flex",
        backgroundColor: "#fff878",
        width: "100%",
        
    });

    return (
        <div className={className}>
            <Route path="/" exact component={Home} />
            <Route path="/cart" exact component={CartDetail} />
            <Route path="/account" exact component={Account} />
            <Route path="/order" exact component={Order} />
            <Route path="/product-search-result" exact component={ProductSearchResult} />
        </div>
    );
} 

export default Content;
