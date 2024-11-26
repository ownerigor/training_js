function performCalculation(a, b, operator) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let result;
            switch (operator) {
                case "+":
                    result = a + b;
                    break;
                case "-":
                    result = a - b;
                    break;
                case "*":
                    result = a * b;
                    break;
                case "/":
                    if (b === 0) return reject("Erro: divisão por zero!");
                    result = a / b;
                    break;
                default:
                    return reject("Erro: operador inválido!");
            }
            resolve(result);
        }, 1000);
    });
}

function validateCalculation(result) {
    return new Promise((resolve, reject) => {
        if (result > 0) {
            resolve("Resultado válido: " + result);
        } else {
            reject("Erro: resultado não é positivo!");
        }
    });
}

performCalculation(10, 5, "+")
    .then(result => {
        console.log("Resultado do cálculo:", result);
        return validateCalculation(result);
    })
    .then(validationMessage => {
        console.log(validationMessage);
    })
    .catch(err => {
        console.error(err);
    });

performCalculation(10, 0, "/")
    .then(result => validateCalculation(result))
    .catch(err => console.error(err));

performCalculation(5, 10, "-")
    .then(result => validateCalculation(result))
    .catch(err => console.error(err));
