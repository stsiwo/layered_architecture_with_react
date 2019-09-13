import { GetFeaturedProductListOutputType } from "../../../../../src/Application/ProductServices/GetFeaturedProductList/GetFeaturedProductListOutputType";
import * as faker from 'faker';

export const getFeaturedProductListTestData: () => GetFeaturedProductListOutputType[] = () => {

    return [
        getFeaturedBestSellerProductTestData(),
        getFeaturedBrandNewProductTestData(),
        getFeaturedDiscountProductTestData(),
        getFeaturedBrandNewProductTestData(),
        getFeaturedBestSellerProductTestData(),
        getFeaturedBrandNewProductTestData(),
        getFeaturedBestSellerProductTestData()
    ];
    
}

const getFeaturedBestSellerProductTestData: () => GetFeaturedProductListOutputType = () => {
    return {
        id: faker.random.uuid(),
        image: faker.random.image(),
        productName: faker.random.words(10),
        productPrice: {
            standardPrice: faker.commerce.price(1.00, 100000.00, 2),
            discountPrice: faker.commerce.price(1.00, 100000.00, 2),
        },
        featured: {
            bestSeller: true,
        },
        reviews: {
            averageScore: faker.random.number(5),
            totalReviews: faker.random.number(100),
        },
        releaseDate: faker.date.past(),
    };
}

const getFeaturedDiscountProductTestData: () => GetFeaturedProductListOutputType = () => {
    return {
        id: faker.random.uuid(),
        image: faker.random.image(),
        productName: faker.commerce.product(),
        productPrice: {
            standardPrice: faker.commerce.price(1.00, 1000.00, 2),
            discountPrice: faker.commerce.price(1.00, 1000.00, 2),
        },
        featured: {
            discount: true,
        },
        reviews: {
            averageScore: faker.random.number(5),
            totalReviews: faker.random.number(100),
        },
        releaseDate: faker.date.past(),
    };
}

const getFeaturedBrandNewProductTestData: () => GetFeaturedProductListOutputType = () => {
    return {
        id: faker.random.uuid(),
        image: faker.random.image(),
        productName: faker.commerce.product(),
        productPrice: {
            standardPrice: faker.commerce.price(1.00, 1000.00, 2),
        },
        featured: {
            brandNew: true,
        },
        reviews: {
            averageScore: faker.random.number(5),
            totalReviews: faker.random.number(100),
        },
    };
}
