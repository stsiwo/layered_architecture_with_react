import { GetCategoryListOutputType } from "../../../../../src/Application/ProductServices/GetCategoryList/GetCategoryListOutputType";
import * as faker from 'faker';

export const getCategoryListTestData: () => GetCategoryListOutputType[] = () => {

    const list = []; 

    for (var i = 0; i < 5; i++) {
        list.push({
            id: faker.random.uuid(),
            name: faker.random.words(20),
            image: faker.image.abstract(),
        } as GetCategoryListOutputType);
    }

    return list;    
}

