import { injectable } from "inversify";
import { IMapper } from "./IMapper";
import { Product } from "../../../Domain/ProductAgg";

@injectable()
export class ProductMapper implements IMapper<Product> {

    mapToAggregate<SrcType>(src: SrcType): Product {
        throw new Error("Method not implemented.");
    }    mapTo<DestType>(src: Product): DestType {
        throw new Error("Method not implemented.");
    }
}