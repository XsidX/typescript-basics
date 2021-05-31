let userInput: unknown
let userName: string

userInput = 5
userInput = 'Max'

userName = userInput // error caught 'unknown is not assignable to string'

if(typeof userInput === 'string'){
    userName = userInput
}