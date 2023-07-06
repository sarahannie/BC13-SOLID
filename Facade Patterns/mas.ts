class Washing {
    wash(): void {
      console.log("Washing...");
    }
  }
  
  class Rinsing {
    rinse(): void {
      console.log("Rinsing...");
    }
  }
  
  class Spinning {
    spin(): void {
      console.log("Spinning...");
    }
  }
  
  class WashingMachine {
    // fields
    private washing: Washing;
    private rinsing: Rinsing;
    private spinning: Spinning;
    // methods
    constructor() {
      this.washing = new Washing();
      this.rinsing = new Rinsing();
      this.spinning = new Spinning();
    }
  
    startWashing(): void {
      this.washing.wash();
      this.rinsing.rinse();
      this.spinning.spin();
    }
  }
  
  // Main method
  const washingMachine = new WashingMachine();
  washingMachine.startWashing();
  