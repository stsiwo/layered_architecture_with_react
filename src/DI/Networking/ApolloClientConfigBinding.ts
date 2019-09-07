import { Container, interfaces } from "inversify";
import { TYPES } from "../types";
import { ApolloClientConfig } from "../../Infrastructure/Networking/ApolloClient/ApolloClientConfig";

export const apolloClientConfigBindingModule = (myContainer: Container): Container => {

    // singleton
    myContainer.bind<ApolloClientConfig>(TYPES.ApolloClientConfig).to(ApolloClientConfig).inSingletonScope();

    return myContainer;

}