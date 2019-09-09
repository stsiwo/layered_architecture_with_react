import { Container, interfaces } from "inversify";
import { TYPES } from "../DepTypes";
import { ICartQuery } from "../../Application/Queries/Cart/ICartQuery";
import { CartQuery } from "../../Infrastructure/Queries/CartQuery";

export const queriesBindingModule = (myContainer: Container): Container => {

    myContainer.bind<ICartQuery>(TYPES.ICartQuery).to(CartQuery);


    return myContainer;

}
