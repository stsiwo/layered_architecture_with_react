import { DocumentNode } from 'graphql';
import { QueryTypeConstants } from '../Queries/Base/QueryTypeConstants';
import { DefaultVariableType } from './ApolloClient/Base/DefaultVariablesType';

export interface INetwork {
  
  /**
   * request a query to server 
   **/
  requestQuery<DataType extends DocumentNode, VariablesType extends DefaultVariableType>(input: DataType, typeQuery: QueryTypeConstants): Promise<DataType | undefined>;

}
