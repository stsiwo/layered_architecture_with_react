import { injectable, inject } from "inversify";
import "reflect-metadata"; // only include once, so put entry class in src directory
import { IDomainEventHandler } from "../IDomainEventHandler";
import { AddedProductsToCartDomainEvent } from "../../Events/AddedProductsToCartDomainEvent";

@injectable()
export class ShowProductsAddedNotificationWhenAddedProductsToCartDomainEventHandler implements IDomainEventHandler<AddedProductsToCartDomainEvent> { 

    public event: string = "AddedProductsToCartDomainEvent";

    handle(args: AddedProductsToCartDomainEvent): void {

        console.log(args);
    }
}
