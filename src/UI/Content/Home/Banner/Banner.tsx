import * as React from "react";
import { useCss } from "react-use";

const Banner: React.FunctionComponent<{}> = (props: {}) => {

    const className = useCss({
    });

    return (
        <div className={className}>
            <p>banner</p>    
        </div>
    );
} 

export default Banner;
