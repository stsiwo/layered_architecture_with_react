import { useState, MouseEventHandler } from "react";
import { useToggleFilterType } from "./useToggleFilterType";

export const useToggleFilter: () => useToggleFilterType = () => {

    // toggle status store
    const [currentToggleStatus, setToggleStatus] = useState(false);

    const currentToggleFilterCss = (currentToggleStatus) ? "product-search-result-filter-list-wapper-toggle-open" : "product-search-result-filter-list-wapper-toggle-close";

    const toggleFilterComponentEventHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
        setToggleStatus(!currentToggleStatus);
    };

    return {
        currentToggleFilterCss: currentToggleFilterCss,
        toggleFilterComponentEventHandler: toggleFilterComponentEventHandler,
    } 
}