import { IMutationLocalResolver } from "../IMutationLocalResolver";
import { ResolverType } from "../ResolverType";
import "reflect-metadata";
import { injectable } from "inversify";

@injectable()
export class ToggleMenuRightSidebarMutationResolver implements IMutationLocalResolver {

    define(): ResolverType {
        return {
            toggleMenuRightSidebar: (rootValue, args, context, info): boolean => {
                // need to fix 
                return false;
            } 
        }
    }
}