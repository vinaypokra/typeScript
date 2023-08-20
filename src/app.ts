let message: string;
// message = "vinay";

// console.log(message);

// interface User {
//     id: number,
//     name:string
// }
interface User2 {
    id: number,
    
}

// let userData: User;

// userData = {
//   id: 1,
//   name: "Vinay",
// };

// class UserAccount {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   getUser(user: User2): User2 {
//     return {
//       id: user.id,
//     } ;
//   }
// }

// const person = new UserAccount("Vinay", 20);
// let person1: User2 = person.getUser({
//   id: 1,
// });

// console.log({userData,person,person1});
// type holiday = "Yes Holiday" | "No Holiday";
// type weekDay = "Yes WeekDay";
// type dayState = "Holiday" | 'WeekDay';
// function typeOfday(val: dayState):holiday|dayState {
   
//     return val;
// // console.log(typeOfday("Holiday"))
// }

// const myArray: (number )[] = [1, 2, 3]; // Array of numbers

// // Accessing and modifying elements of the constant array
// console.log(myArray[0]); // Output: 1
//  // Modifying an element (allowed)
// console.log(myArray); // Output: [1, 4, 3]

type Operation = "+" | "-";
let greet: Function;
greet = (a: number, b: number, c:Operation): string|number => {
    
    if (c === '+') {
        return a+b
    }
    return "Only + and - Operation Allowed";
}

console.log(greet(2,4,"*"))
    



