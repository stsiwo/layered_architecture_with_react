import * as React from "react";
import { useCss } from "react-use";
import Banner from "./Banner/Banner";
import FeaturedProductList from "./FeaturedProductList/FeaturedProductList";
import CategoryList from "./CategoryList/CategoryList";

const Home: React.FunctionComponent<{}> = (props: {}) => {

    const className = useCss({
        width: "100%",
    });

    return (
        <section className={className}>
            <Banner />
            <FeaturedProductList />
            <CategoryList />
        </section>
    );
} 

export default Home;
