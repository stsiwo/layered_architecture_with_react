import { IDomainEvent } from "./IDomainEvent";

export interface IDomainEventHandler<T extends IDomainEvent> {

    event: string;

    handle(args: T): void;
}