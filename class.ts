class Person {
    Name: string;
    private _partner: string;
    readonly fatherName: string;
    constructor(Name: string, partner:string, father: string) {
        this.Name = Name;
        this._partner = partner;
        this.fatherName = father;
    }
    getName(): string {
        return this.Name + '' + this._partner;
    }
}
const sam = new Person('Samuel', 'David', 'Sara');
console.log('name', sam.Name, sam.fatherName);
const samName: string = sam.getName();
sam.Name = 'Hasib';

