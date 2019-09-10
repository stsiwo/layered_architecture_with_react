import * as React from "react";
import { useCss } from "react-use";
import { useLogoIconCss } from "./LogoIconCss";
import { useCssGlobalContext } from "../../Base/Context/CssGlobalContext/CssGlobalContext";
import { Link } from "react-router-dom";

const LogoIcon: React.FunctionComponent<{}> = (props: {}) => {

    const cssGlobal = useCssGlobalContext();

    const className = useLogoIconCss(); 

    return (
        <i className={className}>
            <Link to="/">Logo</Link>
        </i>
    );
} 

export default LogoIcon;
