import { IQueryLocalResolver } from "../IQueryLocalResolver";
import { ResolverType } from "../ResolverType";
import "reflect-metadata";
import { injectable } from "inversify";

@injectable()
export class IsMenuRightSidebarQueryResolver implements IQueryLocalResolver {

    define(): ResolverType {
        return {
            isMenuRightSidebarOpen: (rootValue, args, context, info): boolean => {
                // need to fix 
                return false;
            } 
        }
    }
}