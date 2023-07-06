var Washing = /** @class */ (function () {
    function Washing() {
    }
    Washing.prototype.wash = function () {
        console.log("Washing...");
    };
    return Washing;
}());
var Rinsing = /** @class */ (function () {
    function Rinsing() {
    }
    Rinsing.prototype.rinse = function () {
        console.log("Rinsing...");
    };
    return Rinsing;
}());
var Spinning = /** @class */ (function () {
    function Spinning() {
    }
    Spinning.prototype.spin = function () {
        console.log("Spinning...");
    };
    return Spinning;
}());
var WashingMachine = /** @class */ (function () {
    function WashingMachine() {
        this.washing = new Washing();
        this.rinsing = new Rinsing();
        this.spinning = new Spinning();
    }
    WashingMachine.prototype.startWashing = function () {
        this.washing.wash();
        this.rinsing.rinse();
        this.spinning.spin();
    };
    return WashingMachine;
}());
// Main method
var washingMachine = new WashingMachine();
washingMachine.startWashing();
