import { useCss } from "react-use";

export const useMenuWrapperCss = (currentSidebarStatus: boolean) => {
    return useCss({
        position: "fixed",
        top: "0px",
        left: "0px",
        ...(!currentSidebarStatus && { width: "0px" }),
        ...(currentSidebarStatus && { width: "100%" }),
        ...(!currentSidebarStatus && { height: "0px" }),
        ...(currentSidebarStatus && { height: "100%" }),
        height: "100%",
        backgroundColor: "rgba(219, 117, 117, 0.5)",
        zIndex: "8000",
    });
};

