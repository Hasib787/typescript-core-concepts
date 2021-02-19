"use strict";
class Person {
    constructor(Name, fatherName) {
        this.Name = Name;
        this._partner = Name;
        this.fatherName = fatherName;
    }
    getName() {
        return this.Name + '' + this._partner;
    }
}
const sam = new Person('Samuel', 'David');
console.log('name', sam.Name);
const samName = sam.getName();
sam.Name = 'Hasib';
