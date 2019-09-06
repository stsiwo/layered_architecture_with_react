import { Container } from "inversify";
import { IFruit } from "./Storage/IFruit";
import { Apple } from "./Storage/Apple";
import { IBasket } from "./Storage/IBasket";
import { Basket } from "./Storage/Basket";
import { VarianceTestClass } from "./VarianceTestClass";

test("variance1.1: can inversifyjs resolve dependency contravariantly??", () => {

    const myContainer = new Container();

    myContainer.bind<IFruit>("IFruit").to(Apple);
    myContainer.bind<IBasket<IFruit>>("BasketWithIFruit").to(Basket);

    myContainer.bind<VarianceTestClass>("VarianceTestClass").to(VarianceTestClass);

    const test = myContainer.get<VarianceTestClass>("VarianceTestClass");

    expect(test.test()).toBe("Apple");

});