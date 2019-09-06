import { injectable } from "inversify";
import { IMapper } from "./IMapper";
import { Order } from "../../../Domain/OrderAgg";

@injectable()
export class OrderMapper implements IMapper<Order> {

    mapToAggregate<SrcType>(src: SrcType): Order {
        throw new Error("Method not implemented.");
    }    mapTo<DestType>(src: Order): DestType {
        throw new Error("Method not implemented.");
    }
}