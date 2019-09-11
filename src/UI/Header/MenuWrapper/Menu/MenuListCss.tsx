import { useCss } from "react-use";
import { CssGlobalContextDataType } from "../../../Base/Context/CssGlobalContext/CssGlobalContextDataType";

export const useMenuListCss = (args: { currentSidebarStatus: boolean, cssGlobal: CssGlobalContextDataType, currentScreenWidth: number }) => {

    var commonCssObject = {
        listStyleType: "none",
        paddingInlineStart: "0px",
        marginBlockStart: "0px",
        marginBlockEnd: "0px",
        fontSize: args.cssGlobal.titleFontSize,
        zIndex: "9000",
    }

    var cssObject = null;

    // menu right sidebar
    if (args.currentScreenWidth < args.cssGlobal.laptopSize) {
        cssObject = Object.assign(commonCssObject, {
            // order does matter?? 
            // if marginTop is applied after commonCssObject, marginTop does not work
            // it displayed at css in devtools but no effect.
            marginTop: "50px",

            "& > li": {
                height: "30px",
                boxSizing: "border-box",
                textAlign: "center",
            }
        });
    // horizontal menu inside header
    } else {
        cssObject = Object.assign(commonCssObject, {

            "& > li": {
                display: "inline",
                backgroundColor: "#adefff",
                padding: "5px 5px",
                height: "30px",
                boxSizing: "border-box",
            }
        });
    }

    console.log(cssObject);

    return useCss(cssObject);
};

