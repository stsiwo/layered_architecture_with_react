import { Container, interfaces } from "inversify";
import { TYPES } from "../types";
import { QueryTypeConstants } from "../../Infrastructure/Queries/Base/QueryTypeConstants";
import { IQueryGenerator } from "../../Infrastructure/Networking/ApolloClient/QueryGenerators/IQueryGenerator";
import { GetCartByUserIdQueryGenerator } from "../../Infrastructure/Networking/ApolloClient/QueryGenerators/Cart/GetCartByUserIdQueryGenerator ";
import { GetCartByIdQueryGenerator } from "../../Infrastructure/Networking/ApolloClient/QueryGenerators/Cart/GetCartByIdQueryGenerator";

export const queryGeneratorBindingModule = (myContainer: Container): Container => {

    myContainer.bind<interfaces.Factory<IQueryGenerator>>(TYPES.FactoryOfIQueryGenerator).toFactory<IQueryGenerator>((context: interfaces.Context) => {
        return (queryType: QueryTypeConstants) => {
            switch (queryType) {
                case QueryTypeConstants.GetCartById:
                    return new GetCartByIdQueryGenerator();
                case QueryTypeConstants.GetCartByUserId:
                    return new GetCartByUserIdQueryGenerator();
                default:
                    return new GetCartByIdQueryGenerator();
            }
        };
    });

    return myContainer;

}