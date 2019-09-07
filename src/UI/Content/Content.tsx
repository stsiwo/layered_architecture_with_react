import * as React from "react";
import { useCss } from "react-use";
import { useCssGlobalContext } from "../Base/Context/CssGlobalContext/CssGlobalContext";
import { LeftAside } from "./LeftAside";
import { Section } from "./Section";

export const Content: React.FunctionComponent<{}> = (props: {}) => {

    const cssGlobal = useCssGlobalContext();

    const className = useCss({
        // using below, change stacking order, so Header need to use z-index
        //position: "relative",
        //top: cssGlobal.headerHeight, 

        marginTop: cssGlobal.headerHeight,
        display: "flex",
        backgroundColor: "#fff878",
        //height: "100%", 
        height: "1000px",
        width: "100%",
        
    });

    return (
        <div className={className}>
            <LeftAside />
            <Section />
        </div>
    );
} 
