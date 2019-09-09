import { Container, interfaces } from "inversify";
import { TYPES } from "../DepTypes";
import { IAppStateQuery } from "../../Application/AppStateQueries/IAppStateQuery";
import { AppStateQuery } from "../../Infrastructure/AppStateQueries/AppStateQuery";

export const appStateQueryBindingModule = (myContainer: Container): Container => {

    myContainer.bind<IAppStateQuery>(TYPES.IAppStateQuery).to(AppStateQuery);


    return myContainer;

}
