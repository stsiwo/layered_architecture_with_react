import { GetFeaturedProductListInputType } from "./GetFeaturedProductList/GetFeaturedProductListInputType";
import { GetFeaturedProductListOutputType } from "./GetFeaturedProductList/GetFeaturedProductListOutputType";
import { GetCategoryListInputType } from "./GetCategoryList/GetCategoryListInputType";
import { GetCategoryListOutputType } from "./GetCategoryList/GetCategoryListOutputType";
import { GetProductSearchResultListInputType } from "./GetProductSearchResultList/GetProductSearchResultListInputType";
import { GetProductSearchResultListOutputType } from "./GetProductSearchResultList/GetProductSearchResultListOutputType";

export interface IProductAppService {

    getFeaturedProductList(input: GetFeaturedProductListInputType): GetFeaturedProductListOutputType[];

    getCategoryList(input: GetCategoryListInputType): GetCategoryListOutputType[];

    getProductSearchResultList(input: GetProductSearchResultListInputType): GetProductSearchResultListOutputType;
}