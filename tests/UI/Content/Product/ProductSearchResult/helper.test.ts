import { generatePageNumList } from "../../../../../src/UI/Content/Product/ProductSearchResult/Hooks/Pagination/usePagination";

test("h.1.1: generatePageNumList should return empty array when totalCount = 0", () => {
    expect(generatePageNumList(0, 20, 0)).toStrictEqual([]);
})

test("h.1.2: generatePageNumList should return empty array when totalCount = 1", () => {
    expect(generatePageNumList(1, 20, 0)).toStrictEqual([]);
})

test("h.1.3: generatePageNumList should return empty array when totalCount <= limit", () => {
    expect(generatePageNumList(20, 20, 0)).toStrictEqual([]);
})

test("h.1.4: generatePageNumList should return [1,2] when limit < totalCount < limit * 2", () => {
    expect(generatePageNumList(21, 20, 0)).toStrictEqual([1,2]);
})

test("h.1.5: generatePageNumList should return [1,2,3,4,5] when offset = 0 and totalCount = 100", () => {
    expect(generatePageNumList(100, 20, 0)).toStrictEqual([1,2,3,4,5]);
})

test("h.1.6: generatePageNumList should return [1,2,3,4,5] when offset = 60 and totalCount = 100", () => {
    expect(generatePageNumList(100, 20, 60)).toStrictEqual([1,2,3,4,5]);
})

test("h.1.7: generatePageNumList should return [2,3,4,5,6] when offset = 80 and totalCount = 120", () => {
    expect(generatePageNumList(120, 20, 80)).toStrictEqual([2,3,4,5,6]);
})

test("h.1.8: generatePageNumList should return [5,6,7,8,9] when offset = 140 and totalCount = 200", () => {
    expect(generatePageNumList(200, 20, 140)).toStrictEqual([5,6,7,8,9]);
})

test("h.1.9: generatePageNumList should return [6,7,8,9,10] when offset = 160 and totalCount = 200", () => {
    expect(generatePageNumList(200, 20, 160)).toStrictEqual([6,7,8,9,10]);
})

test("h.1.10: generatePageNumList should return [6,7,8,9,10] when offset = 200 and totalCount = 200", () => {
    expect(generatePageNumList(200, 20, 200)).toStrictEqual([6,7,8,9,10]);
})

test("h.1.11: generatePageNumList should return [1,2,3,4,5] when offset = 0 and totalCount = 400", () => {
    expect(generatePageNumList(400, 20, 0)).toStrictEqual([1,2,3,4,5]);
})

test("h.1.12: generatePageNumList should return [1,2,3,4,5] when offset = 60 and totalCount = 400", () => {
    expect(generatePageNumList(400, 20, 60)).toStrictEqual([1,2,3,4,5]);
})

test("h.1.13: generatePageNumList should return [2,3,4,5,6] when offset = 80 and totalCount = 400", () => {
    expect(generatePageNumList(400, 20, 80)).toStrictEqual([2,3,4,5,6]);
})

test("h.1.14: generatePageNumList should return [15,16,17,18,19] when offset = 340 and totalCount = 400", () => {
    expect(generatePageNumList(400, 20, 340)).toStrictEqual([15,16,17,18,19]);
})

test("h.1.15: generatePageNumList should return 16,17,18,19,20 when offset = 360 and totalCount = 400", () => {
    expect(generatePageNumList(400, 20, 360)).toStrictEqual([16,17,18,19,20]);
})

test("h.1.16: generatePageNumList should return [16,17,18,19,20] when offset = 400 and totalCount = 400", () => {
    expect(generatePageNumList(400, 20, 400)).toStrictEqual([16,17,18,19,20]);
})
