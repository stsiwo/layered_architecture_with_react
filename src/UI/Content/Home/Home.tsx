import * as React from "react";
import { useCss } from "react-use";
import Banner from "./Banner/Banner";

const Home: React.FunctionComponent<{}> = (props: {}) => {

    const className = useCss({
        width: "100%",
    });

    return (
        <section className={className}>
            <Banner />
        </section>
    );
} 

export default Home;
