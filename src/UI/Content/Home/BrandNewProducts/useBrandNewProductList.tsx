import { useState, createRef, ReactNode, MouseEventHandler } from "react";
import { useBrandNewProductListType } from "./useBrandNewProductListType";
import { useResponsiveComponent } from "../../../Base/Hooks/ResponsiveComponentHook";
import { useCssGlobalContext } from "../../../Base/Context/CssGlobalContext/CssGlobalContext";
import { sampleBrandNewProductList } from "./SampleBrandNewProductList";

export const useBrandNewProductList: () => useBrandNewProductListType = () => {

    const scrollContainerRef = createRef<HTMLDivElement>();
    const currentScreenWidth = useResponsiveComponent();
    const cssGlobal = useCssGlobalContext();

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
        sampleBrandNewProductList: sampleBrandNewProductList,
    }
}