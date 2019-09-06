import { Container, interfaces } from "inversify";
import { IQueryGenerator } from "./IQueryGenerator";
import { GetCartByIdQueryGenerator } from "./GetCartByIdQueryGenerator";
import { TYPES } from "./types";
import { QueryObjectType } from "./QueryObjectType";
import "reflect-metadata"; // only include once, so put entry class in src directory
import { QueryTypeConstantsType } from "./QueryTypeConstantsType";
import { QueryTypeConstants } from "./QueryTypeConstants";
import { GetCartByUserIdQueryGenerator } from "./GetCartByUserIdQueryGenerator ";
import { QueryGeneratorsTestClass } from "./QueryGeneratorsTestClass";

test("DI: each impl QueryGenerator should be resolved", () => {

    const myContainer = new Container();
    myContainer.bind<IQueryGenerator>(TYPES.IQueryGenerator).to(GetCartByIdQueryGenerator);

    var test = myContainer.get<IQueryGenerator>(TYPES.IQueryGenerator);

    console.log(test.Generate());

    expect(typeof test.Generate()).toBe("string");
});

test("DI: named (keyed) registration of impl", () => {

    const myContainer = new Container();

    myContainer.bind<interfaces.Factory<IQueryGenerator>>(TYPES.FactoryOfIQueryGenerator).toFactory<IQueryGenerator>((context: interfaces.Context) => {
        return (queryType: string) => {
            switch (queryType) {
                case QueryTypeConstants.GetCartById:
                    return new GetCartByIdQueryGenerator();
                case QueryTypeConstants.GetCartByUserId:
                    return new GetCartByUserIdQueryGenerator();
                default:
                    return null;
            }
        };
    });

    myContainer.bind<QueryGeneratorsTestClass>("QueryGeneratorsTestClass").to(QueryGeneratorsTestClass);

    var test = myContainer.get<QueryGeneratorsTestClass>("QueryGeneratorsTestClass");

    var result1 = test.test(QueryTypeConstants.GetCartById);
    var result2 = test.test(QueryTypeConstants.GetCartByUserId);

    console.log(result1);
    console.log(result2);

    expect(result1.variables).toEqual("a");
    expect(result2.variables).toEqual("a");
});