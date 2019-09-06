import { injectable } from "inversify";
import { IFruit } from "./IFruit";

export interface IBasket<T extends IFruit> {

    test(): string; 
} 
