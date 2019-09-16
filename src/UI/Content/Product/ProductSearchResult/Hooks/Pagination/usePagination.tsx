import { useState, MouseEventHandler } from "react";
import { usePaginationType, PaginationStateType } from "./usePaginationType";
import { GetProductSearchResultListOutputType } from "../../../../../../Application/ProductServices/GetProductSearchResultList/GetProductSearchResultListOutputType";
import { useProductSearchResultApiFetch } from "../ApiFetch/useProductSearchResultApiFetch";
import range = require('lodash/range');
import { getProductSearchResultListTestData } from "../../../../../../../tests/UI/Content/Product/ProductSearchResult/ProductSearchResultListTestData";
import { toASCII } from "punycode";

export const usePagination: () => usePaginationType = () => {

    // toggle status store
    const [currentPagination, setPagination] = useState({
        offset: 0,
        limit: 20,
    } as PaginationStateType);

    // api fetch
    //const currentProductSearchResult: GetProductSearchResultListOutputType = useProductSearchResultApiFetch(currentPagination);
    const sampleData: GetProductSearchResultListOutputType = getProductSearchResultListTestData();

    const toggleFilterComponentEventHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
        setPagination({
            offset: calculateNextOffset(Number(e.currentTarget.value), currentPagination.limit),
            limit: currentPagination.limit,
        });
    };

    //const pageNum: number[] = generatePageNumList(currentProductSearchResult.totalCount, currentPagination.limit);
    const pageNum: number[] = generatePageNumList(sampleData.totalCount, currentPagination.limit, currentPagination.offset);
    const pageList: PageType[] = pageNum.map((page) => {
        const currentPageNum = calculateCurrentPageNum(currentPagination.offset, currentPagination.limit);
        return {
            page: page,
            ...(currentPageNum === page && { css: "product-search-result-list-pagination-btn product-search-result-list-pagination-btn-selected"}),
            ...(currentPageNum !== page && { css: "product-search-result-list-pagination-btn"}),
        } as PageType;
    })
    const maxPageNum: number = calculateMaxPageNum(sampleData.totalCount, currentPagination.limit);

    return {
        currentProductSearchResult: sampleData,
        toggleFilterComponentEventHandler: toggleFilterComponentEventHandler,
        pageList: pageList, 
        maxPageNum: maxPageNum,
    } 
}

export declare type PageType = {
    page: number,
    css: string,
}

const calculateNextOffset: (nextPageNum: number, limit: number) => number = (nextPageNum, limit) => {
    return nextPageNum * limit;
}

export const generatePageNumList: (totalCount: number, limit: number, offset: number) => number[] = (totalCount, limit, offset) => {

    const btnNum = 5;
    const leftBtnNum = 2;
    const rightBtnNum = 2;
    const currentPageNum = (offset !== 0) ? offset / limit : 1;
    const maxPageNum = calculateMaxPageNum(totalCount, limit); 

    if (totalCount <= limit) return []; 

    if (currentPageNum <= leftBtnNum + 1) {
        const upperPageNum = (maxPageNum - btnNum > 0) ? btnNum : maxPageNum; 
        return range(1, upperPageNum + 1);
    }
    else if (maxPageNum - currentPageNum < rightBtnNum + 1) {
        return range(maxPageNum - (btnNum - 1), maxPageNum + 1);
    }
    else {
        const lowerPageNum = (currentPageNum - 2 < 0) ? 1 : currentPageNum - 2;
        const upperPageNum = (currentPageNum + 2 > maxPageNum) ? maxPageNum : (currentPageNum + 2);

        return range(lowerPageNum, upperPageNum + 1);
    }
}

const calculateMaxPageNum: (totalCount: number, limit: number) => number = (totalCount, limit) => {
    return Math.ceil(totalCount / limit);
}

const calculateCurrentPageNum: (offset: number, limit: number) => number = (offset, limit) => {
    return (offset !== 0) ? offset / limit : 1;
}
