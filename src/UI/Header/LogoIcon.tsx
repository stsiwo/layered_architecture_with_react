import * as React from "react";
import { useCss } from "react-use";
import { useCssGlobalContext } from "../Base/Context/CssGlobalContext/CssGlobalContext";

export const LogoIcon: React.FunctionComponent<{}> = (props: {}) => {

    const cssGlobal = useCssGlobalContext();

    const className = useCss({

        backgroundColor: "#a6ffec",
        height: "30px",
        width: "30px",

    });

    return (
        <i className={className}>
            <div>logo</div>                
        </i>
    );
} 
