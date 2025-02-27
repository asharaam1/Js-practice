//todo Class Task (21-02-2025)
//object ke andar costructor function

const user = {
    name: function () {
        alert('hello asha')
    }
}
// console.log(user.name());
// user.name()



const user2 = {
    name: () => {
        alert('hello aizaz')
    }
}
// user2.name()



//! constructor function
function Employee(name, city, number,) {
    this.name = name,
    this.city = city,
    this.number = number,
    this.role = function () {
            console.log(this.name + " is working in" + this.city + " as MERN Stack Developer.");
        }
}

let oneEmployee = new Employee("ali", "karachi", 92333458);

console.log(oneEmployee.name);
console.log(oneEmployee.number);
oneEmployee.role()



//todo Class task