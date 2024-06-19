let person = {
    firstName : "naveen",
    lastName : "v",
    // Methods in objects:
    fullName : function (){
        return this.firstName +" "+this.lastName
    }
};
console.log(person.fullName());