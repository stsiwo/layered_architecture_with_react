import * as React from "react";
import { useCss } from "react-use";
import { useCssGlobalContext } from "../Base/Context/CssGlobalContext/CssGlobalContext";

export const Header: React.FunctionComponent<{}> = (props: {}) => {

    const cssGlobal = useCssGlobalContext();

    const className = useCss({

        backgroundColor: "pink",
        height: cssGlobal.headerHeight,
        position: "fixed",
        top: 0,
        width: "100%",

    });

    return (
        <header className={className}>
            <p>header</p>    
        </header>
    );
} 