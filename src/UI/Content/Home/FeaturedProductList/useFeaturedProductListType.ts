import { RefObject, MouseEventHandler, ReactNode } from "react";
import { CssGlobalContextDataType } from "../../../Base/Context/CssGlobalContext/CssGlobalContextDataType";
import { SampleProductListType } from "./SampleProductList";

export declare type useFeaturedProductListType = {
    scrollContainerRef: RefObject<HTMLDivElement>,
    currentScreenWidth: number,
    cssGlobal: CssGlobalContextDataType,
    navigateToLeft: MouseEventHandler<HTMLButtonElement>,
    navigateToRight: MouseEventHandler<HTMLButtonElement>,
    sampleProductList: SampleProductListType[],
}