
function performUniqueOperation() {
    const num1 = parseFloat(document.getElementById('input1').value);
    const num2 = parseFloat(document.getElementById('input2').value);
    const operator = document.getElementById('uniqueOperator').value;

    let result;
    switch (operator) {
        case 'exponentiation':
            result = `Exponentiation: ${num1}^${num2} = ${Math.pow(num1, num2)}`;
            break;
        case 'increment':
            result = `Incremented Value: ${num1 + 1}`;
            break;
        case 'decrement':
            result = `Decremented Value: ${num1 - 1}`;
            break;
        case 'ternary':
            result = num1 > num2 ? `${num1} is greater than ${num2}` : `${num2} is greater or equal to ${num1}`;
            break;
        case 'logicalNullish':
            result = num1 ?? 'Value is null or undefined';
            break;
        default:
            result = 'Invalid operator selected';
    }

    document.getElementById('uniqueResult').textContent = `Result: ${result}`;
}

// Dynamically update the result section
function resetResult() {
    document.getElementById('uniqueResult').textContent = '';
}
