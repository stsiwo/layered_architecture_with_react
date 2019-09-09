import { useCss } from "react-use";
import { CssGlobalContextDataType } from "../../Base/Context/CssGlobalContext/CssGlobalContextDataType";

export const useMenuToggleIconCss = (args: { currentSidebarStatus?: boolean, cssGlobal?: CssGlobalContextDataType, currentScreenWidth?: number }) => {

    var commonCssObject = {
        backgroundColor: "#60F0E4",
        height: "30px",
        width: "30px",
        margin: "10px",
        minWidth: "30px",

        ...(args.currentSidebarStatus && { zIndex: 4 }),
    }

    var cssObject = null;

    if (args.currentScreenWidth < args.cssGlobal.mobileLSize) {
        cssObject = Object.assign(commonCssObject, {
            position: "fixed",
            top: 0,
            right: 0,
        });
    } else {
        cssObject = Object.assign(commonCssObject, {
        });
    }

    return useCss(cssObject);
};
