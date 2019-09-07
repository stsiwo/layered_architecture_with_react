import { IDomainEvent } from "./IDomainEvent";

export class AddedProductsToCartDomainEvent implements IDomainEvent {

    public cartId: string;

    public userId?: string;

    public productIds: string[];

    public constructor(
        cartId: string,
        userId: string,
        productIds: string[]
    ) {
        this.cartId = cartId;
        this.userId = userId;
        this.productIds = productIds;
    }
}