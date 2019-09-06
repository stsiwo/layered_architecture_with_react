import { GetCartByIdVariablesType } from "./GetCartById/GetCartByIdVariablesType";
import { GetCartByIdDataType } from "./GetCartById/GetCartByIdDataType";
import { GetCartByUserIdVariablesType } from "./GetCartByUserId/GetCartByUserIdVariablesType";
import { GetCartByUserIdDataType } from "./GetCartByUserId/GetCartByUserIdDataType";

export interface ICartQuery {

    getCartById(input: GetCartByIdVariablesType): Promise<GetCartByIdDataType | undefined>; 

    getCartByUserId(input: GetCartByUserIdVariablesType): Promise<GetCartByUserIdDataType | undefined>; 

};
