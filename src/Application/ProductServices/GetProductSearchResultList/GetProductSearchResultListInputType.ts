import { CategoryTypeConstants } from "../../../Domain/CategoryTypeConstants";
import { PriceFilterTypeConstants } from "../../../Domain/Filters/PriceFilterTypeConstants";
import { MakerFilterTypeConstants } from "../../../Domain/Filters/MakerFiltertypeConstants";
import { KeywordFilterType } from "../../../Domain/Filters/KeyWordFilterType";
import { CategoryFilterType } from "../../../Domain/Filters/CategoryFilterType";

export declare type GetProductSearchResultListInputType = {
    filters?: FilterType;
    offset: number;
    limit: number;
}; 

declare type FilterType = {
    price?: PriceFilterTypeConstants,
    maker?: MakerFilterTypeConstants,
    keyword?: KeywordFilterType,
    category?: CategoryFilterType,
}