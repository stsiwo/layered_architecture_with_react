import * as React from "react";
import { useCss } from "react-use";

const Order: React.FunctionComponent<{}> = (props: {}) => {

    const className = useCss({
    });

    return (
        <section className={className}>
            <p>order</p>    
        </section>
    );
} 

export default Order;
