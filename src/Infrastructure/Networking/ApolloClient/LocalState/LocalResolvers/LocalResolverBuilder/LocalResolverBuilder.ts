import { Resolvers } from "apollo-boost";
import { ILocalResolverBuilder } from "./ILocalResolverBuilder";
import { IQueryLocalResolver } from "../IQueryLocalResolver";
import { IMutationLocalResolver } from "../IMutationLocalResolver";
import { inject, multiInject, injectable } from "inversify";
import { TYPES } from "../../../../../../DI/DepTypes";
import { ResolverType } from "../ResolverType";
import "reflect-metadata";

@injectable()
export class LocalResolverBuilder implements ILocalResolverBuilder {

    private _queryLocalResolvers: IQueryLocalResolver[];

    private _mutationLocalResolvers: IMutationLocalResolver[];

    public constructor(
        @multiInject(TYPES.IQueryLocalResolvers) queryLocalResolvers: IQueryLocalResolver[]
        , @multiInject(TYPES.IMutationLocalResolvers) mutationLocalResolvers: IMutationLocalResolver[]
    ) {
        this._queryLocalResolvers = queryLocalResolvers;
        this._mutationLocalResolvers = mutationLocalResolvers;
    }

    build(): Resolvers {
        return {
            Query: this._queryLocalResolvers.reduce<ResolverType>(
                (previous: ResolverType, current: IQueryLocalResolver) => {
                    return Object.assign<ResolverType, ResolverType>(previous, current.define());
                }
                , {} as ResolverType),
            Mutation: this._mutationLocalResolvers.reduce<ResolverType>(
                (previous: ResolverType, current: IMutationLocalResolver) => {
                    return Object.assign<ResolverType, ResolverType>(previous, current.define());
                }
                , {} as ResolverType),
        }
    }

}