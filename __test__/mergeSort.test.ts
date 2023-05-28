import MergeSort from "../src/ordenacoes/impl/mergeSort";

describe(" Ordenar dados por merge sort", () => {

    const mergeSort = new MergeSort();

    test("Retornar um array vazio", () => {
        const arrayTest: Array<number> = [];
        expect(mergeSort.ordenaDados(arrayTest)).toEqual([]);
    });

    test("Retornar um array com valores asc", () => {
        const expectedArray = [1, 2, 4, 5, 7];
        const resultArray = mergeSort.ordenaDados([4, 2, 7, 1, 5]);

        expect(resultArray).toEqual(expectedArray);
    });

    test("Retornar um array com apenas 1 elemento", () => {
        const expectedArray = [2];
        const resultArray = mergeSort.ordenaDados([2]);

        expect(resultArray).toEqual(expectedArray);
    });
});