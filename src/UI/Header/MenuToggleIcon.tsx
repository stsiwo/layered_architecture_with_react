import * as React from "react";
import { useCss } from "react-use";
import { useCssGlobalContext } from "../Base/Context/CssGlobalContext/CssGlobalContext";

export const MenuToggleIcon: React.FunctionComponent<{}> = (props: {}) => {

    const cssGlobal = useCssGlobalContext();

    const className = useCss({

        backgroundColor: "#ffa6f0",
        height: "30px",
        width: "30px",

        margin: "10px",

    });

    return (
        <i className={className}>
            <div>menu icon</div>                
        </i>
    );
} 
