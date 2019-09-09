import { ToggleMenuRightSidebarDataType } from "./ToggleMenuRightSidebar/ToggleMenuRightSidebarDataType";

export interface IAppStateService {

    toggleMenuRightSidebar(): Promise<ToggleMenuRightSidebarDataType>;
}