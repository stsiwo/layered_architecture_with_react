import { useState, useEffect } from "react";
import { GetProductSearchResultListOutputType } from "../../../../../../Application/ProductServices/GetProductSearchResultList/GetProductSearchResultListOutputType";
import { IProductAppService } from "../../../../../../Application/ProductServices/IProductAppService";
import { useResolvedService } from "../../../../../Base/Hooks/ResolvedServicve";
import { TYPES } from "../../../../../../DI/DepTypes";
import { PaginationStateType } from "../Pagination/usePaginationType";

export const useProductSearchResultApiFetch: (currentPagination: PaginationStateType) => GetProductSearchResultListOutputType = (currentPagination) => {

    const [currentProductSearchResult, setProductSearchResult] = useState<GetProductSearchResultListOutputType>(); 

    // side effect (didmount/didupdate/didunmount)
    useEffect(() => {

        const productAppService: IProductAppService = useResolvedService(TYPES.IProductAppService);
        const productSearchResultList: GetProductSearchResultListOutputType = productAppService.getProductSearchResultList({
            offset: currentPagination.offset,
            limit: currentPagination.limit,
        }); 

        setProductSearchResult(productSearchResultList);

        return () => {
        };

        // #DOUBT   
    }, [currentPagination.offset]); // only use this effect when did mount

    return currentProductSearchResult;
}