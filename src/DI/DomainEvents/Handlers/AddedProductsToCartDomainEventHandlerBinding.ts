import { Container, interfaces } from "inversify";
import { IDomainEventHandler } from "../../../Application/DomainEvents/Handlers/IDomainEventHandler";
import { IDomainEvent } from "../../../Application/DomainEvents/Events/IDomainEvent";
import { TYPES } from "../../types";
import { ShowProductsAddedNotificationWhenAddedProductsToCartDomainEventHandler } from "../../../Application/DomainEvents/Handlers/AddedProductsToCart/ShowProductsAddedNotificationWhenAddedProductsToCartDomainEventHandler";

export const addedProductsToCartDomainEventHandlerBindingModule = (myContainer: Container): Container => {

    myContainer.bind<IDomainEventHandler<IDomainEvent>>(TYPES.DomainEventHandlers).to(ShowProductsAddedNotificationWhenAddedProductsToCartDomainEventHandler);


    return myContainer;

}