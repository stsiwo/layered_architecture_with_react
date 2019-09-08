import { DocumentNode } from 'graphql';
import { DefaultVariableType } from './ApolloClient/Base/DefaultVariablesType';
import { QueryTypeConstants } from '../Base/QueryTypeConstants';

export interface INetwork {
  
    /**
     * request for query (including app state)
     **/
    requestQuery<DataType, VariablesType extends DefaultVariableType>(input: VariablesType, queryType: QueryTypeConstants): Promise<DataType | undefined>;

    /**
     * request for create (including app state)
     **/
    requestCreate<DataType, VariablesType extends DefaultVariableType>(input: VariablesType, queryType: QueryTypeConstants): Promise<DataType | undefined>;

    /**
     * request for create (including app state)
     **/
    requestUpdate<DataType, VariablesType extends DefaultVariableType>(input: VariablesType, queryType: QueryTypeConstants): Promise<DataType | undefined>;
}
