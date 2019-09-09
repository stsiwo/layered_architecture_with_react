import { DocumentNode } from 'graphql';
import { DefaultVariableType } from './ApolloClient/Base/DefaultVariablesType';
import { QueryTypeConstants } from '../Base/QueryTypeConstants';
import { RequestArgsType } from './ApolloClient/Base/RequestArgsType';

export interface INetwork {
  
    /**
     * request for query (including app state)
     **/
    requestQuery<DataType, VariablesType extends DefaultVariableType>(requestArgs: RequestArgsType<VariablesType>): Promise<DataType | undefined>;

    /**
     * request for create (including app state)
     **/
    requestCreate<DataType, VariablesType extends DefaultVariableType>(requestArgs: RequestArgsType<VariablesType>): Promise<DataType | undefined>;

    /**
     * request for create (including app state)
     **/
    requestUpdate<DataType, VariablesType extends DefaultVariableType>(requestArgs: RequestArgsType<VariablesType>): Promise<DataType | undefined>;
}
