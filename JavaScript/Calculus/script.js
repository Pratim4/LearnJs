function derivative(firstTerm, firstTermPower, secondTerm, SecondTermPower, ThirdTerm, ThirdTermPower, fourthTerm, forthTermPower) {
    if (typeof firstTerm !== 'number' || typeof firstTermPower !== 'number' || typeof secondTerm !== 'number' || typeof SecondTermPower !== 'number' || typeof ThirdTerm !== 'number' || typeof ThirdTermPower !== 'number' || typeof fourthTerm !== 'number' || typeof forthTermPower !== 'number') {
        return "Invalid input";
    }

    let firstTermDerivative = firstTerm * firstTermPower;
    let secondTermDerivative = secondTerm * SecondTermPower;
    let thirdTermDerivative = ThirdTerm * ThirdTermPower;
    let fourthTermDerivative = fourthTerm * forthTermPower;

    let result = "";
    if (firstTermDerivative !== 0) {
        result = result + firstTermDerivative + "x^" + (firstTermPower - 1) + " ";
    }
    if (secondTermDerivative !== 0) {
        if (result) {
            result = result + "+ ";
        }
        result = result + secondTermDerivative + "x^" + (SecondTermPower - 1) + " ";
    }
    if (thirdTermDerivative !== 0) {
        if (result) {
            result = result + "+ ";
        }
        result = result + thirdTermDerivative + "x^" + (ThirdTermPower - 1) + " ";
    }
    if (fourthTermDerivative !== 0) {
        if (result) {
            result = result + "+ ";
        }
        result = result + fourthTermDerivative + "x^" + (forthTermPower - 1) + " ";
    }

    return result;
}


console.log(derivative(3, 2, 2, 1, 5, 0, 0, 0));

function displayPolynomial(firstTerm, firstTermPower, secondTerm, SecondTermPower, ThirdTerm, ThirdTermPower, fourthTerm, forthTermPower) {
    let result = "";

    if (firstTerm !== 0) {
        result += firstTerm + "x^" + firstTermPower + " ";
    }
    if (secondTerm !== 0) {
        if (result) result += "+ ";
        result += secondTerm + "x^" + SecondTermPower + " ";
    }
    if (ThirdTerm !== 0) {
        if (result) result += "+ ";
        result += ThirdTerm + "x^" + ThirdTermPower + " ";
    }
    if (fourthTerm !== 0) {
        if (result) result += "+ ";
        result += fourthTerm + "x^" + forthTermPower + " ";
    }

    return result;
}

function productRule(
    f1, f1p, f2, f2p, f3, f3p, f4, f4p,
    g1, g1p, g2, g2p, g3, g3p, g4, g4p
) {
    let fPrime = derivative(f1, f1p, f2, f2p, f3, f3p, f4, f4p);

    let gPrime = derivative(g1, g1p, g2, g2p, g3, g3p, g4, g4p);


    let f = displayPolynomial(f1, f1p, f2, f2p, f3, f3p, f4, f4p);
    let g = displayPolynomial(g1, g1p, g2, g2p, g3, g3p, g4, g4p);


    let result = "(" + fPrime + ") * (" + g + ") + (" + f + ") * (" + gPrime + ")";

    return result;
}


let result = productRule(
    3, 2, 2, 1, 5, 0, 0, 0,
    4, 3, 1, 1, 0, 0, 0, 0
);
console.log(result);





function integration(firstTerm, firstTermPower, secondTerm, SecondTermPower, ThirdTerm, ThirdTermPower, fourthTerm, forthTermPower) {
    if (typeof firstTerm !== 'number' || typeof firstTermPower !== 'number' || typeof secondTerm !== 'number' || typeof SecondTermPower !== 'number' || typeof ThirdTerm !== 'number' || typeof ThirdTermPower !== 'number' || typeof fourthTerm !== 'number' || typeof forthTermPower !== 'number') {
        return "Invalid input";
    }

    let firstTermIntegral = firstTerm / (firstTermPower + 1);
    let secondTermIntegral = secondTerm / (SecondTermPower + 1);
    let thirdTermIntegral = ThirdTerm / (ThirdTermPower + 1);
    let fourthTermIntegral = fourthTerm / (forthTermPower + 1);

    let result = "";
    if (firstTermIntegral !== 0) {
        result = result + firstTermIntegral + "x^" + (firstTermPower + 1) + " ";
    }
    if (secondTermIntegral !== 0) {
        if (result) {
            result = result + "+ ";
        }
        result = result + secondTermIntegral + "x^" + (SecondTermPower + 1) + " ";
    }
    if (thirdTermIntegral !== 0) {
        if (result) {
            result = result + "+ ";
        }
        result = result + thirdTermIntegral + "x^" + (ThirdTermPower + 1) + " ";
    }
    if (fourthTermIntegral !== 0) {
        if (result) {
            result = result + "+ ";
        }
        result = result + fourthTermIntegral + "x^" + (forthTermPower + 1) + " + C";
    }

    return result;
}





