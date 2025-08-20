// CALCULADORA
function calcular(op) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let resultado;

    switch(op) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            resultado = num2 !==0 ? num1 / num2 : 'Erro: divisão por 0';
            break;
    }

    document.getElementById('resultado').textContent = resultado;
}