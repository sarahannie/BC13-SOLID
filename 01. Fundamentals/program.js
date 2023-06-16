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
var User = /** @class */ (function () {
    function User() {
        // Fields
        this.username = 'johndoe';
        this.password = 'pswd';
    }
    return User;
}());
var KeyBoard = /** @class */ (function () {
    function KeyBoard() {
    }
    KeyBoard.prototype.input = function (data) {
        console.log("---- Data input from Keyboard -------------------");
        console.log("Step 1: Listen to data from keyboard");
        console.log("Step 2: Pick data from keyboard");
        console.log("Step 3: Locate current cursor position");
        console.log("Step 4: Place data to the current cursor position");
        console.log("Step 5: Start listening to data from keyboard");
        console.log("");
    };
    return KeyBoard;
}());
var Mouse = /** @class */ (function () {
    function Mouse() {
    }
    Mouse.prototype.input = function (data) {
        console.log("---- Data input from Mouse -------------------");
        console.log("Step 1: Listen to data from Mouse");
        console.log("");
    };
    return Mouse;
}());
// Computer Classes
var Computer = /** @class */ (function () {
    // Methods
    function Computer(brand, model, inputDevice) {
        this.user = new User();
        this.brand = brand;
        this.model = model;
        this.inputDevice = inputDevice;
    }
    Computer.prototype.input = function (data) {
        this.inputDevice.input(data);
    };
    Computer.prototype.process = function (data, operation, chip) {
        if (chip == "Intel") {
            console.log("--------------------");
            console.log("Processing using Intel Chip..");
            console.log("");
        }
        else if (chip == "AMD") {
            console.log("--------------------");
            console.log("Processing using AMD Chip..");
            console.log("");
        }
        else if (chip == "Invidia") {
            console.log("--------------------");
            console.log("Processing using Invidia Chip..");
            console.log("");
        }
        else { }
    };
    Computer.prototype.store = function (memory) {
        if (memory == "SSD") {
            console.log("storing data on SSD");
        }
        else {
            console.log("---- Storing data in internal memory -------------------");
            console.log("Step 1: Receive data to be stored");
            console.log("Step 2: Open internal memory where data is to be stored");
            console.log("Step 3: Prepare for data storage");
            console.log("Step 4: launch storage operation");
            console.log("Step 5: Send back signal representing the state of the storage operation");
            console.log("");
        }
    };
    Computer.prototype.output = function (data, device) {
        if (device == "monitor") {
            console.log("---- Data input from Monitor -------------------");
            console.log("");
        }
        else if (device == "projector") {
            console.log("---- Data input from Projector -------------------");
            console.log("");
        }
        else { }
    };
    return Computer;
}());
var Desktop = /** @class */ (function (_super) {
    __extends(Desktop, _super);
    function Desktop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Desktop;
}(Computer));
var Laptop = /** @class */ (function (_super) {
    __extends(Laptop, _super);
    function Laptop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Fields
    // Methods
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
    return Walltop;
}(Computer));
// Objects
var computer;
// can be a Desktop Computer
computer = new Desktop("HP", "XP-X2", new Mouse());
computer.input('cccgdnbhx');
// can be a Laptop Computer
computer = new Laptop("HP", "XP-X2", new KeyBoard());
computer.input('cccgdnbhx');
// can be a walltop Computer
computer = new Walltop("HP", "XP-X2", new KeyBoard());
computer.input('cccgdnbhx');
