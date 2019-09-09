import { IAppStateService } from "./IAppStateService";
import { inject, injectable } from "inversify";
import { TYPES } from "../../DI/DepTypes";
import { ToggleMenuRightSidebarDataType } from "./ToggleMenuRightSidebar/ToggleMenuRightSidebarDataType";
import "reflect-metadata";
import { IAppStateQuery } from "../AppStateQueries/IAppStateQuery";

@injectable()
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