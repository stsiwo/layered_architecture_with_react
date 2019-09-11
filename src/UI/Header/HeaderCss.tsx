import { useCss } from "react-use";
import { CssGlobalContextDataType } from "../Base/Context/CssGlobalContext/CssGlobalContextDataType";

export const useHeaderCss = (args: { currentSidebarStatus?: boolean, cssGlobal?: CssGlobalContextDataType, currentScreenWidth?: number }) => {

    var commonCssObject = {
        backgroundColor: "pink",
        height: args.cssGlobal.headerHeight,
        position: "fixed",
        top: 0,
        width: "100%",
        display: "flex",
        alignItems: "center",
        zIndex: "7000",
    }

    var cssObject = null;

    if (args.currentScreenWidth < args.cssGlobal.mobileLSize) {
        cssObject = Object.assign(commonCssObject, {
            justifyContent: "center",
        });
    } else {
        cssObject = Object.assign(commonCssObject, {
            justifyContent: "space-between",
        });
    }

    return useCss(cssObject);
};