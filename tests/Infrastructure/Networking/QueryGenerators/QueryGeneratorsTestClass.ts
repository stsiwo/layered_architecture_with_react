import { QueryGeneratorBase } from "./QueryGeneratorBase";
import { gql } from "apollo-boost";
import { QueryObjectType } from "./QueryObjectType";
import { injectable, inject } from "inversify";
import "reflect-metadata"; // only include once, so put entry class in src directory
import { IQueryGenerator } from "./IQueryGenerator";
import { TYPES } from "./Types";

@injectable()
export class QueryGeneratorsTestClass {

    private _queryGeneratorFactory: (queryType: string) => IQueryGenerator; 

    public constructor(
        @inject(TYPES.FactoryOfIQueryGenerator) queryGeneratorFactory: (queryType: string) => IQueryGenerator
    ) {
        this._queryGeneratorFactory = queryGeneratorFactory; 
    }

    public test(queryType: string): QueryObjectType {
        const impl = this._queryGeneratorFactory(queryType);
        return impl.Generate();
    }

}