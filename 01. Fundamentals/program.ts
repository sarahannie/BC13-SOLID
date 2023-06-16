class User{
    // Fields
    username:string = 'johndoe'
    password:string =  'pswd'
}

// Input Devices
interface InputDevice{
    input(data:any):void
}

class KeyBoard implements InputDevice{
    input(data){
        console.log("---- Data input from Keyboard -------------------");
        console.log("Step 1: Listen to data from keyboard");
        console.log("Step 2: Pick data from keyboard");
        console.log("Step 3: Locate current cursor position");
        console.log("Step 4: Place data to the current cursor position");
        console.log("Step 5: Start listening to data from keyboard");
        console.log("");

    }
}

class Mouse implements InputDevice{
    input(data){
        console.log("---- Data input from Mouse -------------------");
        console.log("Step 1: Listen to data from Mouse");
        console.log("");        
    }
}


// Computer Classes
abstract class Computer {

    // Fields
    private brand: string;
    private model: string;
    private user = new User();
    private inputDevice:InputDevice;

    // Methods
    constructor(brand, model, inputDevice:InputDevice) {
      this.brand = brand;
      this.model = model;
      this.inputDevice = inputDevice;
    }
  
    input(data: any) {
        this.inputDevice.input(data)
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

    output(data, device) {
        if (device == "monitor"){
            console.log("---- Data input from Monitor -------------------");
            console.log("");
        }
        else if (device == "projector"){
            console.log("---- Data input from Projector -------------------");
            console.log("");

        }
        else{}
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
 
}


// Objects
let computer:Computer;
    // can be a Desktop Computer
    computer = new Desktop("HP", "XP-X2", new Mouse());
    computer.input('cccgdnbhx');

    // can be a Laptop Computer
    computer = new Laptop("HP", "XP-X2", new KeyBoard());
    computer.input('cccgdnbhx');

    // can be a walltop Computer
    computer = new Walltop("HP", "XP-X2", new KeyBoard());
    computer.input('cccgdnbhx');

