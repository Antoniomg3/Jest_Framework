const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}
let fromDollarToYen = function(yenValue){
	return yenValue * 144.73;
}
let fromYenToPound = function(poundValue){
    return poundValue * 0.0062;
}

module.exports = { sum, fromEuroToDollar };