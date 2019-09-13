import { useCategoryListType } from "./useCategoryListType";
import { getCategoryListTestData } from "../../../../../tests/UI/Content/Home/CategoryList/CategoryListTestData";

export const useCategoryList: () => useCategoryListType = () => {

    return {
        categoryList: getCategoryListTestData(),
    }
}