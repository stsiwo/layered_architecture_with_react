import { inject, injectable } from "inversify";
import { IFruit } from "./Storage/IFruit";
import { IBasket } from "./Storage/IBasket";

@injectable()
export class VarianceTestClass {

    private _basket: IBasket<IFruit>;

    public constructor(
        @inject("BasketWithIFruit") basket: IBasket<IFruit>
    ) {
        this._basket = basket;
    }

    public test(): string {
        return this._basket.test();
    } 
}