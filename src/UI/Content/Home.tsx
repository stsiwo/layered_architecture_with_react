import * as React from "react";
import { useCss } from "react-use";

const Home: React.FunctionComponent<{}> = (props: {}) => {

    const className = useCss({


    });

    return (
        <section className={className}>
            <p>section</p>    
        </section>
    );
} 

export default Home;
