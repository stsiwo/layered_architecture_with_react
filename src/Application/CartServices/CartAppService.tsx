import { AddProductsToCartInputType } from "./AddProductsToCart/AddProductsToCartInputType";
import { ICartAppService } from "./ICartAppService";
import { Cart } from "../../Domain/CartAgg";
import { IRepository } from "../Repositories/IRepository";
import { Product } from "../../Domain/ProductsAgg";
import { injectable, inject } from "inversify";
import { TYPES } from "../../DI/types";
import { GetCartByIdVariablesType } from "../Queries/Cart/GetCartById/GetCartByIdVariablesType";
import { AddProductsToCartOutputType } from "./AddProductsToCart/AddProductsToCartOutputType";

@injectable()
export class CartAppService implements ICartAppService {

    private _cartRepository: IRepository<Cart>;

    private _productRepository: IRepository<Product>;

    public constructor(
        @inject(TYPES.ICartRepository) cartRepository: IRepository<Cart>
        , @inject(TYPES.IProductRepository) productRepository: IRepository<Product> 
    ) {
        this._cartRepository = cartRepository;
        this._productRepository = productRepository;
    }

    public async addProductsToCart(input: AddProductsToCartInputType): Promise<object> {

        // get from Repository
        const findInput: GetCartByIdVariablesType = { cartId: input.cartId };

        const cart: Cart = await this._cartRepository.find(findInput);

        // add Products to cart 
        cart.AddProducts(input.productIds);

        // validate of Cart business logic
        // need to implement this 
        // should be return a collection of error object and boolean
        // like 
        // { errors?: Error[] }
        const isValid: boolean = true;

        var result: AddProductsToCartOutputType;

        if (isValid) {

            const updatedCart: Cart = await this._cartRepository.update(cart);

            // any application/ui state change here ...

            result = { cartId: updatedCart.id };

        } else {
            // need to fix later based on validation errors
            result = undefined; 
        }
        return result;
    }

    public async removeProductFromCart(input: AddProductsToCartInputType): Promise<object> {
        return null;
    }


}