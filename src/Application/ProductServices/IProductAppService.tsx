import { GetFeaturedProductListInputType } from "./GetFeaturedProductList/GetFeaturedProductListInputType";
import { GetFeaturedProductListOutputType } from "./GetFeaturedProductList/GetFeaturedProductListOutputType";

export interface IProductAppService {

    getFeaturedProductList(input: GetFeaturedProductListInputType): GetFeaturedProductListOutputType[];
}