import * as React from "react";
import { useCss } from "react-use";
import { eventEmitter } from "../../Base/UIEvents/UIEventEmitter";
import { useMenuRightSidebarState } from "../../Base/Hooks/MenuRightSidebarState";
import { useCssGlobalContext } from "../../Base/Context/CssGlobalContext/CssGlobalContext";
import { useMenuToggleIconCss } from "./MenuToggleIconCss";
import { useResponsiveComponent } from "../../Base/Hooks/ResponsiveComponentHook";

const MenuToggleIcon: React.FunctionComponent<{}> = (props: {}) => {

    const cssGlobal = useCssGlobalContext();

    const currentSidebarStatus = useMenuRightSidebarState();

    const currentScreenWidth = useResponsiveComponent();

    const className = useMenuToggleIconCss({
        currentScreenWidth: currentScreenWidth,
        cssGlobal: cssGlobal,
        currentSidebarStatus: currentSidebarStatus,
    }); 

    const handleIconClick = () => {
        eventEmitter.emit("MenuSidebar");
    }

    return (
        <i className={className} onClick={ handleIconClick }>
            {(!currentSidebarStatus && <div>open</div>) }                
            {(currentSidebarStatus && <div>close</div>) }                
            <div>{ eventEmitter.listenerCount("MenuSidebar") }</div>
        </i>
    );
} 

export default MenuToggleIcon;
