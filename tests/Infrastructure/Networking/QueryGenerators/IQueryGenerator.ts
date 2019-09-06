import { QueryTypeConstantsType } from "./QueryTypeConstantsType";
import { QueryObjectType } from "./QueryObjectType";

export interface IQueryGenerator {

    /**
     * 
     */
    Generate(): QueryObjectType;
}