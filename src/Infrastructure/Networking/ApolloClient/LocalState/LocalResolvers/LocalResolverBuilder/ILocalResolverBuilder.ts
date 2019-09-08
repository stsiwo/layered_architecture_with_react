import { Resolvers } from "apollo-boost";

export interface ILocalResolverBuilder {

    build(): Resolvers;
}