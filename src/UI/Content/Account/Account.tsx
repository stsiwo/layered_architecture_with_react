import * as React from "react";
import { useCss } from "react-use";

const Account: React.FunctionComponent<{}> = (props: {}) => {

    const className = useCss({
    });

    return (
        <section className={className}>
            <p>account</p>    
        </section>
    );
} 

export default Account;
