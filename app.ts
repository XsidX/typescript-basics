function add(n1: number, n2: number): number{ //let typescript infer the type if u have no reason to do this
    return n1 + n2
}

function printResult(num: number): void { //return type void
    console.log('Result: ' + num)
}

console.log(printResult(add(5, 12))) //returns undefined since printResult does not return anything

// let combineValues: Function
//combineValues = printResult //error not caught but is there
let combineValues: (a: number, b: number) => number

combineValues = add
// combineValues = 5 //error caught
combineValues = printResult //error caught


console.log(combineValues(8, 8))