import { Container, interfaces } from "inversify";
import { IQueryLocalResolver } from "../../../Infrastructure/Networking/ApolloClient/LocalState/LocalResolvers/IQueryLocalResolver";
import { TYPES } from "../../DepTypes";
import { IsMenuRightSidebarQueryResolver } from "../../../Infrastructure/Networking/ApolloClient/LocalState/LocalResolvers/Queries/IsMenuRightSidebarQueryResolver";

export const isMenuRightSidebarQueryResolverBindingModule = (myContainer: Container): Container => {

    // singleton
    myContainer.bind<IQueryLocalResolver>(TYPES.IQueryLocalResolvers).to(IsMenuRightSidebarQueryResolver).inSingletonScope();

    return myContainer;

}