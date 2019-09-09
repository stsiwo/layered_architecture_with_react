import * as React from "react";
import { useCss } from "react-use";
import { useCssGlobalContext } from "../../../Base/Context/CssGlobalContext/CssGlobalContext";
import { useMenuRightSidebarState } from "../../../Base/Hooks/MenuRightSidebarState";
import { useResponsiveComponent } from "../../../Base/Hooks/ResponsiveComponentHook";
import { useMenuListCss } from "./MenuListCss";
import { useMenuCss } from "./MenuCss";

const Menu: React.FunctionComponent<{}> = (props: {}) => {

    const cssGlobal = useCssGlobalContext();
    const currentSidebarStatus = useMenuRightSidebarState();
    const currentScreenWidth = useResponsiveComponent();

    const menuRightSidebarCss = useMenuCss({
        currentScreenWidth: currentScreenWidth,
        currentSidebarStatus: currentSidebarStatus,
        cssGlobal: cssGlobal,
    });

    const menuListItemCss = useMenuListCss({
        currentScreenWidth: currentScreenWidth,
        currentSidebarStatus: currentSidebarStatus,
        cssGlobal: cssGlobal,
    });

    // stop click event no more than <nav> itself.  esp for wrapper div
    // w/o this, clicking inside <nav> cause close <nav> itself
    const handleStopPropagation: React.MouseEventHandler<HTMLDivElement> = (e) => {
        e.stopPropagation();
    }

    return (
        <nav className={menuRightSidebarCss} onClick={handleStopPropagation}>
            <ul className={menuListItemCss}>
                <li><a href="./">Order</a></li>
                <li><a href="./">Cart</a></li>
                <li><a href="./">Account</a></li>
            </ul>
        </nav>
    );
} 

export default Menu;
