import { CssGlobalContextDataType } from "../../../Base/Context/CssGlobalContext/CssGlobalContextDataType";
import { ProductSearchResultListType, FilterListType } from "../../../../Application/ProductServices/GetProductSearchResultList/GetProductSearchResultListOutputType";
import { useToggleFilterType } from "./useToggleFilterType";
import { usePaginationType } from "./Hooks/Pagination/usePaginationType";

export declare type useProductSearchResultType = {
    currentScreenWidth: number;
    cssGlobal: CssGlobalContextDataType;
    toggleFilterHook: useToggleFilterType;
    paginationHook: usePaginationType;
}