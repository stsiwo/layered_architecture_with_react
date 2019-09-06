import { Container } from "inversify";
import { networkingBindingModule } from "./Networking/NetworkingBinding";
import { queryGeneratorBindingModule } from "./Networking/QueryGeneratorsBinding";
import { apolloClientConfigBindingModule } from "./Networking/ApolloClientConfigBinding";

const myContainer = new Container();

// Networking 
networkingBindingModule(myContainer);
queryGeneratorBindingModule(myContainer);
apolloClientConfigBindingModule(myContainer);


export { myContainer };
