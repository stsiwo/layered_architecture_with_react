import * as React from "react";
import { useCss } from "react-use";
import { useCssGlobalContext } from "../../Base/Context/CssGlobalContext/CssGlobalContext";
import { useMenuRightSidebarState } from "../../Base/Hooks/MenuRightSidebarState";
import { eventEmitter } from "../../Base/UIEvents/UIEventEmitter";
import { useResponsiveComponent } from "../../Base/Hooks/ResponsiveComponentHook";
import { useMenuWrapperCss } from "./MenuWrapperCss";
import Menu from "./Menu/Menu";

const MenuWrapper: React.FunctionComponent<{}> = (props: {}) => {

    const cssGlobal = useCssGlobalContext();
    const currentSidebarStatus = useMenuRightSidebarState();
    const currentScreenWidth = useResponsiveComponent();

    const wrapperClass = useMenuWrapperCss(currentSidebarStatus); 

    const handleWrapperClick = () => {
        eventEmitter.emit("MenuSidebar");
    }

    return (
        <div className={wrapperClass} onClick={handleWrapperClick}>
            <Menu />
        </div>
    );
} 

export default MenuWrapper;
