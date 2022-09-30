const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))

const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a dolares
    let valueInYen = valueInDollar * 144.73;
    // retornamos el valor
    return Math.ceil(valueInYen);
}
const fromYenToPound = function(valueInYen){
    // convertimos el valor a dolares
    let valueInPound = valueInYen * 0.0062;
    // retornamos el valor
    return Math.floor(valueInPound);
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };