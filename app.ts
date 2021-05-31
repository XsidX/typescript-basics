//tUPLES----arrays of fixed length


const person: {
    name: string
    age: number
    hobbies: string[]
    role: [number, string] //tuple
} = {   //typescript infers what the object type is defined as
    name: 'sid',
    age: 30,
    hobbies: ['sports', 'cooking'],
    role: [2, 'author']
}

person.role[1] = 10 //error caught
person.role.push('admin') //error not caught coz push is an exeption
person.role = [0, 'admin', 'something else'] //error caught

// let favouriteActivities: string[]

// favouriteActivities = ['sports', 1]

// let favouriteActivities: any[]

// favouriteActivities = ['sports', 1]

// console.log(person.name) //typescript infers what the object type is defined as

