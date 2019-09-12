import { RefObject, MouseEventHandler, ReactNode } from "react";
import { CssGlobalContextDataType } from "../../../Base/Context/CssGlobalContext/CssGlobalContextDataType";
import { SampleBrandNewProductListType } from "./SampleBrandNewProductList";

export declare type useBrandNewProductListType = {
    scrollContainerRef: RefObject<HTMLDivElement>,
    currentScreenWidth: number,
    cssGlobal: CssGlobalContextDataType,
    navigateToLeft: MouseEventHandler<HTMLButtonElement>,
    navigateToRight: MouseEventHandler<HTMLButtonElement>,
    sampleBrandNewProductList: SampleBrandNewProductListType[],
}