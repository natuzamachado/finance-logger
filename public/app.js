import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
const form = document.querySelector('.new-item-form');
//inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
//tuples
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const values = [toFrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
//const addUID = (obj: object) => {
//   let uid = Math.floor(Math.random() * 100);
//  return {...obj,uid};
//}
//using generics
//const addUID = <T extends object >(obj: T) => {
// let uid = Math.floor(Math.random() * 100);
//return {...obj,uid};
//}
//const addUID2 = <T extends {name: string}>(obj: T) => {
//  let uid = Math.floor(Math.random() * 100);
//return { ...obj, uid };
//}
//let obj1 = addUID({name: 'nah', age: 34})
//let obj2 = addUID2({name:'cah', age:34})
//console.log(obj1, obj2)
//interface using generics
//interface Resource<T> {
//  uid: number;
//resourceType: ResourceType;
//data: T;
//}
//enums
//enum ResourceType {BOOK, AUTHOR, FILME, DIRECTOR, PERSON}
//const docThree: Resource<object> = {
//   ...addUID(obj1),
//resourceType: ResourceType.AUTHOR,
//data: {type: 'client'}
//}
//tuples, a way to define an array with fixed types on each index.
