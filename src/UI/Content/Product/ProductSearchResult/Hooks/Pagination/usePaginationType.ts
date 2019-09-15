import { Dispatch, SetStateAction, MouseEventHandler } from "react";
import { GetProductSearchResultListOutputType } from "../../../../../../Application/ProductServices/GetProductSearchResultList/GetProductSearchResultListOutputType";

export declare type usePaginationType = {
    currentProductSearchResult: GetProductSearchResultListOutputType;
    toggleFilterComponentEventHandler: MouseEventHandler<HTMLButtonElement>;
    pageNum: number[];
}

export declare type PaginationStateType = {
    offset: number;
    limit: number;
}
