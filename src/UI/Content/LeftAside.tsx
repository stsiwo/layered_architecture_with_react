import * as React from "react";
import { useCss } from "react-use";
import { useCssGlobalContext } from "../Base/Context/CssGlobalContext/CssGlobalContext";

export const LeftAside: React.FunctionComponent<{}> = (props: {}) => {

    const cssGlobal = useCssGlobalContext();

    const className = useCss({
        backgroundColor: "#c0ff8a",

        // need to find a way to switch html elements for mobile and laptop
        // ex) when laptop, can use sidebar but when mobile, need to create button and if user click display the sidebar as toggle way
        // for now, just hide for mobile screen
        // this is more than just switching css style using media, it involves react components. so need to get screen size at global state
        // and change the react component accordingly based on the screen size global state.
        // e.g., 
        // mobile) need btn component and toggle the component
        // laptop) just display component as sidebar
        '@media only screen and (min-width: 425px)': {
            width: "30%",
            maxWidth: "200px",
        },

        '@media only screen and (max-width: 424px)': {
            display: "none",
        },
    });

    return (
        <aside className={className}>
            <div>aside</div>    
        </aside>
    );
} 
