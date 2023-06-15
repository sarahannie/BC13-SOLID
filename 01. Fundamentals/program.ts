class User{
    // Fields
    username:string = 'johndoe'
    password:string =  'pswd'
}

abstract class Computer {

    // Fields
    private brand: string;
    private model: string;
    public user = new User();

    // Methods
    constructor(brand, model) {
      this.brand = brand;
      this.model = model;
    }
  
    input(data: any, device: string) {
        if (device == "keyboard"){
            console.log("---- Data input from Keyboard -------------------");
            console.log("Step 1: Listen to data from keyboard");
            console.log("Step 2: Pick data from keyboard");
            console.log("Step 3: Locate current cursor position");
            console.log("Step 4: Place data to the current cursor position");
            console.log("Step 5: Start listening to data from keyboard");
            console.log("");
        }
        else if (device == "mouse"){
            console.log("---- Data input from Mouse -------------------");
            console.log("Step 1: Listen to data from Mouse");
            console.log("");

        }
        else{}
    }
  
    process(data, operation, chip){
        if (chip == "Intel"){
            console.log("--------------------");
            console.log("Processing using Intel Chip..");
            console.log("");
        }        
        else if (chip == "AMD"){
            console.log("--------------------");
            console.log("Processing using AMD Chip..");
            console.log("");
        }        
        else if (chip == "Invidia"){
            console.log("--------------------");
            console.log("Processing using Invidia Chip..");
            console.log("");
        }
        else {}      
    }

    store(memory:string) {
        if(memory=="SSD"){
            console.log("storing data on SSD");
        }else{
            console.log("---- Storing data in internal memory -------------------");
            console.log("Step 1: Receive data to be stored");
            console.log("Step 2: Open internal memory where data is to be stored");
            console.log("Step 3: Prepare for data storage");
            console.log("Step 4: launch storage operation");
            console.log(
                "Step 5: Send back signal representing the state of the storage operation"
            );
            console.log("");    
        }
    }

    output() {
        console.log("---- Output Process -------------------");
        console.log("Step 1: Receive data to be output");
        console.log("Step 2: Open monitor where data is to be dispalyed");
        console.log("Step 3: Prepare for data output process");
        console.log("Step 4: launch output operation");
        console.log(
            "Step 5: Send back signal representing the state of the output operation"
        );
        console.log("");       
    }

}

class Desktop extends Computer{
    // Fields

    // Methods
}

class Laptop extends Computer{
    // Fields
    // Methods
    fold(){
        console.log("-----------Folding Process ----------")
        console.log("Step1: Folding")
        console.log("")
    }
}

class Walltop extends Computer{
    // Fields

    // Methods
    // Method Overriding
    input() {
        console.log("---- Input Using Screen Touch Technology -------------------");
        console.log("Step 1: Listen to data from Screen");
        console.log("Step 2: Pick data from Screen");
        console.log("Step 3: Locate current Tourch position");
        console.log("Step 4: Place data to the current Tourch position");
        console.log("Step 5: Start listening to data from Screen");
        console.log("");
      }
}


let computer:Computer;
    // can be a Desktop Computer
    computer = new Desktop("HP", "XP-X2");
    computer.input('cccgdnbhx','mouse');

    // can be a Laptop Computer
    computer = new Laptop("HP", "XP-X2");
    computer.input('cccgdnbhx','keyboard');

    // can be a walltop Computer
    computer = new Walltop("HP", "XP-X2");
    computer.process('s','s', "Invidia");
