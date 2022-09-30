let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

let fromEuroToDollar = function(euroValue){
	return euroValue * 1.20;
}
let fromDollarToYen = function(yenValue){
	return yenValue * 144,73;
}
let fromYenToPound = function(poundValue){
    return poundValue * 0,0062;
}