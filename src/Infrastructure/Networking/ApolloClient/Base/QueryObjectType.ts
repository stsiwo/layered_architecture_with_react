import { DefaultVariableType } from "./DefaultVariablesType";

export interface QueryObjectType<VariablesType extends DefaultVariableType> {
    query: any; // should be type of gql
    variables: VariablesType; // this is also??
}