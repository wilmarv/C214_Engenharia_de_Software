import * as readline from 'readline';
import InsertionSort from './ordenacoes/impl/insertionSort';
import MergeSort from './ordenacoes/impl/mergeSort';
import SelectionSort from './ordenacoes/impl/selectionSort';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function getInput(): Promise<string> {
    return new Promise((resolve) => {
        rl.question('Digite um valor: ', (input) => {
            resolve(input);
        });
    });
}

main();

async function main() {

    const array = [];
    let op = 0;
    let valor = 0;

    console.log("=-=-=-=-=-Questão 1=-=-=-=-=-=-=-=");
    console.log("Entre com valores do array e finalize digitando 0: \n");

    do {
        const valorInserido = await getInput();
        valor = parseInt(valorInserido);

        if (parseInt(valorInserido) > 0)
            array.push(parseInt(valorInserido));

    } while (valor > 0)

    do {
        console.log("=-=-=-=-=Selecione o algoritimo-=-=-=-=-=-=-=-=");
        console.log("1_Insertion Sort");
        console.log("2_Merge Sort");
        console.log("3_Selection Sort");

        const operacaoSelecionada = await getInput();
        op = parseInt(operacaoSelecionada);

        console.log("Array inserido : ", array);
        switch (op) {
            case 1:
                const insertionSort = new InsertionSort();
                console.log("Array ordenado por insertion sort: ", insertionSort.ordenaDados([...array]));
                break;
            case 2:
                const mergeSort = new MergeSort();
                console.log("Array ordenado por insertion sort: ", mergeSort.ordenaDados([...array]));
                break;
            case 3:
                const selectionSort = new SelectionSort();
                console.log("Array ordenado por insertion sort: ", selectionSort.ordenaDados([...array]));
                break;
            default:
                break;
        }

    } while (op > 0)

    rl.close();
}