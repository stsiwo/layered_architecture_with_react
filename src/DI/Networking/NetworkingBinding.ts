import { Container } from "inversify";
import { TYPES } from "../DepTypes";
import { INetwork } from "../../Infrastructure/Networking/INetwork";
import { ApolloClientAdaptor } from "../../Infrastructure/Networking/ApolloClient/ApolloClientAdaptor";

export const networkingBindingModule = (myContainer: Container): Container => {

    myContainer.bind<INetwork>(TYPES.INetwork).to(ApolloClientAdaptor);

    return myContainer;

}