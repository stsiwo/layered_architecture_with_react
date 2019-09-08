import { Container, interfaces } from "inversify";
import { IMutationLocalResolver } from "../../../Infrastructure/Networking/ApolloClient/LocalState/LocalResolvers/IMutationLocalResolver";
import { TYPES } from "../../types";
import { IsMenuRightSidebarMutationResolver } from "../../../Infrastructure/Networking/ApolloClient/LocalState/LocalResolvers/Mutations/IsMenuRightSidebarMutationResolver";

export const isMenuRightSidebarMutationResolverBindingModule = (myContainer: Container): Container => {

    // singleton
    myContainer.bind<IMutationLocalResolver>(TYPES.IMutationLocalResolvers).to(IsMenuRightSidebarMutationResolver).inSingletonScope();

    return myContainer;

}