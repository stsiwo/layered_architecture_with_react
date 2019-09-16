import { Dispatch, SetStateAction, MouseEventHandler } from "react";
import { GetProductSearchResultListOutputType } from "../../../../../../Application/ProductServices/GetProductSearchResultList/GetProductSearchResultListOutputType";
import { PageType } from "./usePagination";

export declare type usePaginationType = {
    currentProductSearchResult: GetProductSearchResultListOutputType;
    toggleFilterComponentEventHandler: MouseEventHandler<HTMLButtonElement>;
    pageList: PageType[];
    maxPageNum: number;
}

export declare type PaginationStateType = {
    offset: number;
    limit: number;
}
