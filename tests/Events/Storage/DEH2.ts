import { IDomainEventHandler } from "./IDomainEventHandler";
import { DE2 } from "./DE2";
import { injectable, inject } from "inversify";
import "reflect-metadata"; // only include once, so put entry class in src directory

@injectable()
export class DEH2 implements IDomainEventHandler<DE2> {

    public event: string = "DE2";

    handle(args: DE2): void {

        console.log(args);
    }
}