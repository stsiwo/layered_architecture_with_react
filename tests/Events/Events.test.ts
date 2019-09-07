import { EventEmitter } from "events";
import { Container, interfaces } from "inversify";
import { IDomainEventHandler } from "./Storage/IDomainEventHandler";
import { IDomainEvent } from "./Storage/IDomainEvent";
import { DEH2 } from "./Storage/DEH2";
import { DEH1 } from "./Storage/DEH1";
import { DomainEventEmitter } from "./Storage/DomainEventEmitter";
import { DomainEventEmitterTestClass } from "./Storage/DomainEventEmitterTestClass";
import { DE1 } from "./Storage/DE1";
import { DE2 } from "./Storage/DE2";
import { DEH1a } from "./Storage/DEH1a";

test("event1.1: work?", () => {

    const emitter = new EventEmitter();
    // Listen: 
    emitter.on('foo', (foo) => console.log(foo));
    emitter.on('bar', (bar) => console.log(bar));
    // Emit: 
    emitter.emit('foo', { foo: 1 });
    emitter.emit('bar', { bar: 1 });

    console.log("working?");

    expect(1).toBe(0);
});

test("event1.2: prototype domain event", () => {

    var myContainer = new Container();
    
    myContainer.bind<IDomainEventHandler<IDomainEvent>>("EventHandlers").to(DEH2);
    myContainer.bind<IDomainEventHandler<IDomainEvent>>("EventHandlers").to(DEH1a);
    myContainer.bind<IDomainEventHandler<IDomainEvent>>("EventHandlers").to(DEH1);

    myContainer.bind<DomainEventEmitter>("DomainEventEmitter").to(DomainEventEmitter);

    myContainer.bind<DomainEventEmitterTestClass>("DomainEventEmitterTestClass").to(DomainEventEmitterTestClass);

    var test = myContainer.get<DomainEventEmitterTestClass>("DomainEventEmitterTestClass");

    test.test(new DE1("satoshi", 12121));
    //test.test(new DE2("address", "hey"));

    expect(1).toBe(0);
});

