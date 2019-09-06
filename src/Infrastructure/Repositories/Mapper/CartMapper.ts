import { injectable } from "inversify";
import { IMapper } from "./IMapper";
import { Cart } from "../../../Domain/CartAgg";

@injectable()
export class CartMapper implements IMapper<Cart> {

    mapToAggregate<SrcType>(src: SrcType): Cart {
        throw new Error("Method not implemented.");
    }    mapTo<DestType>(src: Cart): DestType {
        throw new Error("Method not implemented.");
    }
}