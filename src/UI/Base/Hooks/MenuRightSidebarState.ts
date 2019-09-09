import { useState, useEffect } from "react";
import { eventEmitter } from "../UIEvents/UIEventEmitter";


export const useMenuRightSidebarState = () => {

    const [currentSidebarStatus, setSidebarStatus] = useState(false);

    useEffect(() => {
        function handleSidebarStatus() {
            setSidebarStatus(!currentSidebarStatus);
        }

        eventEmitter.on("MenuSidebar", handleSidebarStatus);

        return () => {
            eventEmitter.off("MenuSidebar", handleSidebarStatus);
        };
    }, [currentSidebarStatus]);

    return currentSidebarStatus;
}