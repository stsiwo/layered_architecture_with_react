import { AddProductsToCartInputType } from "./AddProductsToCart/AddProductsToCartInputType";

export interface ICartAppService {

    addProductsToCart(input: AddProductsToCartInputType): Promise<object>;

    removeProductFromCart(input: AddProductsToCartInputType): Promise<object>;
}