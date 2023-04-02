import { somar, dividir, multiplicar, subtrair } from "../src";

describe("Testes com a função de soma", () => {

    test('Teste de soma com sucesso', () => {
        expect(somar(2, 3)).toEqual(5);
    });

    test('Teste de soma com falha', () => {
        expect(somar(2, 3) !== 5).toBeFalsy();
    });
});
describe("Testes com a função de subtração", () => {

    test('Teste de subtração com sucesso', () => {
        expect(subtrair(5, 3)).toEqual(2);
    });

    test('Teste de subtração com falha', () => {
        expect(subtrair(5, 3) !== 2).toBeFalsy();
    });
});
describe("Testes com a função de multiplicacao", () => {

    test('Teste de multiplicação com sucesso', () => {
        expect(multiplicar(2, 3)).toEqual(6);
    });

    test('Teste de multiplicação com falha', () => {
        expect(multiplicar(2, 3) !== 6).toBeFalsy();
    });

});
describe("Testes com a função de divisão", () => {

    test('Teste de divisão com sucesso', () => {

        expect(dividir(6, 2)).toEqual(3);
    });

    test('Teste de divisão com falha', () => {
        expect(dividir(10, 0)).toBe("Não é possível dividir por zero");
    });
});