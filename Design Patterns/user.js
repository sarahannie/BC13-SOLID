// Variable Injection & Dependancy Injection
// 01. Parameterized constructor
// 02. Setters and Getter
// Class
var User = /** @class */ (function () {
    // Methods
    function User(username, password) {
        this.username = username;
        this.password = password;
    }
    // Setters
    User.prototype.setUsername = function (username) {
        this.username = username;
    };
    User.prototype.setPassword = function (password) {
        this.password = password;
    };
    // Getters
    User.prototype.getUsername = function () {
        return this.username;
    };
    User.prototype.getPassword = function () {
        return this.password;
    };
    return User;
}());
// Objects
var user = new User("Senjack", "pswd");
console.log(user.getUsername());
console.log(user.getPassword());
user.setUsername("Shafic");
user.setPassword("passwrd");
console.log(user.getUsername());
console.log(user.getPassword());
