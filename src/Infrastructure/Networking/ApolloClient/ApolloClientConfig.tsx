import { injectable } from "inversify";
import "reflect-metadata";
import ApolloClient from 'apollo-boost';
import { StateType } from "../Base/State";

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
