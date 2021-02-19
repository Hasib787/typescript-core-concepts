class Person {
    Name: string;
    private _partner: string;
    readonly fatherName: string;
    constructor(Name: string, fatherName: string) {
        this.Name = Name;
        this._partner = Name;
        this.fatherName = fatherName;
    }
    getName(): string {
        return this.Name + '' + this._partner;
    }
}
const sam = new Person('Samuel', 'David');
console.log('name', sam.Name,);
const samName: string = sam.getName();
sam.Name = 'Hasib';

