import { INetwork } from "../Networking/INetwork";
import { injectable, inject } from "inversify";
import { TYPES } from "../../DI/DepTypes";
import { ToggleMenuRightSidebarDataType } from "../../Application/AppStateServices/ToggleMenuRightSidebar/ToggleMenuRightSidebarDataType";
import { ToggleMenuRightSidebarVariablesType } from "../../Application/AppStateServices/ToggleMenuRightSidebar/ToggleMenuRightSidebarVariablesType";
import { QueryTypeConstants } from "../Base/QueryTypeConstants";
import "reflect-metadata";
import { IAppStateQuery } from "../../Application/AppStateQueries/IAppStateQuery";

@injectable()
export class AppStateQuery implements IAppStateQuery {

    private _network: INetwork;

    public constructor(
        @inject(TYPES.INetwork) network: INetwork
    ) {
        this._network = network;
    }

    public async toggleMenuRightSidebar(): Promise<ToggleMenuRightSidebarDataType> {
        return this._network.requestUpdate<ToggleMenuRightSidebarDataType, ToggleMenuRightSidebarVariablesType>({
            queryType: QueryTypeConstants.ToggleMenuRightSidebar,
        });
    }

}