import { Container } from "inversify";
import { networkingBindingModule } from "./Networking/NetworkingBinding";
import { queryGeneratorBindingModule } from "./Networking/QueryGeneratorsBinding";
import { apolloClientConfigBindingModule } from "./Networking/ApolloClientConfigBinding";
import { domainEventsConfigBindingModule } from "./DomainEvents/DomainEventsConfigBinding";
import { localResolverBuilderBindingModule } from "./LocalResolvers/LocalResolverBuilderBinding";

const myContainer = new Container();

// Networking 
networkingBindingModule(myContainer);
queryGeneratorBindingModule(myContainer);
apolloClientConfigBindingModule(myContainer);

// DomainEvents
domainEventsConfigBindingModule(myContainer);

// LocalResolverBuilder
localResolverBuilderBindingModule(myContainer);


export { myContainer };
