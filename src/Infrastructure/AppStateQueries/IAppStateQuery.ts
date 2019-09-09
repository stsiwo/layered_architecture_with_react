import { ToggleMenuRightSidebarDataType } from "../../Application/AppStateServices/ToggleMenuRightSidebar/ToggleMenuRightSidebarDataType";

export interface IAppStateQuery {

    toggleMenuRightSidebar(): Promise<ToggleMenuRightSidebarDataType>;
}