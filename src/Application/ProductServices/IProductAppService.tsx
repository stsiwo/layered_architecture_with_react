import { GetFeaturedProductListInputType } from "./GetFeaturedProductList/GetFeaturedProductListInputType";
import { GetFeaturedProductListOutputType } from "./GetFeaturedProductList/GetFeaturedProductListOutputType";
import { GetCategoryListInputType } from "./GetCategoryList/GetCategoryListInputType";
import { GetCategoryListOutputType } from "./GetCategoryList/GetCategoryListOutputType";

export interface IProductAppService {

    getFeaturedProductList(input: GetFeaturedProductListInputType): GetFeaturedProductListOutputType[];

    getCategoryList(input: GetCategoryListInputType): GetCategoryListOutputType[];
}