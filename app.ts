function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code}
}// this functions returns never, meaning not even undefined, it crashes the script
// an infinite loop is another function that will never return anything
generateError('An error occured', 500)