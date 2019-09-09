import { IAppStateService } from "./IAppStateService";
import { IAppStateQuery } from "../../Infrastructure/AppStateQueries/IAppStateQuery";
import { inject } from "inversify";
import { TYPES } from "../../DI/DepTypes";
import { ToggleMenuRightSidebarDataType } from "./ToggleMenuRightSidebar/ToggleMenuRightSidebarDataType";

export class AppStateService implements IAppStateService {

    private _appStateQuery: IAppStateQuery

    public constructor(
        @inject(TYPES.IAppStateQuery) appStateQuery: IAppStateQuery
    ) {
        this._appStateQuery = appStateQuery;
    }

    public async toggleMenuRightSidebar(): Promise<ToggleMenuRightSidebarDataType> {
        return await this._appStateQuery.toggleMenuRightSidebar();
    }
}