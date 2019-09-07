import { IDomainEventHandler } from "./IDomainEventHandler";
import { DE1 } from "./DE1";
import { injectable, inject } from "inversify";
import "reflect-metadata"; // only include once, so put entry class in src directory

@injectable()
export class DEH1a implements IDomainEventHandler<DE1> { 

    public event: string = "DE1";

    handle(args: DE1): void {

        console.log(args);
    }
}