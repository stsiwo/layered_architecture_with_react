import * as React from "react";
import { useCss } from "react-use";
import { useCssGlobalContext } from "../Base/Context/CssGlobalContext/CssGlobalContext";

export const Footer: React.FunctionComponent<{}> = (props: {}) => {

    const cssGlobal = useCssGlobalContext();

    const className = useCss({

        backgroundColor: "#a6ffb3",
        height: "100px",
    });

    return (
        <footer className={className}>
            <div>footer</div>    
        </footer>
    );
} 
