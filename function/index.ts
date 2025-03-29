/* Basic Function in TypeScript:

function add(a: number, b: number): number {
    return a + b;
}
const result: number = add(5, 3); // 'result' will be 8
*/

//function signature
let userInfo1: () => void;
let userInfo2: (name: string) => void;
let userInfo3: (name: string, age: number) => string;

userInfo1 = () => {
    console.log("Gazi Taoshif");
};
userInfo2 = (name: string) => {
    console.log(`Hello ${name}`);
};
userInfo3 = (name: string, age: number) => {
    return `Hello ${name}, You are ${age} years old`;
};

userInfo1();
userInfo2("Gazi");
//userInfo3("Taoshif", 21);
console.log(userInfo3("Taoshif", 21));