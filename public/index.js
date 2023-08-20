const form = document.querySelector("form");
const name = document.querySelector("#name");
const age = document.querySelector("#age");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log({
        name: name.value,
        age: age.valueAsNumber,
    });
});
class Person {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.id = id;
        this.name = name;
        this.age = age;
    }
    showInfo(me = "MR") {
        return `Name ${me} ${this.name} id-> ${this.id} Age ${this.age}`;
    }
}
let person1 = new Person(1, "Vinay", 20);
let person2 = new Person(1, "Vinay", 20);
let arr = [person1, person2];
console.log(arr, person1.showInfo());
export {};
