import SelectionSort from "../src/ordenacoes/impl/selectionSort";

describe(" Ordenar dados por selection sort", () => {

    const selectionSort = new SelectionSort();

    test("Retornar um array vazio", () => {
        const arrayTest: Array<number> = [];
        expect(selectionSort.ordenaDados(arrayTest)).toEqual([]);
    });

    test("Retornar um array com valores asc", () => {
        const expectedArray = [1, 2, 4, 5, 7];
        const resultArray = selectionSort.ordenaDados([4, 2, 7, 1, 5]);

        expect(resultArray).toEqual(expectedArray);
    });

    test("Retornar um array com apenas 1 elemento", () => {
        const expectedArray = [2];
        const resultArray = selectionSort.ordenaDados([2]);

        expect(resultArray).toEqual(expectedArray);
    });
});