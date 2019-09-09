import { injectable, inject } from "inversify";
import { IRepository } from "../../Application/Repositories/IRepository";
import { Cart } from "../../Domain/CartAgg";
import { INetwork } from "../Networking/INetwork";
import { TYPES } from "../../DI/DepTypes";
import { GetCartByIdDataType } from "../../Application/Queries/Cart/GetCartById/GetCartByIdDataType";
import { GetCartByIdVariablesType } from "../../Application/Queries/Cart/GetCartById/GetCartByIdVariablesType";
import { QueryTypeConstants } from "../Base/QueryTypeConstants";
import { IMapper } from "./Mapper/IMapper";
import { CreateCartVariablesType } from "../../Application/Repositories/Cart/CreateCart/CreateCartVariablesType";
import { CreateCartDataType } from "../../Application/Repositories/Cart/CreateCart/CreateCartDataType";
import { UpdateCartVariablesType } from "../../Application/Repositories/Cart/UpdateCart/UpdateCartVariablesType";
import { UpdateCartDataType } from "../../Application/Repositories/Cart/UpdateCart/UpdateCartDataType";

@injectable()
export class CartRepository implements IRepository<Cart> {

    private _network: INetwork;

    private _mapper: IMapper<Cart>; 

    public constructor(
        @inject(TYPES.INetwork) network: INetwork
        , @inject(TYPES.IMapper) mapper: IMapper<Cart>
    ) {
        this._network = network;
        this._mapper = mapper;
    }

    public async create(aggregate: Cart): Promise<Cart> {

        const input: CreateCartVariablesType = this._mapper.mapTo<CreateCartVariablesType>(aggregate);

        const cart: CreateCartDataType = await this._network.requestCreate<CreateCartDataType, CreateCartVariablesType>({
            input: input
            , queryType: QueryTypeConstants.CreateCart
        });

        return this._mapper.mapToAggregate(cart);
    }

    public async update(aggregate: Cart): Promise<Cart> {

        const input: UpdateCartVariablesType = this._mapper.mapTo<UpdateCartVariablesType>(aggregate);

        const cart: UpdateCartDataType = await this._network.requestUpdate<UpdateCartDataType, UpdateCartVariablesType>({
            input: input
            , queryType: QueryTypeConstants.UpdateCart
        });

        return this._mapper.mapToAggregate(cart);
    }

    public async find(input: GetCartByIdVariablesType): Promise<Cart> {

        const cart: GetCartByIdDataType = await this._network.requestQuery<GetCartByIdDataType, GetCartByIdVariablesType>({
            input: input
            , queryType: QueryTypeConstants.GetCartById
        });

        return this._mapper.mapToAggregate(cart);
        
    }
}