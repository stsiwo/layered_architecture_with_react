import { GetCategoryListOutputType } from "../../../../Application/ProductServices/GetCategoryList/GetCategoryListOutputType";
import { useState, useEffect } from "react";
import { IProductAppService } from "../../../../Application/ProductServices/IProductAppService";
import { useResolvedService } from "../../../Base/Hooks/ResolvedServicve";
import { TYPES } from "../../../../DI/DepTypes";

export const useCategoryListApiFetch: () => GetCategoryListOutputType[] = () => {

    const [currentCategoryList, setCategoryList] = useState<GetCategoryListOutputType[]>(); 

    useEffect(() => {

        const productAppService: IProductAppService = useResolvedService(TYPES.IProductAppService);
        const featuredProductList: GetCategoryListOutputType[] = productAppService.getCategoryList({}); 

        setCategoryList(featuredProductList);

        return () => {
        };

    }, []); // only use this effect when did mount

    return currentCategoryList;
}