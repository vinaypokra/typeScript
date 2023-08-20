import { Details } from './Types/interfaces.js';


const form = document.querySelector("form")!;
const name = document.querySelector("#name")! as HTMLInputElement;
const age = document.querySelector("#age")! as HTMLInputElement;

form.addEventListener("submit", (e:Event) => {
    e.preventDefault();
    console.log({
       name: name.value,
       age: age.valueAsNumber,
    });
})


class Person implements Details {

    constructor(private id: number, public name: string, public age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    showInfo(me:string="MR"): string {
        return `Name ${me} ${this.name} id-> ${this.id} Age ${this.age}`;
    }
}

let person1 = new Person(1,"Vinay",20);
let person2 = new Person(1, "Vinay", 20);

let arr:Person[] = [person1, person2];
console.log(arr,person1.showInfo());