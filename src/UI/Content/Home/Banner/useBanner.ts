import { useState, createRef } from "react";
import { useBannerType } from "./useBannerType";

export const useBanner: () => useBannerType = () => {
    
    const [currentItem, setCurrentItem] = useState(0);
    const numberOfItems = 3;

    let bannerListRef = createRef<HTMLDivElement>();

    const animateBannerListItem: (current: number) => void = (current) => {
        bannerListRef.current.style.left = "-" + current + "00%";
    }

    const handleNavBtnClick: React.MouseEventHandler<HTMLButtonElement>  = (e) => {
        const nextItem: number = Number(e.currentTarget.value);
        animateBannerListItem(nextItem);
        setCurrentItem(nextItem);
    };

    const handleLeftBtnClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        const previousItem: number = (currentItem == 0) ? numberOfItems - 1 : currentItem - 1; 
        animateBannerListItem(previousItem);
        setCurrentItem(previousItem);
    };

    const handleRightBtnClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        const nextItem: number = (currentItem == (numberOfItems - 1)) ? 0 : currentItem + 1; 
        animateBannerListItem(nextItem);
        setCurrentItem(nextItem);
    };

    const getNavSelectedClass: (current: number) => string = (current) => {
        return currentItem == current ? 'banner-nav-btn-selected' : ""; 
    }

    const nav1SelectedClass = getNavSelectedClass(0); 
    const nav2SelectedClass = getNavSelectedClass(1);
    const nav3SelectedClass = getNavSelectedClass(2);

    return {
        bannerListRef: bannerListRef,
        handleNavBtnClick: handleNavBtnClick,
        handleLeftBtnClick: handleLeftBtnClick,
        handleRightBtnClick: handleRightBtnClick,
        nav1SelectedClass: nav1SelectedClass,
        nav2SelectedClass: nav2SelectedClass,
        nav3SelectedClass: nav3SelectedClass,
    }
}