import { CategoryTypeConstants } from "../../../Domain/CategoryTypeConstants";

export declare type GetProductSearchResultListInputType = {
    keyword?: string;
    category?: CategoryTypeConstants;
    offset: number;
    limit: number;
}; 