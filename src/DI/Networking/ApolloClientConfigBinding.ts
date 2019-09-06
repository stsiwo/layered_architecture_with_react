import { Container, interfaces } from "inversify";
import { TYPES } from "../types";
import { QueryTypeConstants } from "../../Infrastructure/Queries/Base/QueryTypeConstants";
import { IQueryGenerator } from "../../Infrastructure/Networking/ApolloClient/QueryGenerators/IQueryGenerator";
import { GetCartByIdQueryGenerator } from "../../Infrastructure/Networking/ApolloClient/QueryGenerators/Cart/GetCartByIdQueryGenerator";
import { GetCartByUserIdQueryGenerator } from "../../Infrastructure/Networking/ApolloClient/QueryGenerators/Cart/GetCartByUserIdQueryGenerator ";
import { ApolloClientConfig } from "../../Infrastructure/Networking/ApolloClient/ApolloClientConfig";

export const apolloClientConfigBindingModule = (myContainer: Container): Container => {

    // singleton
    myContainer.bind<ApolloClientConfig>(TYPES.ApolloClientConfig).to(ApolloClientConfig).inSingletonScope();

    return myContainer;

}