class User {
    // Fields
    username: string = 'johndoe'
    password: string = 'pswd'
}

// Input Devices
interface InputDevice {
    input(data: any): void
}

class KeyBoard implements InputDevice {
    input(data) {
        console.log("---- Data input from Keyboard -------------------");
        console.log("Step 1: Listen to data from keyboard");
        console.log("Step 2: Pick data from keyboard");
        console.log("Step 3: Locate current cursor position");
        console.log("Step 4: Place data to the current cursor position");
        console.log("Step 5: Start listening to data from keyboard");
        console.log("");

    }
}

class Mouse implements InputDevice {
    input(data) {
        console.log("---- Data input from Mouse -------------------");
        console.log("Step 1: Listen to data from Mouse");
        console.log("");
    }
}

//Proccessor Chips
interface ProccessorChip {
    process(data: any): void
}

class Intel implements ProccessorChip {
    process(data) {
        console.log("--------------------");
        console.log("Processing using Intel Chip..");
        console.log("");
    }
}

class AMD implements ProccessorChip {
    process(data) {
        console.log("--------------------");
        console.log("Processing using AMD Chip..");
        console.log("");
    }
}

class Nvidia implements ProccessorChip {
    process(data) {
        console.log("--------------------");
        console.log("Processing using Invidia Chip..");
        console.log("");
    }
}

//store
interface StorageDevice {
    store(data: any): void
}

class InternalMemory implements StorageDevice {
    store(data) {
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

interface ExternalDevice extends StorageDevice {
    //Fields

    //Methods
}

class SSD implements ExternalDevice {
    store(data) {
        console.log("storing data on SSD");
    }
}

class HDD implements ExternalDevice {
    store(data) {
        console.log("storing data on HDD");
    }
}

//Output Device
interface OutputDevice {
    output(data: any): void
}

class Monitor implements OutputDevice {
    output(data) {
        console.log("---- Data output from Monitor -------------------");
        console.log("");
    }
}

class Projector implements OutputDevice {
    output(data) {
        console.log("---- Data output from Projector -------------------");
        console.log("");
    }
}

// Computer Classes
abstract class Computer {

    // Fields
    private brand: string;
    private model: string;
    private user = new User();
    private inputDevice: InputDevice;
    private proccessorChip: ProccessorChip;
    private storageDevice: StorageDevice;
    private outputDevice: OutputDevice;

    // Methods
    constructor(brand, model, inputDevice: InputDevice, proccessorChip: ProccessorChip, storageDevice: StorageDevice, outputDevice: OutputDevice) {
        this.brand = brand;
        this.model = model;
        this.inputDevice = inputDevice;
        this.proccessorChip = proccessorChip;
        this.storageDevice = storageDevice;
        this.outputDevice = outputDevice;
    }

    input(data: any) {
        this.inputDevice.input(data)
    }

    process(data: any) {
        this.proccessorChip.process(data)
    }

    store(data) {
        this.storageDevice.store(data)
    }

    output(data) {
        this.outputDevice.output(data)
    }

    // Setters
    setBrand(brand: string) {
        this.brand = brand;
    }
    setModel(model: string) {
        this.model = model;
    }
    setInputDevice(inputDevice: InputDevice) {
        this.inputDevice = inputDevice;
    }
    setProcessorChip(proccessorChip: ProccessorChip) {
        this.proccessorChip = proccessorChip;
    }
    setStorageDevice(storageDevice: StorageDevice) {
        this.storageDevice = storageDevice;
    }
    setOutputDevice(outputDevice: OutputDevice) {
        this.outputDevice = outputDevice;
    }

    //getters
    getBrand() {
        return this.brand;
    }
    getModel() {
        return this.model;
    }
    getInputDevice() {
        return this.inputDevice;
    }
    getProcessorChip() {
        return this.proccessorChip;
    }
    getStorageDevice() {
        return this.storageDevice;
    }
    getOutputDevice() {
        return this.outputDevice;
    }

}

class Desktop extends Computer {
    // Fields

    // Methods
}

class Laptop extends Computer {
    // Fields
    // Methods
    fold() {
        console.log("-----------Folding Process ----------")
        console.log("Step1: Folding")
        console.log("")
    }
}

class Walltop extends Computer {
    // Fields

    // Methods
    // Method Overriding

}


// Objects
let computer: Computer;
// can be a Desktop Computer
computer = new Desktop("HP", "XP-X2", new Mouse(), new Intel(), new InternalMemory(), new Projector());
computer.setBrand("DELL");
console.log(computer.getBrand());


// can be a Laptop Computer
computer = new Laptop("HP", "XP-X2", new KeyBoard(), new AMD(), new SSD(), new Monitor());
computer.process('cccgdnbhx');
computer.setInputDevice(new Mouse());
console.log(computer.getInputDevice());
computer.input("");


// // can be a walltop Computer
computer = new Walltop("HP", "XP-X2", new KeyBoard(), new Nvidia, new HDD(), new Projector());
computer.store('cccgdnbhx');
computer.setStorageDevice(new SSD());
console.log(computer.getStorageDevice());
computer.store('x');






