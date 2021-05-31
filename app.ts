function add(n1: number, n2: number): number{ //let typescript infer the type if u have no reason to do this
    return n1 + n2
}

function printResult(num: number): void { //return type void
    console.log('Result: ' + num)
}

console.log(printResult(add(5, 12))) //returns undefined since printResult does not return anything

