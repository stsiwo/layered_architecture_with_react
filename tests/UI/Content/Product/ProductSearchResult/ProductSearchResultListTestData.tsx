import { GetProductSearchResultListOutputType, ProductSearchResultListType, FilterListType, FilterItemType } from "../../../../../src/Application/ProductServices/GetProductSearchResultList/GetProductSearchResultListOutputType";
import * as faker from 'faker';

export const getProductSearchResultListTestData: () => GetProductSearchResultListOutputType = () => {

    const productList = []; 
    const filterList = [];

    for (var i = 0; i < 30; i++) {

        var product: ProductSearchResultListType;

        if (i % 4 === 0) product = getBestSellerProductTestData();
        if (i % 4 === 1) product = getBrandNewProductTestData();
        if (i % 4 === 2) product = getDiscountProductTestData();
        if (i % 4 === 3) product = getStandardProductTestData();

        productList.push(product as ProductSearchResultListType);
    }

    for (var i = 0; i < 5; i++) {
        filterList.push({
            id: faker.random.uuid(),
            name: faker.name.title(),
            items: getFilterItem(),
        } as FilterListType);
    }
    return { 
        products: productList,
        filters: filterList,
        totalCount: 400,
    } as GetProductSearchResultListOutputType;    
}

const getBestSellerProductTestData: () => ProductSearchResultListType = () => {
    return {
        id: faker.random.uuid(),
        image: faker.image.image(), 
        name: faker.random.words(10),
        price: {
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

const getDiscountProductTestData: () => ProductSearchResultListType = () => {
    return {
        id: faker.random.uuid(),
        image: faker.image.image(), 
        name: faker.commerce.product(),
        price: {
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

const getBrandNewProductTestData: () => ProductSearchResultListType = () => {
    return {
        id: faker.random.uuid(),
        image: faker.image.image(), 
        name: faker.commerce.product(),
        price: {
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

const getStandardProductTestData: () => ProductSearchResultListType = () => {
    return {
        id: faker.random.uuid(),
        image: faker.image.image(), 
        name: faker.commerce.product(),
        price: {
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

const getFilterItem: () => FilterItemType[] = () => {

    const filterItem = [];

    for (var i = 0; i < 5; i++) {
        filterItem.push({
            id: faker.random.uuid(),
            name: "check box item name",
        });
    }

    return filterItem;
}
