import { Container } from "inversify";
import { domainEventsConfigBindingModule } from "../../../src/DI/DomainEvents/DomainEventsConfigBinding";
import { IDomainEventEmitter } from "../../../src/Application/DomainEvents/IDomainEventEmitter";
import { TYPES } from "../../../src/DI/DepTypes";
import { AddedProductsToCartDomainEvent } from "../../../src/Application/DomainEvents/Events/AddedProductsToCartDomainEvent";

test("dee1.1: ShowProductsAddedNotification event handler should be called", () => {

    // arrage 
    var myContainer = new Container();

    domainEventsConfigBindingModule(myContainer);

    const emitter: IDomainEventEmitter = myContainer.get<IDomainEventEmitter>(TYPES.IDomainEventEmitter);

    // act
    emitter.publish(new AddedProductsToCartDomainEvent("test-cartId", "test-userId", ["1", "2", "3"]));

    // don't know to how to assert
    expect(0).toBe(1);

    // check log message, passed!!
});