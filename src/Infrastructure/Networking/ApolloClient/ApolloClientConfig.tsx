import { injectable, multiInject, inject } from "inversify";
import "reflect-metadata";
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { StateType } from "../Base/State";
import { ApolloCache } from "apollo-cache";
import { LocalStateDefaultData } from "./LocalState/LocalStateDefaultData";
import { ILocalResolver } from "./LocalState/LocalResolvers/ILocalResolver";
import { TYPES } from "../../../DI/types";
import { ILocalResolverBuilder } from "./LocalState/LocalResolvers/LocalResolverBuilder/ILocalResolverBuilder";

@injectable()
export class ApolloClientConfig {

    private _client: ApolloClient<StateType>;

    public constructor(
        @inject(TYPES.ILocalResolverBuilder) localResolverBuilder: ILocalResolverBuilder
    ) {

        this._client = new ApolloClient<StateType>({
            cache: new InMemoryCache(),
            //uri: 'https://48p1r2roz4.sse.codesandbox.io',
            resolvers: localResolverBuilder.build(),
        });

        // initial local state
        this._client.cache.writeData({
            data: LocalStateDefaultData
        });

    }

    configure(): ApolloClient<StateType> {
        return this._client; 
    }
}
