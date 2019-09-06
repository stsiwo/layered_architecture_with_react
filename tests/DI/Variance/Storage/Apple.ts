import { IFruit } from "./IFruit";
import { injectable } from "inversify";
import "reflect-metadata";

@injectable()
export class Apple implements IFruit {

    getType(): string {
        return "Apple";
    } 
    
} 
