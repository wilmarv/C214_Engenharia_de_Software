import Ordenar from "../ordenar";

class SelectionSort implements Ordenar {

    ordenaDados(dados: number[]): number[] {
        const length = dados.length;

        for (let i = 0; i < length - 1; i++) {
            let minIndex = i;

            for (let j = i + 1; j < length; j++)
                if (dados[j] < dados[minIndex]) minIndex = j;

            if (minIndex !== i)
                [dados[i], dados[minIndex]] = [dados[minIndex], dados[i]];
        }

        return dados;
    }
}
export default SelectionSort;