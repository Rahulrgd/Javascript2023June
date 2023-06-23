import { firstName as fname} from "./utils/fname.js";
import { age } from "./utils/age.js";
import Person, {Person2} from "./utils/Person.js";

console.log("connected file properly");

const person = new Person("Rahul", "Gupta", 23);
person.info();
console.log(person);
// console.log(fname, age);