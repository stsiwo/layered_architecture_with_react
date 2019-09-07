import { injectable, inject } from "inversify";
import { DomainEventEmitter } from "./DomainEventEmitter";
import { IDomainEvent } from "./IDomainEvent";
import "reflect-metadata"; // only include once, so put entry class in src directory

@injectable()
export class DomainEventEmitterTestClass {

    private _domainEventEmmitter: DomainEventEmitter;

    public constructor(
        @inject("DomainEventEmitter") domainEventEmitter: DomainEventEmitter
    ) {
        this._domainEventEmmitter = domainEventEmitter;
    }

    public test(event: IDomainEvent): void {

        this._domainEventEmmitter.publish(event);
    }
}