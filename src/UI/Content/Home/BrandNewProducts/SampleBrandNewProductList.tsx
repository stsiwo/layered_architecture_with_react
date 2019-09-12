const SampleBrandNewImageSrc = require("../../../../Images/sample_image.jpg");

export declare type SampleBrandNewProductListType = {
    id: string,
    image: string,
    productName: string,
    productPrice: {
        standardPrice: number,
        discountPrice?: number,
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
    releaseDate: Date,
}

export const sampleBrandNewProductList: SampleBrandNewProductListType[] = [
    {
        id: "1",
        image: SampleBrandNewImageSrc,
        productName: "product name 1===============================================",
        productPrice: {
            standardPrice: 4000.00,
        },
        featured: {
            bestSeller: true,
        },
        reviews: {
            averageScore: 3.00,
            totalReviews: 43,
        },
    },
    {
        id: "2",
        image: SampleBrandNewImageSrc,
        productName: "product name 2",
        productPrice: {
            standardPrice: 4000.00,
        },
        featured: {
            brandNew: true,
        },
        reviews: {
            averageScore: 3.00,
            totalReviews: 43,
        },
    },
    {
        id: "3",
        image: SampleBrandNewImageSrc,
        productName: "product name 3",
        productPrice: {
            standardPrice: 14000.00,
            discountPrice: 13800.00,
        },
        featured: {
            discount: true,
        },
        reviews: {
            averageScore: 3.00,
            totalReviews: 43,
        },
    },
    {
        id: "4",
        image: SampleBrandNewImageSrc,
        productName: "product name 4",
        productPrice: {
            standardPrice: 4000.00,
        },
        featured: {
            brandNew: true,
        },
        reviews: {
            averageScore: 3.00,
            totalReviews: 43,
        },
    },
    {
        id: "5",
        image: SampleBrandNewImageSrc,
        productName: "product name 5",
        productPrice: {
            standardPrice: 4000.00,
            discountPrice: 3800.00,
        },
        featured: {
            discount: true,
        },
        reviews: {
            averageScore: 3.00,
            totalReviews: 43,
        },
    },
    {
        id: "6",
        image: SampleBrandNewImageSrc,
        productName: "product name 6",
        productPrice: {
            standardPrice: 4000.00,
        },
        featured: {
            bestSeller: true,
        },
        reviews: {
            averageScore: 3.00,
            totalReviews: 43,
        },
    },
    {
        id: "7",
        image: SampleBrandNewImageSrc,
        productName: "product name 7",
        productPrice: {
            standardPrice: 4000.00,
            discountPrice: 3800.00,
        },
        featured: {
            brandNew: true,
        },
        reviews: {
            averageScore: 3.00,
            totalReviews: 43,
        },
        
    },
]