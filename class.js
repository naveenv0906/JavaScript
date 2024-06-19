class Person{
    constructor (name,age){
        this.name=name;
        this.age=age;
    }

    sayHello(){
        return `hello ${this.name}`
    }
}

let person1=new Person("naveen",21);
console.log(person1.sayHello())