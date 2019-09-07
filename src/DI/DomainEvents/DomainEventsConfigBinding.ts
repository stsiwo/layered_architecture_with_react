import { Container, interfaces } from "inversify";
import { TYPES } from "../types";
import { DomainEventEmitter } from "../../Application/DomainEvents/DomainEventEmitter";
import { addedProductsToCartDomainEventHandlerBindingModule } from "./Handlers/AddedProductsToCartDomainEventHandlerBinding";
import { IDomainEventEmitter } from "../../Application/DomainEvents/IDomainEventEmitter";

export const domainEventsConfigBindingModule = (myContainer: Container): Container => {

    // singleton?
    // #DOUBT
    myContainer.bind<IDomainEventEmitter>(TYPES.IDomainEventEmitter).to(DomainEventEmitter).inSingletonScope();

    // each event handler binding
    addedProductsToCartDomainEventHandlerBindingModule(myContainer);

    return myContainer;

}