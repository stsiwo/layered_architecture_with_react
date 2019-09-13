export declare type GetFeaturedProductListOutputType = {
    id: string,
    image: string,
    productName: string,
    productPrice: {
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