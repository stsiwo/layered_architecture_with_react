import { Container } from "inversify";
import { localResolverBuilderBindingModule } from "../../../../src/DI/LocalResolvers/LocalResolverBuilderBinding";
import { ILocalResolverBuilder } from "../../../../src/Infrastructure/Networking/ApolloClient/LocalState/LocalResolvers/LocalResolverBuilder/ILocalResolverBuilder";
import { TYPES } from "../../../../src/DI/types";

test("lrb.1.1: builder should resolve Resolvers object", () => {

    const myContainer = new Container();

    localResolverBuilderBindingModule(myContainer); 

    var test = myContainer.get<ILocalResolverBuilder>(TYPES.ILocalResolverBuilder);

    var resolversObject = test.build();

    console.log(resolversObject);

    expect(typeof resolversObject.Mutation.isMenuRightSidebarOpen()).toBe("boolean")
    expect(typeof resolversObject.Query.isMenuRightSidebarOpen()).toBe("boolean")

});