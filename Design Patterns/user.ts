// Variable Injection & Dependancy Injection
    // 01. Parameterized constructor
    // 02. Setters and Getter


// Class
class User{
    // Data
    private username:string;
    private password:string;

    // Methods
    constructor(username:string, password:string){
        this.username = username;
        this.password = password;
    }

    // Setters
    setUsername(username:string){
        this.username = username;
    }
    setPassword(password:string){
        this.password = password;
    }

    // Getters
    getUsername(){
        return this.username
    }
    getPassword(){
        return this.password
    }

}

// Objects
let user: User = new User("Senjack", "pswd");
console.log(user.getUsername())
console.log(user.getPassword())

user.setUsername("Shafic")
user.setPassword("passwrd")

console.log(user.getUsername())
console.log(user.getPassword())