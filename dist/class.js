"use strict";
class Person {
    constructor(Name, partner, father) {
        this.Name = Name;
        this._partner = partner;
        this.fatherName = father;
    }
    getName() {
        return this.Name + '' + this._partner;
    }
}
const sam = new Person('Samuel', 'David', 'Sara');
console.log('name', sam.Name, sam.fatherName);
const samName = sam.getName();
sam.Name = 'Hasib';
