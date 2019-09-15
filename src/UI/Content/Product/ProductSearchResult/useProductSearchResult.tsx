import { useProductSearchResultType } from "./useProductSearchResultType";
import { GetProductSearchResultListOutputType } from "../../../../Application/ProductServices/GetProductSearchResultList/GetProductSearchResultListOutputType";
import { getProductSearchResultListTestData } from "../../../../../tests/UI/Content/Product/ProductSearchResult/ProductSearchResultListTestData";
import { useResponsiveComponent } from "../../../Base/Hooks/ResponsiveComponentHook";
import { CssGlobalContextDataType } from "../../../Base/Context/CssGlobalContext/CssGlobalContextDataType";
import { useCssGlobalContext } from "../../../Base/Context/CssGlobalContext/CssGlobalContext";
import { MouseEventHandler, RefObject, createRef } from "react";
import { useToggleFilterType } from "./useToggleFilterType";
import { useToggleFilter } from "./useToggleFilter";
import { usePaginationType } from "./Hooks/Pagination/usePaginationType";
import { usePagination } from "./Hooks/Pagination/usePagination";

export const useProductSearchResult: () => useProductSearchResultType = () => {

    // remove when ready for graphql 
    const sampleData: GetProductSearchResultListOutputType = getProductSearchResultListTestData();


    const currentScreenWidth: number = useResponsiveComponent();
    const cssGlobal: CssGlobalContextDataType = useCssGlobalContext();
    const toggleFilterHook: useToggleFilterType = useToggleFilter();
    const paginationHook: usePaginationType = usePagination(); 


    return {
        currentScreenWidth: currentScreenWidth,
        cssGlobal: cssGlobal,
        toggleFilterHook: toggleFilterHook,
        paginationHook: paginationHook,
    }
}