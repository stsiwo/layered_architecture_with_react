import * as React from "react";
import { useCss } from "react-use";
import { useLogoIconCss } from "./LogoIconCss";
import { useCssGlobalContext } from "../../Base/Context/CssGlobalContext/CssGlobalContext";

const LogoIcon: React.FunctionComponent<{}> = (props: {}) => {

    const cssGlobal = useCssGlobalContext();

    const className = useLogoIconCss(); 

    return (
        <i className={className}>
            <div>logo</div>                
        </i>
    );
} 

export default LogoIcon;
