// Função para somar dois números
export function somar(num1: number, num2: number) {
    return num1 + num2;
}

// Função para subtrair dois números
export function subtrair(num1: number, num2: number) {
    return num1 - num2;
}

// Função para multiplicar dois números
export function multiplicar(num1: number, num2: number) {
    return num1 * num2;
}

// Função para dividir dois números
export function dividir(num1: number, num2: number) {
    // Verifica se o divisor é igual a zero
    if (num2 === 0) {
        return "Não é possível dividir por zero";
    } else {
        return num1 / num2;
    }
}
