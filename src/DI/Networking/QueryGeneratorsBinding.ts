import { Container, interfaces } from "inversify";
import { TYPES } from "../types";
import { IQueryGenerator } from "../../Infrastructure/Networking/ApolloClient/QueryGenerators/IQueryGenerator";
import { GetCartByUserIdQueryGenerator } from "../../Infrastructure/Networking/ApolloClient/QueryGenerators/Cart/GetCartByUserIdQueryGenerator ";
import { GetCartByIdQueryGenerator } from "../../Infrastructure/Networking/ApolloClient/QueryGenerators/Cart/GetCartByIdQueryGenerator";
import { QueryTypeConstants } from "../../Infrastructure/Base/QueryTypeConstants";
import { CreateCartQueryGenerator } from "../../Infrastructure/Networking/ApolloClient/QueryGenerators/Cart/CreateCart";
import { CreateOrderQueryGenerator } from "../../Infrastructure/Networking/ApolloClient/QueryGenerators/Cart/CreateOrder";
import { UpdateCartQueryGenerator } from "../../Infrastructure/Networking/ApolloClient/QueryGenerators/Cart/UpdateCart";
import { UpdateOrderQueryGenerator } from "../../Infrastructure/Networking/ApolloClient/QueryGenerators/Cart/UpdateOrder";

export const queryGeneratorBindingModule = (myContainer: Container): Container => {

    myContainer.bind<interfaces.Factory<IQueryGenerator>>(TYPES.FactoryOfIQueryGenerator).toFactory<IQueryGenerator>((context: interfaces.Context) => {
        return (queryType: QueryTypeConstants) => {
            switch (queryType) {
                // query
                case QueryTypeConstants.GetCartById:
                    return new GetCartByIdQueryGenerator();
                case QueryTypeConstants.GetCartByUserId:
                    return new GetCartByUserIdQueryGenerator();

                // create (mutation)
                case QueryTypeConstants.CreateCart:
                    return new CreateCartQueryGenerator();
                case QueryTypeConstants.CreateOrder:
                    return new CreateOrderQueryGenerator();

                // update (mutation)
                case QueryTypeConstants.UpdateCart:
                    return new UpdateCartQueryGenerator();
                case QueryTypeConstants.UpdateOrder:
                    return new UpdateOrderQueryGenerator();

                // default should through exception??
                default:
                    return new GetCartByIdQueryGenerator();
            }
        };
    });

    return myContainer;

}