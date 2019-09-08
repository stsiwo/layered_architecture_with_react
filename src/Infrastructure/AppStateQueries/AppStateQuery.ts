import { IAppStateQuery } from "./IAppStateQuery";
import { INetwork } from "../Networking/INetwork";
import { injectable, inject } from "inversify";
import { TYPES } from "../../DI/types";

@injectable()
export class AppStateQuery implements IAppStateQuery {

    private _network: INetwork;

    public constructor(
        @inject(TYPES.INetwork) network: INetwork
    ) {
        this._network = network;
    }

    toggleMenuRightSidebar(): boolean {

    }

}