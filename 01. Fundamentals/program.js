var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Enscapulation
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
    Computer.prototype.process = function (data, operation) {
        console.log("---- Processing -------------------");
        console.log("Step 1: Receive data to be proceesed");
        console.log("Step 2: Receive operation to carry out on the data received");
        console.log("Step 3: Prepare for operation");
        console.log("Step 4: launch operation");
        console.log("Step 5: Send back signal representing the state of the operation");
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
//  Inheritance of class
var Desktop = /** @class */ (function (_super) {
    __extends(Desktop, _super);
    function Desktop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Field
    // Method
    Desktop.prototype.fold = function () {
        console.log("------ Folding Process-------");
        console.log(" step folding");
        console.log();
    };
    return Desktop;
}(Computer));
var macBook = new Desktop("Apple", "MacBook Pro");
console.log(macBook.brand);
macBook.input();
macBook.process("1234567", "Storage");
macBook.store();
macBook.output();
