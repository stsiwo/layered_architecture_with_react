import { injectable, inject, interfaces } from "inversify";
import { DocumentNode } from 'graphql';
import "reflect-metadata";
import { INetwork } from "../INetwork";
import ApolloClient from 'apollo-boost';
import { StateType } from "../Base/State";
import { QueryTypeConstants } from "../../Queries/Base/QueryTypeConstants";
import { IQueryGenerator } from "./QueryGenerators/IQueryGenerator";
import { TYPES } from "../../../di/types";

@injectable()
export class ApolloClientConfig {

    private _client: ApolloClient<StateType>;

    public constructor() {
        this._client = new ApolloClient<StateType>({
            uri: 'https://48p1r2roz4.sse.codesandbox.io',
        });
    }

    configure(): ApolloClient<StateType> {
        return this._client; 
    }
}
