// //tUPLES----arrays of fixed length
// person.role[1] = 10 //error caught
// person.role.push('admin') //error not caught coz push is an exeption
// person.role = [0, 'admin', 'something else'] //error caught
// // let favouriteActivities: string[]
// // favouriteActivities = ['sports', 1]
// // let favouriteActivities: any[]
// // favouriteActivities = ['sports', 1]
// // console.log(person.name) //typescript infers what the object type is defined as
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["RAED_ONLY"] = 1] = "RAED_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'sid',
    age: 30,
    hobbies: ['sports', 'cooking'],
    role: Role.ADMIN
};
if (person.role === Role.ADMIN) {
    console.log('is Admin');
}
