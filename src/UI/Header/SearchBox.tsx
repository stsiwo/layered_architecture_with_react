import * as React from "react";
import { useCss } from "react-use";
import { useCssGlobalContext } from "../Base/Context/CssGlobalContext/CssGlobalContext";
import { useResponsiveComponent } from "../Base/Hooks/ResponsiveComponentHook";

export const SearchBox: React.FunctionComponent<{}> = (props: {}) => {

    const cssGlobal = useCssGlobalContext();

    const currentScreenWidth = useResponsiveComponent();

    const className = useCss({

        backgroundColor: "#e3a6ff",
        height: "30px",
        width: "500px",

    });

    if (currentScreenWidth >= cssGlobal.mobileLSize) {
        return (
            <div className={className}>
                <div>search box</div>
            </div>
        );
    } else {
        return null;
    }
} 
