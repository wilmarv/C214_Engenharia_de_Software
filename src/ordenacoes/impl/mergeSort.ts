import Ordenar from "../ordenar";

class MergeSort implements Ordenar {

    public ordenaDados(dados: number[]): number[] {
        if (dados.length <= 1) {
            return dados;
        }

        const mid = Math.floor(dados.length / 2);
        const left = dados.slice(0, mid);
        const right = dados.slice(mid);

        return this.merge(this.ordenaDados(left), this.ordenaDados(right));
    }

    private merge(left: number[], right: number[]): number[] {
        const result = [];
        let i = 0;
        let j = 0;

        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                result.push(left[i]);
                i++;
            } else {
                result.push(right[j]);
                j++;
            }
        }
        return result.concat(left.slice(i)).concat(right.slice(j));
    }
}
export default MergeSort;