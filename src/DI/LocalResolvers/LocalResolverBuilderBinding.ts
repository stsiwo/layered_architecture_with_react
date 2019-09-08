import { Container, interfaces } from "inversify";
import { TYPES } from "../types";
import { ILocalResolverBuilder } from "../../Infrastructure/Networking/ApolloClient/LocalState/LocalResolvers/LocalResolverBuilder/ILocalResolverBuilder";
import { LocalResolverBuilder } from "../../Infrastructure/Networking/ApolloClient/LocalState/LocalResolvers/LocalResolverBuilder/LocalResolverBuilder";
import { isMenuRightSidebarMutationResolverBindingModule } from "./Mutations/IsMenuRightSidebarMutationResolverBinding";
import { isMenuRightSidebarQueryResolverBindingModule } from "./Queries/IsMenuRightSidebarQueryResolverBinding";

export const localResolverBuilderBindingModule = (myContainer: Container): Container => {

    // singleton
    myContainer.bind<ILocalResolverBuilder>(TYPES.ILocalResolverBuilder).to(LocalResolverBuilder).inSingletonScope();

    // mutations
    isMenuRightSidebarMutationResolverBindingModule(myContainer);


    // queries
    isMenuRightSidebarQueryResolverBindingModule(myContainer);

    return myContainer;

}