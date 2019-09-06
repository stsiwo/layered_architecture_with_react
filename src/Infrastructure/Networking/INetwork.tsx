import { DocumentNode } from 'graphql';
import { QueryTypeConstants } from '../Queries/Base/QueryTypeConstants';
import { DefaultVariableType } from './ApolloClient/Base/DefaultVariablesType';

export interface INetwork {
  
  /**
   * request a query to server 
   **/
  requestQuery<DataType, VariablesType extends DefaultVariableType>(input: VariablesType, typeQuery: QueryTypeConstants): Promise<DataType | undefined>;

}
