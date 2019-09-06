import { injectable, inject } from "inversify";
import { IBasket } from "./IBasket";
import { IFruit } from "./IFruit";
import "reflect-metadata";

@injectable()
export class Basket implements IBasket<IFruit> {

    private _fruit: IFruit;

    public constructor(
        @inject("IFruit") fruit:  IFruit
    ) {
        this._fruit = fruit; 
    }

    public test(): string {
        return this._fruit.getType(); 
    }
}
