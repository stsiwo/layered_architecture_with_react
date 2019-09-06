import { IAggregate } from "../../Domain/Base/IAggregate";

export interface IRepository<T extends IAggregate> {

    // create
    create(aggregate: T): Promise<T>;

    // update
    update(aggregate: T): Promise<T>;

    // find
    find(input: object): Promise<T>;

};
