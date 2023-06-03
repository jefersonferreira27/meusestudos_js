// Conversor de medidas

// Declaração de variáveis
let metros;
let unidadeDeMedida;
let resultado;

// Inserção dos dados
metros = parseFloat(prompt("Digite um valor em metros:"));
unidadeDeMedida = prompt(`Escolha a unidade de medida para a conversão:
- milímetro(mm)
- centímetro(cm)
- decímetro(dm)
- decâmetro(dam)
- hectômetro(hm)
- quilômetro(km)
`)

// Lógica e exibição da conversão
switch (unidadeDeMedida) {
    case "mm":
        resultado = metros * 1000;
        alert(`A conversão de ${metros} para ${unidadeDeMedida} foi: ${resultado} ${unidadeDeMedida}`)
        break;

    case "cm":
        resultado = metros * 100;
        alert(`A conversão de ${metros }metros para ${unidadeDeMedida} foi: ${resultado} ${unidadeDeMedida}`)
        break;

    case "dm":
        resultado = metros * 10;
        alert(`A conversão de ${metros} metros para ${unidadeDeMedida} foi: ${resultado} ${unidadeDeMedida}`)
        break

    case "dam":
        resultado = metros / 10;
        alert(`A conversão de ${metros} metros para ${unidadeDeMedida} foi: ${resultado} ${unidadeDeMedida}`)
        break

    case "hm":
        resultado = metros / 100;
        alert(`A conversão de ${metros} metros para ${unidadeDeMedida} foi: ${resultado} ${unidadeDeMedida}`)
        break

    case "km":
        resultado = metros / 1000;
        alert(`A conversão de ${metros} para ${unidadeDeMedida} foi: ${resultado} ${unidadeDeMedida}`)
        break;

    default:
        alert("Escolha uma opção válida de conversão!")
}

