import { ILocalResolverBuilder } from "../../../src/Infrastructure/Networking/ApolloClient/LocalState/LocalResolvers/LocalResolverBuilder/ILocalResolverBuilder";
import { Resolvers } from "apollo-boost";
import { bindDependencies } from "../../../src/DI/bindDependencies";
import { TYPES } from "../../../src/DI/DepTypes";
import { useResolvedService } from "../../../src/UI/Base/Hooks/ResolvedServicve";

function testFunc(localResolverBuilder: ILocalResolverBuilder): Resolvers {

    return localResolverBuilder.build();
}
const wapperFunc = bindDependencies(testFunc, [TYPES.ILocalResolverBuilder]);

test("itf.1.1: dependencies should be inject to a function", () => {

    const result = wapperFunc(); 

    console.log(result);

    expect(typeof result).toBe("object")
});


test("itf.1.2: dependencies should be inject to a function", () => {

    const builder: ILocalResolverBuilder = useResolvedService<ILocalResolverBuilder>(TYPES.ILocalResolverBuilder);

    const result = builder.build();

    console.log(result);

    expect(typeof result).toBe("object")
});
