export declare type GetProductSearchResultListOutputType = {
    products: ProductSearchResultListType[],
    filters: FilterListType[],
    totalCount: number,
}

export declare type ProductSearchResultListType = {
    id: string,
    image: string,
    name: string,
    price: {
        standardPrice: string,
        discountPrice?: string,
    },
    featured?: {
        bestSeller?: boolean,
        brandNew?: boolean,
        discount?: boolean,
    },
    reviews: {
        averageScore: number,
        totalReviews: number,
    },
    releaseDate?: Date,
}

export declare type FilterListType = {
    id: string;
    name: string;
    items: FilterItemType[],
}

export declare type FilterItemType = {
    id: string;
    name: string;
}