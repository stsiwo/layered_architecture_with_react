import { inject, injectable } from "inversify";
import { ICartQuery } from "../../Application/Queries/Cart/ICartQuery";
import { INetwork } from "../Networking/INetwork";
import { TYPES } from "../../DI/DepTypes";
import { GetCartByIdVariablesType } from "../../Application/Queries/Cart/GetCartById/GetCartByIdVariablesType";
import { GetCartByIdDataType } from "../../Application/Queries/Cart/GetCartById/GetCartByIdDataType";
import { GetCartByUserIdVariablesType } from "../../Application/Queries/Cart/GetCartByUserId/GetCartByUserIdVariablesType";
import { GetCartByUserIdDataType } from "../../Application/Queries/Cart/GetCartByUserId/GetCartByUserIdDataType";
import { QueryTypeConstants } from "../Base/QueryTypeConstants";

@injectable()
export class CartQuery implements ICartQuery {

    private _network: INetwork;

    public constructor(
        @inject(TYPES.INetwork) network: INetwork
    ) {
        this._network = network;
    }

    public async getCartById(input: GetCartByIdVariablesType): Promise<GetCartByIdDataType | undefined> {
        return await this._network.requestQuery<GetCartByIdDataType, GetCartByIdVariablesType>(input, QueryTypeConstants.GetCartById);
    }
    public async getCartByUserId(input: GetCartByUserIdVariablesType): Promise<GetCartByUserIdDataType | undefined> {
        return await this._network.requestQuery<GetCartByUserIdDataType, GetCartByUserIdVariablesType>(input, QueryTypeConstants.GetCartByUserId);
    }


}
