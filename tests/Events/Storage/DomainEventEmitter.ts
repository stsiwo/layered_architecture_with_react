import { EventEmitter } from "events";
import { IDomainEventHandler } from "./IDomainEventHandler";
import { IDomainEvent } from "./IDomainEvent";
import { injectable, inject, multiInject } from "inversify";
import "reflect-metadata"; // only include once, so put entry class in src directory

@injectable()
export class DomainEventEmitter {

    private _eventHandlers: IDomainEventHandler<IDomainEvent>[];

    private _eventEmitter: EventEmitter;

    public constructor(
        @multiInject("EventHandlers") eventHandlers: IDomainEventHandler<IDomainEvent>[]
    ) {
        this._eventEmitter = new EventEmitter();
        
        this._eventHandlers = eventHandlers;

        this._eventHandlers.forEach((eh) => {
            this._eventEmitter.on(eh.event, eh.handle);
        });
    }

    public publish(event: IDomainEvent): void {
        this._eventEmitter.emit(event.constructor.name, event);
    }

}