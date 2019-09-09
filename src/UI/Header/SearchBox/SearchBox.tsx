import * as React from "react";
import { useCss } from "react-use";
import { useCssGlobalContext } from "../../Base/Context/CssGlobalContext/CssGlobalContext";
import { useResponsiveComponent } from "../../Base/Hooks/ResponsiveComponentHook";
import { useSearchBoxCss } from "./SearchBoxCss";

const SearchBox: React.FunctionComponent<{}> = (props: {}) => {

    const cssGlobal = useCssGlobalContext();

    const currentScreenWidth = useResponsiveComponent();

    const className = useSearchBoxCss(); 

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

export default SearchBox;
