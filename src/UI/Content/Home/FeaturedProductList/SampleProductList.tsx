const SampleImageSrc = require("../../../../Images/sample_image.jpg");

export declare type SampleProductListType = {
    id: string,
    image: string,
    productName: string,
    productPrice: number,
}

export const SampleProductList: SampleProductListType[] = [
    {
        id: "1",
        image: SampleImageSrc,
        productName: "product name 1",
        productPrice: 4000.00,
    },
    {
        id: "2",
        image: SampleImageSrc,
        productName: "product name 2",
        productPrice: 4000.00,
    },
    {
        id: "3",
        image: SampleImageSrc,
        productName: "product name 3",
        productPrice: 14000.00,
    },
    {
        id: "4",
        image: SampleImageSrc,
        productName: "product name 4",
        productPrice: 4.00,
    },
    {
        id: "5",
        image: SampleImageSrc,
        productName: "product name 5",
        productPrice: 114000.00,
    },
    {
        id: "6",
        image: SampleImageSrc,
        productName: "product name 6",
        productPrice: 40.00,
    },
    {
        id: "7",
        image: SampleImageSrc,
        productName: "product name 7",
        productPrice: 400.00,
    },
]