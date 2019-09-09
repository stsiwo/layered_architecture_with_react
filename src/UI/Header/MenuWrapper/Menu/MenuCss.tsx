import { useCss } from "react-use";
import { CssGlobalContextDataType } from "../../../Base/Context/CssGlobalContext/CssGlobalContextDataType";

export const useMenuCss = (args: { currentSidebarStatus: boolean, cssGlobal: CssGlobalContextDataType, currentScreenWidth: number }) => {

    var cssObject = null;

    // menu right sidebar
    if (args.currentScreenWidth < args.cssGlobal.laptopSize) {
        cssObject = {
            backgroundColor: "#ffa6f0",
            height: "100%",
            ...(args.currentSidebarStatus && { width: "100px" }),
            ...(!args.currentSidebarStatus && { width: "0px" }),
            position: "fixed",
            right: "0px",
            transition: "0.5s",
            // prevent text is wrapped during animaiton
            whiteSpace: "nowrap",
            // prevent wrapper div from closing <nav> when clicking inside <nav>
            // stacking context: root < descendents with non-position < descendents with position (relative, absolute) < descendents with position (fixed, sticky)
            zIndex: 3,
        }
    // horizontal menu inside header
    } else {
        cssObject = {
            marginRight: "10px",
        }
    }

    return useCss(cssObject);
};

