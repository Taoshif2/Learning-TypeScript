let users: object[]; // Array of objects
/* 
users = [
    { name: 'Gazi', age: 21 },
    { name: 'Anis', age: 30 }
];
*/
users = [];

let user1: { name: string, age: number }; // Object with specific properties
let user2: { name: string, age: number }; // Object with specific properties
//console.log(users);

users.push({ name: 'Gazi', age: 21 });
users.push({ name: 'Anis', age: 31 });

//console.log(users);
for(const key in users) {
    console.log(users[key]);
    //console.log(users[key]["name"]); // only prints all the names
    //console.log(users[key]["age"]); // only prints all the ages
}

//let user1: { name: string, age?: number }; // Object with optional (age?) properties
//user1 = { name: 'Gazi', age: 21 };
//console.log(user1);




















