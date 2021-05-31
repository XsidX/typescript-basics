


// enum Role { ADMIN, READ_ONLY, AUTHOR }//or
enum Role { ADMIN = 5, READ_ONLY, AUTHOR }

const person: {
    name: string,
    age: number,
    hobbies: any,
    
} = {   //typescript infers what the object type is defined as
    name: 'sid',
    age: 30,
    hobbies: ['sports', 'cooking'],
    
}

person.hobbies = 2 // any type is allowed avoid whenever possible
