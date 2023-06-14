var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Computer = /** @class */ (function () {
    // Methods
    function Computer(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    Computer.prototype.input = function () {
        console.log("---- Input Process -------------------");
        console.log("Step 1: Listen to data from keyboard");
        console.log("Step 2: Pick data from keyboard");
        console.log("Step 3: Locate current cursor position");
        console.log("Step 4: Place data to the current cursor position");
        console.log("Step 5: Start listening to data from keyboard");
        console.log("");
    };
    Computer.prototype.store = function () {
        console.log("---- Storage Process -------------------");
        console.log("Step 1: Receive data to be stored");
        console.log("Step 2: Open internal memory where data is to be stored");
        console.log("Step 3: Prepare for data storage");
        console.log("Step 4: launch storage operation");
        console.log("Step 5: Send back signal representing the state of the storage operation");
        console.log("");
    };
    Computer.prototype.output = function () {
        console.log("---- Output Process -------------------");
        console.log("Step 1: Receive data to be output");
        console.log("Step 2: Open monitor where data is to be dispalyed");
        console.log("Step 3: Prepare for data output process");
        console.log("Step 4: launch output operation");
        console.log("Step 5: Send back signal representing the state of the output operation");
        console.log("");
    };
    return Computer;
}());
var Desktop = /** @class */ (function (_super) {
    __extends(Desktop, _super);
    function Desktop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Fields
    // Methods
    Desktop.prototype.process = function (data, operation) {
        console.log("---- Processing in a Desktop Computer -------------------");
        console.log("Step 1: Receive data to be proceesed");
        console.log("Step 2: Receive operation to carry out on the data received");
        console.log("Step 3: Prepare for operation");
        console.log("Step 4: launch operation");
        console.log("Step 5: Send back signal representing the state of the operation");
        console.log("");
    };
    return Desktop;
}(Computer));
var Laptop = /** @class */ (function (_super) {
    __extends(Laptop, _super);
    function Laptop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Fields
    // Methods
    Laptop.prototype.process = function (data, operation) {
        console.log("---- Processing in a Laptop Computer -------------------");
        console.log("Step 1: Receive data to be proceesed");
        console.log("Step 2: Receive operation to carry out on the data received");
        console.log("Step 3: Prepare for operation");
        console.log("Step 4: launch operation");
        console.log("Step 5: Send back signal representing the state of the operation");
        console.log("");
    };
    Laptop.prototype.fold = function () {
        console.log("-----------Folding Process ----------");
        console.log("Step1: Folding");
        console.log("");
    };
    return Laptop;
}(Computer));
var Walltop = /** @class */ (function (_super) {
    __extends(Walltop, _super);
    function Walltop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Fields
    // Methods
    // Method Overriding
    Walltop.prototype.input = function () {
        console.log("---- Input Using Screen Touch Technology -------------------");
        console.log("Step 1: Listen to data from Screen");
        console.log("Step 2: Pick data from Screen");
        console.log("Step 3: Locate current Tourch position");
        console.log("Step 4: Place data to the current Tourch position");
        console.log("Step 5: Start listening to data from Screen");
        console.log("");
    };
    Walltop.prototype.process = function (data, operation) {
        console.log("---- Processing in a Walltop Computer -------------------");
        console.log("Step 1: Receive data to be proceesed");
        console.log("Step 2: Receive operation to carry out on the data received");
        console.log("Step 3: Prepare for operation");
        console.log("Step 4: launch operation");
        console.log("Step 5: Send back signal representing the state of the operation");
        console.log("");
    };
    return Walltop;
}(Computer));
var computer;
// can be a Desktop Computer
computer = new Desktop("HP", "XP-X2");
computer.process('s', 's');
// can be a Laptop Computer
computer = new Laptop("HP", "XP-X2");
computer.process('s', 's');
// can be a walltop Computer
computer = new Walltop("HP", "XP-X2");
computer.process('s', 's');
// const macBook = new Laptop("Apple", "MacBook Pro");
// macBook.input();
// macBook.process("1234567", "Storage");
// macBook.store();
// macBook.output();
// macBook.fold();
