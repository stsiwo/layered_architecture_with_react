import { QueryObjectType } from "../Base/QueryObjectType";
import { QueryOptions, DocumentNode } from "apollo-boost";

export interface IQueryGenerator {

    /**
     * 
     */
    generate<DataType>(): DataType; 
}