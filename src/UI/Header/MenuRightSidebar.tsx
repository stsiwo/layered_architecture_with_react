import * as React from "react";
import { useCss } from "react-use";
import { useCssGlobalContext } from "../Base/Context/CssGlobalContext/CssGlobalContext";

export const MenuRightSidebar: React.FunctionComponent<{}> = (props: {}) => {

    const cssGlobal = useCssGlobalContext();

    const className = useCss({

        backgroundColor: "#ffa6f0",
        height: "100%",
        width: "100px",

        position: "fixed",
        right: "0px",
        top: cssGlobal.headerHeight,
    });

    return (
        <nav className={className}>
            <div>menu sidebar</div>                
        </nav>
    );
} 
