export const calc = (a, b, op) => {
    return op ? (new Function('oneNum', 'twoNum', `return oneNum ${op} twoNum`))(a, b) : 0;
}

export const calculate = (vals = [], opts=[]) => {
    let values = [...vals],
        val = values.shift();
    return values.reduce((result, val, i) =>
        calc(result, val, opts[i]), val);
}