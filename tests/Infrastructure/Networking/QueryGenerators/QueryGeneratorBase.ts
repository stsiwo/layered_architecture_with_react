import { IQueryGenerator } from "./IQueryGenerator";
import { QueryTypeConstantsType } from "./QueryTypeConstantsType";
import { QueryObjectType } from "./QueryObjectType";
import { injectable, unmanaged } from "inversify";
import "reflect-metadata"; // only include once, so put entry class in src directory

@injectable()
export abstract class QueryGeneratorBase implements IQueryGenerator {

    protected _query: any;

    protected _variables: object;

    public constructor(@unmanaged() query: any,@unmanaged() variables: object) {
        this._query = query;
        this._variables = variables;
    }

    Generate(): QueryObjectType {

        return {
            query: this._query,
            variables: this._variables
        } as QueryObjectType; 
    }

}