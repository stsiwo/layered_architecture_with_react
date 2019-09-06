// need to constrain??
export interface IRepository<T extends IAggregate> {

  // create
  create(aggregate: T): string;

  // find
  find(id: string): T;

};
