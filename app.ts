


// enum Role { ADMIN, READ_ONLY, AUTHOR }//or
enum Role { ADMIN = 5, READ_ONLY, AUTHOR }

const person = {   //typescript infers what the object type is defined as
    name: 'sid',
    age: 30,
    hobbies: ['sports', 'cooking'],
    role: Role.ADMIN
}

if (person.role === Role.ADMIN){
    console.log('is Admin')
}
