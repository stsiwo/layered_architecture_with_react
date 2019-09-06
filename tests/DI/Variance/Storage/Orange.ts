import { IFruit } from "./IFruit";
import { injectable } from "inversify";
import "reflect-metadata";

@injectable()
export class Orange implements IFruit {

    getType(): string {
        return "orange";
    } 
    
} 
