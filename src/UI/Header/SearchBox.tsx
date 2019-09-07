import * as React from "react";
import { useCss } from "react-use";
import { useCssGlobalContext } from "../Base/Context/CssGlobalContext/CssGlobalContext";

export const SearchBox: React.FunctionComponent<{}> = (props: {}) => {

    const cssGlobal = useCssGlobalContext();

    const className = useCss({

        backgroundColor: "#e3a6ff",
        height: "30px",
        width: "500px",

    });

    return (
        <div className={className}>
            <div>search box</div>                
        </div>
    );
} 
