import { injectable, multiInject, inject } from "inversify";
import "reflect-metadata";
import { InMemoryCache, HttpLink, ApolloClient } from 'apollo-boost';
import { StateType } from "../Base/State";
import { ApolloCache } from "apollo-cache";
import { LocalStateDefaultData } from "./LocalState/LocalStateDefaultData";
import { ILocalResolver } from "./LocalState/LocalResolvers/ILocalResolver";
import { TYPES } from "../../../DI/types";
import { ILocalResolverBuilder } from "./LocalState/LocalResolvers/LocalResolverBuilder/ILocalResolverBuilder";
import { LocalStateSDL } from "./LocalState/LocalStateSDL";

@injectable()
export class ApolloClientConfig {

    private _client: ApolloClient<StateType>;

    public constructor(
        @inject(TYPES.ILocalResolverBuilder) localResolverBuilder: ILocalResolverBuilder
    ) {

        this._client = new ApolloClient<StateType>({
            cache: new InMemoryCache(),
            resolvers: localResolverBuilder.build(),
            typeDefs: LocalStateSDL,
            link: new HttpLink({ uri: 'http://localhost:4000/graphql' }),
            
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
