import { IDomainEvent } from "./Events/IDomainEvent";

export interface IDomainEventEmitter {

    publish(event: IDomainEvent): void;
}