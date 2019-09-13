import '@testing-library/jest-dom/extend-expect';
import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { getFeaturedProductListTestData } from './FeaturedProductListTestData';


test("fpl.1.1: work?", () => {
    console.log(getFeaturedProductListTestData());
});



