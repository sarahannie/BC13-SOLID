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
var Intel = /** @class */ (function () {
    function Intel() {
    }
    Intel.prototype.process = function (data) {
        console.log("--------------------");
        console.log("Processing using Intel Chip..");
        console.log("");
    };
    return Intel;
}());
var AMD = /** @class */ (function () {
    function AMD() {
    }
    AMD.prototype.process = function (data) {
        console.log("--------------------");
        console.log("Processing using AMD Chip..");
        console.log("");
    };
    return AMD;
}());
var Nvidia = /** @class */ (function () {
    function Nvidia() {
    }
    Nvidia.prototype.process = function (data) {
        console.log("--------------------");
        console.log("Processing using Invidia Chip..");
        console.log("");
    };
    return Nvidia;
}());
var InternalMemory = /** @class */ (function () {
    function InternalMemory() {
    }
    InternalMemory.prototype.store = function (data) {
        console.log("---- Storing data in internal memory -------------------");
        console.log("Step 1: Receive data to be stored");
        console.log("Step 2: Open internal memory where data is to be stored");
        console.log("Step 3: Prepare for data storage");
        console.log("Step 4: launch storage operation");
        console.log("Step 5: Send back signal representing the state of the storage operation");
        console.log("");
    };
    return InternalMemory;
}());
var SSD = /** @class */ (function () {
    function SSD() {
    }
    SSD.prototype.store = function (data) {
        console.log("storing data on SSD");
    };
    return SSD;
}());
var HDD = /** @class */ (function () {
    function HDD() {
    }
    HDD.prototype.store = function (data) {
        console.log("storing data on HDD");
    };
    return HDD;
}());
var Monitor = /** @class */ (function () {
    function Monitor() {
    }
    Monitor.prototype.output = function (data) {
        console.log("---- Data output from Monitor -------------------");
        console.log("");
    };
    return Monitor;
}());
var Projector = /** @class */ (function () {
    function Projector() {
    }
    Projector.prototype.output = function (data) {
        console.log("---- Data output from Projector -------------------");
        console.log("");
    };
    return Projector;
}());
// Computer Classes
var Computer = /** @class */ (function () {
    // Methods
    function Computer(brand, model, inputDevice, proccessorChip, storageDevice, outputDevice) {
        this.user = new User();
        this.brand = brand;
        this.model = model;
        this.inputDevice = inputDevice;
        this.proccessorChip = proccessorChip;
        this.storageDevice = storageDevice;
        this.outputDevice = outputDevice;
    }
    Computer.prototype.input = function (data) {
        this.inputDevice.input(data);
    };
    Computer.prototype.process = function (data) {
        this.proccessorChip.process(data);
    };
    Computer.prototype.store = function (data) {
        this.storageDevice.store(data);
    };
    Computer.prototype.output = function (data) {
        this.outputDevice.output(data);
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
computer = new Desktop("HP", "XP-X2", new Mouse(), new Intel(), new InternalMemory(), new Projector());
computer.output('cccgdnbhx');
// can be a Laptop Computer
computer = new Laptop("HP", "XP-X2", new KeyBoard(), new AMD(), new SSD(), new Monitor());
computer.process('cccgdnbhx');
// can be a walltop Computer
computer = new Walltop("HP", "XP-X2", new KeyBoard(), new Nvidia, new HDD(), new Projector());
computer.store('cccgdnbhx');
