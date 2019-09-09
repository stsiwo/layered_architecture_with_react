import { ToggleMenuRightSidebarDataType } from "../AppStateServices/ToggleMenuRightSidebar/ToggleMenuRightSidebarDataType";

export interface IAppStateQuery {

    toggleMenuRightSidebar(): Promise<ToggleMenuRightSidebarDataType>;
}