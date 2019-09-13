import { useState, createRef, ReactNode, MouseEventHandler, useEffect } from "react";
import { useFeaturedProductListType } from "./useFeaturedProductListType";
import { useResponsiveComponent } from "../../../Base/Hooks/ResponsiveComponentHook";
import { useCssGlobalContext } from "../../../Base/Context/CssGlobalContext/CssGlobalContext";
import { getFeaturedProductListTestData } from "../../../../../tests/UI/Content/Home/FeaturedProductList/FeaturedProductListTestData";

export const useFeaturedProductList: () => useFeaturedProductListType = () => {

    const scrollContainerRef = createRef<HTMLDivElement>();
    const currentScreenWidth = useResponsiveComponent();
    const cssGlobal = useCssGlobalContext();
    //const currentFeaturedProductList: GetFeaturedProductListOutputType[] = useFeaturedProductListApiFetch();

    const navigateToLeft: MouseEventHandler<HTMLButtonElement> = (e) => {
        scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
    };

    const navigateToRight: MouseEventHandler<HTMLButtonElement> = (e) => {
        scrollContainerRef.current.scrollTo({ left: scrollContainerRef.current.scrollWidth, behavior: "smooth" });
    };

    return {
        scrollContainerRef: scrollContainerRef,
        currentScreenWidth: currentScreenWidth,
        cssGlobal: cssGlobal,
        navigateToLeft: navigateToLeft,
        navigateToRight: navigateToRight,
        //featuredProductList: currentFeaturedProductList,
        featuredProductList: getFeaturedProductListTestData(),
    }
}