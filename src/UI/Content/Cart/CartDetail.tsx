import * as React from "react";
import { useCss } from "react-use";

const CartDetail: React.FunctionComponent<{}> = (props: {}) => {

    const className = useCss({
    });

    return (
        <section className={className}>
            <p>cart detail</p>    
        </section>
    );
} 

export default CartDetail;
