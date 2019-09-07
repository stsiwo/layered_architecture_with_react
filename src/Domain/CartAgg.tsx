import { IAggregate } from "./Base/IAggregate";

export class Cart implements IAggregate {

    readonly id: string;

    readonly products: string[];
    

    // behaviors
    public AddProducts(productIds: string[]) {
        this.products.push.apply(this.products, this.AddProducts);
    }
}