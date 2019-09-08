import { IMutationLocalResolver } from "../IMutationLocalResolver";
import { ResolverType } from "../ResolverType";
import "reflect-metadata";
import { injectable } from "inversify";

@injectable()
export class IsMenuRightSidebarMutationResolver implements IMutationLocalResolver {

    define(): ResolverType {
        return {
            isMenuRightSidebarOpen: (rootValue, args, context, info): boolean => {
                // need to fix 
                return false;
            } 
        }
    }
}