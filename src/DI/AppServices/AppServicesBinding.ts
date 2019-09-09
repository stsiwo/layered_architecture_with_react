import { Container, interfaces } from "inversify";
import { TYPES } from "../DepTypes";
import { IAppStateService } from "../../Application/AppStateServices/IAppStateService";
import { AppStateService } from "../../Application/AppStateServices/AppStateService";
import { ICartAppService } from "../../Application/CartServices/ICartAppService";
import { CartAppService } from "../../Application/CartServices/CartAppService";

export const appServicesBindingModule = (myContainer: Container): Container => {

    myContainer.bind<IAppStateService>(TYPES.IAppStateService).to(AppStateService);

    myContainer.bind<ICartAppService>(TYPES.ICartAppService).to(CartAppService);

    return myContainer;

}
