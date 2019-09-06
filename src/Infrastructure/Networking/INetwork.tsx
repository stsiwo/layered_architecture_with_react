import { DocumentNode } from 'graphql';
import { DefaultVariableType } from './ApolloClient/Base/DefaultVariablesType';
import { QueryTypeConstants } from '../Base/QueryTypeConstants';

export interface INetwork {
  
  /**
   * request for query 
   **/
  requestQuery<DataType, VariablesType extends DefaultVariableType>(input: VariablesType, queryType: QueryTypeConstants): Promise<DataType | undefined>;

  /**
   * request for create 
   **/
  requestCreate<DataType, VariablesType extends DefaultVariableType>(input: VariablesType, queryType: QueryTypeConstants): Promise<DataType | undefined>;

  /**
   * request for create 
   **/
  requestUpdate<DataType, VariablesType extends DefaultVariableType>(input: VariablesType, queryType: QueryTypeConstants): Promise<DataType | undefined>;

}
