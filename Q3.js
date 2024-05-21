// What is the difference between Call, Apply and Bind ?

// Call Method

// Call is a fucntion that helps you to change the context of the invoking function. I helps you
// to replace the value if(this) inside a function with whatever value you want.

function setUsername(username) {
    this.username = username;
}
function createUser(username, email, password) {
    setUsername.call(this, username);
    this.email = email;
    this.password = password;
}
const user = new createUser("Shankar", "Shankar@123", "Shankar568");
console.log(user);

// Function Borrowing
let name1 = {
    name: "Shankar",
    last: "kumar",
    printFirstName: function () {
        console.log(`my first name is ${this.name} and last name is ${this.last}`);
    }
}

let user1 = {
    name: "Rahul",
    last: "Jamwal"
}
name1.printFirstName.call(user1)

console.log('.........................................................................');
// Apply Method
// Apply method is similar to call method. This is only diffrence is that apply you can pass an array as a argument host

function subtract(name) {
    this.name = name
}
function log(name, username, password) {
    subtract.apply(this, [name]);
    // this.username = username;
    // this.password = password;
}

const user2 = new log(["rashid", "rashid@123", "rashid568"], "Shankar", "Shankar568");
console.log(user2);

let name2 = {
    name: "Shankar",
    last: "kumar",
}
const func = function () {
    console.log(`my first name is ${this.name} and last name is ${this.last}`);
}
let user3 = {
    name: "Rahul",
    last: "Jamwal"
}
func.apply(user3, ["Shankar", "Shankar@123"])
console.log('.........................................................................');
// Bind Method
// Bind Method is used to create a new function with the specified "this" value.It doesn't call the function immediately

let object = {
    name: "Shankar",
    last: "kumar",
    printFirstName: function () {
        console.log(`my first name is ${this.name} and last name is ${this.last}`);
    }
}
let object1 = {
    name: "Sahil",
    last: "kumar",
}
const func1 = object.printFirstName.bind(object1)
console.log(func1());
