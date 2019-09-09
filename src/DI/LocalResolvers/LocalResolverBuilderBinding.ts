import { Container, interfaces } from "inversify";
import { TYPES } from "../DepTypes";
import { ILocalResolverBuilder } from "../../Infrastructure/Networking/ApolloClient/LocalState/LocalResolvers/LocalResolverBuilder/ILocalResolverBuilder";
import { LocalResolverBuilder } from "../../Infrastructure/Networking/ApolloClient/LocalState/LocalResolvers/LocalResolverBuilder/LocalResolverBuilder";
import { isMenuRightSidebarQueryResolverBindingModule } from "./Queries/IsMenuRightSidebarQueryResolverBinding";
import { ToggleMenuRightSidebarMutationResolverBindingModule } from "./Mutations/ToggleMenuRightSidebarMutationResolverBinding";

export const localResolverBuilderBindingModule = (myContainer: Container): Container => {

    // singleton
    myContainer.bind<ILocalResolverBuilder>(TYPES.ILocalResolverBuilder).to(LocalResolverBuilder).inSingletonScope();

    // mutations
    ToggleMenuRightSidebarMutationResolverBindingModule(myContainer);


    // queries
    isMenuRightSidebarQueryResolverBindingModule(myContainer);

    return myContainer;

}