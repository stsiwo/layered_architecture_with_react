import { GetFeaturedProductListOutputType } from "../../../../Application/ProductServices/GetFeaturedProductList/GetFeaturedProductListOutputType";
import { useState, useEffect } from "react";
import { IProductAppService } from "../../../../Application/ProductServices/IProductAppService";
import { useResolvedService } from "../../../Base/Hooks/ResolvedServicve";
import { TYPES } from "../../../../DI/DepTypes";

export const useFeaturedProductListApiFetch: () => GetFeaturedProductListOutputType[] = () => {

    const [currentFeaturedProductList, setFeaturedProductList] = useState<GetFeaturedProductListOutputType[]>(); 

    useEffect(() => {

        const productAppService: IProductAppService = useResolvedService(TYPES.IProductAppService);
        const featuredProductList: GetFeaturedProductListOutputType[] = productAppService.getFeaturedProductList({}); 

        setFeaturedProductList(featuredProductList);

        return () => {
        };

    }, []); // only use this effect when did mount

    return currentFeaturedProductList;
}