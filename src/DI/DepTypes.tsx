export const TYPES = {

    // networking
    INetwork: Symbol.for("INetwork"),
    IQueryGenerator: Symbol.for("IQueryGenerator"),
    FactoryOfIQueryGenerator: Symbol.for("Factory<IQueryGenerator>"),
    ApolloClientConfig: Symbol.for("ApolloClientConfig"),

    // mapper
    IMapper: Symbol.for("IMapper"),

    // repository
    ICartRepository: Symbol.for("IRepository<Cart>"),
    IProductRepository: Symbol.for("IRepository<Product>"),
    IOrderRepository: Symbol.for("IRepository<Order>"),
    IUserRepository: Symbol.for("IRepository<User>"),

    // domain events
    IDomainEventEmitter: Symbol.for("IDomainEventEmitter"),
    DomainEventHandlers: Symbol.for("DomainEventHandlers"), // multi-inject

    // local resolvers
    IQueryLocalResolvers: Symbol.for("IQueryLocalResolvers"), // multi-inject
    IMutationLocalResolvers: Symbol.for("IMutationLocalResolvers"), // multi-inject
    ILocalResolverBuilder: Symbol.for("ILocalResolverBuilder"),

    // service
    IAppStateService: Symbol.for("IAppStateService"),
    ICartAppService: Symbol.for("ICartService"),
    IOrderAppService: Symbol.for("IOrderService"),
    IProductAppService: Symbol.for("IProductService"),
    IUserAppService: Symbol.for("IUserService"),

    // app state query
    IAppStateQuery: Symbol.for("IAppStateQuery"),

    // queries 
    ICartQuery: Symbol.for("ICartQuery"),
    IOrderQuery: Symbol.for("IOrderQuery"),
    IProductQuery: Symbol.for("IProductQuery"),
    IUserQuery: Symbol.for("IUserQuery"),
    
}

