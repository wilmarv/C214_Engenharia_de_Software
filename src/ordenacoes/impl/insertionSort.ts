import Ordenar from "../ordenar";

class InsertionSort implements Ordenar {

    ordenaDados(dados: number[]): number[] {
        const length = dados.length;

        for (let i = 1; i < length; i++) {
            const current = dados[i];
            let j = i - 1;

            while (j >= 0 && dados[j] > current) {
                dados[j + 1] = dados[j];
                j--;
            }

            dados[j + 1] = current;
        }

        return dados;
    }
}
export default InsertionSort;