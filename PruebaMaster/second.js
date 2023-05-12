// this function calculates the sine given three input parameters

function sinCalculate(firstParameter, secondParameter, thirdParameter) {
    let sumResult = firstParameter + secondParameter;
    let multResult = sumResult * thirdParameter;
    
    let sinResult = Math.sin(multResult);

    return sinResult;
}

testFunction =  sinCalculate(6,6,65);
console.log(testFunction);
