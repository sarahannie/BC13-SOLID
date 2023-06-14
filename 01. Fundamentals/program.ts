abstract class Computer {

    // Fields
    private brand: string;
    private model: string;

    // Methods
    constructor(brand, model) {
      this.brand = brand;
      this.model = model;
    }
  
    input() {
      console.log("---- Input Process -------------------");
      console.log("Step 1: Listen to data from keyboard");
      console.log("Step 2: Pick data from keyboard");
      console.log("Step 3: Locate current cursor position");
      console.log("Step 4: Place data to the current cursor position");
      console.log("Step 5: Start listening to data from keyboard");
      console.log("");
    }
  
    abstract process(data, operation):void

    store() {
        console.log("---- Storage Process -------------------");
        console.log("Step 1: Receive data to be stored");
        console.log("Step 2: Open internal memory where data is to be stored");
        console.log("Step 3: Prepare for data storage");
        console.log("Step 4: launch storage operation");
        console.log(
            "Step 5: Send back signal representing the state of the storage operation"
        );
        console.log("");        
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
    process(data: any, operation: any): void {
        console.log("---- Processing in a Desktop Computer -------------------");
        console.log("Step 1: Receive data to be proceesed");
        console.log("Step 2: Receive operation to carry out on the data received");
        console.log("Step 3: Prepare for operation");
        console.log("Step 4: launch operation");
        console.log(
            "Step 5: Send back signal representing the state of the operation"
        );
        console.log("");        
    }
}

class Laptop extends Computer{
    // Fields
    // Methods
    process(data: any, operation: any): void {
        console.log("---- Processing in a Laptop Computer -------------------");
        console.log("Step 1: Receive data to be proceesed");
        console.log("Step 2: Receive operation to carry out on the data received");
        console.log("Step 3: Prepare for operation");
        console.log("Step 4: launch operation");
        console.log(
            "Step 5: Send back signal representing the state of the operation"
        );
        console.log("");
    }

    fold(){
        console.log("-----------Folding Process ----------")
        console.log("Step1: Folding")
        console.log("")
    }
}


// let computer = new Computer("HP", "XP-X");
// computer.input()

let desktop:Desktop = new Desktop("HP", "XP-X2");
desktop.process({}, "op")

let laptop:Laptop = new Laptop("HP", "XP-X2");
laptop.process({}, "op")

// const macBook = new Laptop("Apple", "MacBook Pro");
// macBook.input();
// macBook.process("1234567", "Storage");
// macBook.store();
// macBook.output();
// macBook.fold();
