import * as React from "react";
import { useCss } from "react-use";
import { useCssGlobalContext } from "../Base/Context/CssGlobalContext/CssGlobalContext";
import { SearchBox } from "./SearchBox";
import { LogoIcon } from "./LogoIcon";

export const Header: React.FunctionComponent<{}> = (props: {}) => {

    const cssGlobal = useCssGlobalContext();

    const className = useCss({

        backgroundColor: "pink",
        height: cssGlobal.headerHeight,
        position: "fixed",
        top: 0,
        width: "100%",

        paddingLeft: "10px",
        paddingRight: "10px",

        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

    });

    return (
        <header className={className}>
            <LogoIcon />
            <SearchBox />
        </header>
    );
} 