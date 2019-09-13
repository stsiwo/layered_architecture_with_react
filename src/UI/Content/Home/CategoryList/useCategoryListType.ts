import { RefObject, MouseEventHandler, ReactNode } from "react";
import { CssGlobalContextDataType } from "../../../Base/Context/CssGlobalContext/CssGlobalContextDataType";
import { GetCategoryListOutputType } from "../../../../Application/ProductServices/GetCategoryList/GetCategoryListOutputType";

export declare type useCategoryListType = {
    categoryList: GetCategoryListOutputType[];
}