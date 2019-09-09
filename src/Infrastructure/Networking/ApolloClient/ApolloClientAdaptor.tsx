import { injectable, inject, interfaces } from "inversify";
import { DocumentNode } from 'graphql';
import "reflect-metadata";
import { INetwork } from "../INetwork";
import ApolloClient from 'apollo-boost';
import { StateType } from "../Base/State";
import { IQueryGenerator } from "./QueryGenerators/IQueryGenerator";
import { TYPES } from "../../../DI/DepTypes";
import { ApolloClientConfig } from "./ApolloClientConfig";
import { QueryObjectType } from "./Base/QueryObjectType";
import { DefaultVariableType } from "./Base/DefaultVariablesType";
import { QueryTypeConstants } from "../../Base/QueryTypeConstants";


@injectable()
export class ApolloClientAdaptor implements INetwork {

    // type paremter is for whole state for your app??
    private _client: ApolloClient<StateType>;

    private _queryGeneratorFactory: (queryType: QueryTypeConstants) => IQueryGenerator; 

    public constructor(
        @inject(TYPES.FactoryOfIQueryGenerator) queryGeneratorFactory: (queryType: QueryTypeConstants) => IQueryGenerator
        , @inject(TYPES.ApolloClientConfig) apolloClientConfig: ApolloClientConfig
    ) {
        this._client = apolloClientConfig.configure();
        this._queryGeneratorFactory = queryGeneratorFactory;
    }

    public async requestQuery<DataType, VariablesType extends DefaultVariableType>(input: VariablesType, queryType: QueryTypeConstants): Promise<DataType | undefined> {

        const queryGenerator: IQueryGenerator = this._queryGeneratorFactory(queryType);

        const queryData: DocumentNode = queryGenerator.generate<DataType>(); 

        const { loading, errors, data } = await this._client.query<DataType, VariablesType>({
            query: queryData,
            variables: input, 
        }); 

        if (errors) {
            // undefined indicate some errors during request. is it bad??
            console.log("networking error during query request: ");
            console.log(errors);
            return undefined;
        }

        return data;
    }

    public async requestCreate<DataType, VariablesType extends DefaultVariableType>(input: VariablesType, queryType: QueryTypeConstants): Promise<DataType> {
        
        const queryGenerator: IQueryGenerator = this._queryGeneratorFactory(queryType);

        const queryData: DocumentNode = queryGenerator.generate<DataType>(); 

        const { errors, data } = await this._client.mutate<DataType, VariablesType>({
            mutation: queryData,
            variables: input, 
        }); 

        if (errors) {
            // undefined indicate some errors during request. is it bad??
            console.log("networking error during create request: ");
            console.log(errors);
            return undefined;
        }

        return data;
    }

    public async requestUpdate<DataType, VariablesType extends DefaultVariableType>(input: VariablesType, queryType: QueryTypeConstants): Promise<DataType> {

        const queryGenerator: IQueryGenerator = this._queryGeneratorFactory(queryType);

        const queryData: DocumentNode = queryGenerator.generate<DataType>(); 

        const { errors, data } = await this._client.mutate<DataType, VariablesType>({
            mutation: queryData,
            variables: input, 
        }); 

        if (errors) {
            // undefined indicate some errors during request. is it bad??
            console.log("networking error during update request: ");
            console.log(errors);
            return undefined;
        }

        return data;
    }
}
