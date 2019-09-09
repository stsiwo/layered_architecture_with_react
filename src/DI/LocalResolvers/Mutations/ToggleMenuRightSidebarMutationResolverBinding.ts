import { Container, interfaces } from "inversify";
import { IMutationLocalResolver } from "../../../Infrastructure/Networking/ApolloClient/LocalState/LocalResolvers/IMutationLocalResolver";
import { TYPES } from "../../DepTypes";
import { ToggleMenuRightSidebarMutationResolver } from "../../../Infrastructure/Networking/ApolloClient/LocalState/LocalResolvers/Mutations/ToggleMenuRightSidebarMutationResolver";

export const ToggleMenuRightSidebarMutationResolverBindingModule = (myContainer: Container): Container => {

    // singleton
    myContainer.bind<IMutationLocalResolver>(TYPES.IMutationLocalResolvers).to(ToggleMenuRightSidebarMutationResolver).inSingletonScope();

    return myContainer;

}