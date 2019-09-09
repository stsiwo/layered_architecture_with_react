import { DefaultVariableType } from "./DefaultVariablesType";
import { QueryTypeConstants } from "../../../Base/QueryTypeConstants";

export declare type RequestArgsType<T extends DefaultVariableType> = {
    input?: T,
    queryType: QueryTypeConstants
}