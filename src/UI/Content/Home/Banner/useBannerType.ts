import { RefObject, MouseEventHandler } from "react";

export declare type useBannerType = {
    bannerListRef: RefObject<HTMLDivElement>,
    handleNavBtnClick: MouseEventHandler<HTMLButtonElement>,
    handleLeftBtnClick: MouseEventHandler<HTMLButtonElement>,
    handleRightBtnClick: MouseEventHandler<HTMLButtonElement>,
    nav1SelectedClass: string,
    nav2SelectedClass: string,
    nav3SelectedClass: string,
}