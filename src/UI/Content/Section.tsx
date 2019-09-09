import * as React from "react";
import { useCss } from "react-use";
import { useCssGlobalContext } from "../Base/Context/CssGlobalContext/CssGlobalContext";

const Section: React.FunctionComponent<{}> = (props: {}) => {

    const cssGlobal = useCssGlobalContext();

    const className = useCss({
        // using below, change stacking order, so Header need to use z-index
        //position: "relative",
        //top: cssGlobal.headerHeight, 

        backgroundColor: "#fff878",
        
    });

    return (
        <section className={className}>
            <div>section</div>    
        </section>
    );
} 

export default Section;
