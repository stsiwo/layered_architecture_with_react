import { IDomainEvent } from "../Events/IDomainEvent";

export interface IDomainEventHandler<T extends IDomainEvent> {

    // set domain event class (IDomainEvent) name you want to subscribe
    event: string;

    handle(args: T): void;
}